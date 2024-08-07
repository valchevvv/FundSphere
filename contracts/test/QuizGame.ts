import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "ethers";
import { ethers as hre } from "hardhat";

describe("Lock", function () {
  async function deployOneYearLockFixture() {
    const ONE_GWEI = 1_000_000_000; // 1 ETH
    const amount = ONE_GWEI;
    const question = "Who is the founder of Ethereum?";
    const answer = "Vitalik Buterin";
    const salt = "0x123";

    const hashedAnswerVariable = ethers.solidityPackedKeccak256(
      ["string", "string"],
      [answer, salt]
    );

    const [owner, getOtherAccount] = await hre.getSigners();
    const QuizGame = await hre.getContractFactory("QuizGame");
    const quizGameContract = await QuizGame.deploy(
      question,
      hashedAnswerVariable
    );

    const factoryContract = await hre.getContractFactory("QuizFactory");
    const quizFactoryContract = await factoryContract.deploy();

    return {
      quizGameContract,
      owner,
      amount,
      question,
      answer,
      quizFactoryContract,
      hashedAnswerVariable,
    };
  }

  describe("Quiz Game Deployment", function () {
    it("Should deploy the Quiz Game contract", async function () {
      const { quizGameContract } = await loadFixture(deployOneYearLockFixture);

      expect(quizGameContract.target).to.not.be.undefined;
    });

    it("Should deploy the Quiz Game contract with the correct question", async function () {
      const { quizGameContract, question } = await loadFixture(
        deployOneYearLockFixture
      );

      expect(await quizGameContract.question()).to.equal(question);
    });

    it("Should add created quiz to the quizzes array", async function () {
      const { quizFactoryContract, question, hashedAnswerVariable } =
        await loadFixture(deployOneYearLockFixture);
      await quizFactoryContract.createQuiz(question, hashedAnswerVariable);
      const quizzes = await quizFactoryContract.getQuizzes();
      expect(quizzes.length).to.equal(1);
    });
  });

  describe("Quiz Game Contract", function () {
    it("Should receive ether and increase balance", async function () {
      const { quizGameContract, owner, amount } = await loadFixture(
        deployOneYearLockFixture
      );

      await owner.sendTransaction({
        to: quizGameContract.target,
        value: amount,
      });

      expect(await hre.provider.getBalance(quizGameContract.target)).to.equal(
        amount
      );
    });

    it("Should guess the right answer and receive the reward", async function () {
      const { quizGameContract, owner, amount, answer } = await loadFixture(
        deployOneYearLockFixture
      );

      await owner.sendTransaction({
        to: quizGameContract.target,
        value: 5,
      });

      await expect(quizGameContract.guess(answer)).not.to.be.reverted;
      expect(await hre.provider.getBalance(quizGameContract.target)).to.equal(
        0
      );
    });

    it("Should guess the right answer and not receive the reward", async function () {
      const { quizGameContract, answer } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(quizGameContract.guess(answer)).to.be.reverted;
    });

    it("Should revert on guessing the wrong answer", async function () {
      const { quizGameContract } = await loadFixture(deployOneYearLockFixture);

      await expect(quizGameContract.guess("test")).to.be.reverted;
    });

    it("Should show the right balance", async function () {
      const { quizGameContract, owner, amount } = await loadFixture(
        deployOneYearLockFixture
      );

      await owner.sendTransaction({
        to: quizGameContract.target,
        value: amount,
      });

      expect(await quizGameContract.getBalance()).to.equal(amount);
    });

    it("Should revert if the contract balance is empty 0", async function () {
      const { quizGameContract, owner, amount, answer } = await loadFixture(
        deployOneYearLockFixture
      );

      await expect(
        owner.sendTransaction({
          to: quizGameContract.target,
          value: amount,
          data: "0x00",
        })
      ).changeEtherBalance(quizGameContract.target, amount);
    });
  });
});
