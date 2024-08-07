/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  CompaignFactory,
  CompaignFactoryInterface,
} from "../CompaignFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "compaignAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "owner",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "targetAmmount",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "endDate",
        type: "string",
      },
    ],
    name: "CompaignCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "compaignAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DonationMade",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_owner",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "int256",
        name: "_targetAmmount",
        type: "int256",
      },
      {
        internalType: "string",
        name: "_endDate",
        type: "string",
      },
    ],
    name: "addCompaign",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "compaigns",
    outputs: [
      {
        internalType: "contract Compaign",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "donateToCompaign",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCompaigns",
    outputs: [
      {
        internalType: "contract Compaign[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061184c806100206000396000f3fe608060405260043610620000445760003560e01c806318ed9aa6146200004957806351b4df571462000079578063ae73c8f014620000a7578063cbc261d714620000c7575b600080fd5b3480156200005657600080fd5b50620000616200010b565b60405162000070919062000552565b60405180910390f35b3480156200008657600080fd5b50620000a560048036038101906200009f919062000727565b6200019b565b005b620000c56004803603810190620000bf919062000831565b62000289565b005b348015620000d457600080fd5b50620000f36004803603810190620000ed919062000831565b620003bc565b60405162000102919062000874565b60405180910390f35b606060008054806020026020016040519081016040528092919081815260200182805480156200019157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000146575b5050505050905090565b600084848484604051620001af90620003fc565b620001be94939291906200092b565b604051809103906000f080158015620001db573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa97e314e7028f14f1efc5faef8f39ab7dcfb855de4792b0963a4b080911abf5e81868686866040516200027a959493929190620009b2565b60405180910390a15050505050565b6000805490508110620002d3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002ca9062000a74565b60405180910390fd5b6000808281548110620002eb57620002ea62000a96565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ed88c68e346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200036157600080fd5b505af115801562000376573d6000803e3d6000fd5b50505050507f70c6bc6cf53707fb5561feef795d557f7e46f57bd4f1a13ce36e9ffdf58d38bb813334604051620003b09392919062000ad6565b60405180910390a15050565b60008181548110620003cd57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610d038062000b1483390190565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620004816200047b620004758462000436565b62000456565b62000436565b9050919050565b6000620004958262000460565b9050919050565b6000620004a98262000488565b9050919050565b620004bb816200049c565b82525050565b6000620004cf8383620004b0565b60208301905092915050565b6000602082019050919050565b6000620004f5826200040a565b62000501818562000415565b93506200050e8362000426565b8060005b8381101562000545578151620005298882620004c1565b97506200053683620004db565b92505060018101905062000512565b5085935050505092915050565b600060208201905081810360008301526200056e8184620004e8565b905092915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620005df8262000594565b810181811067ffffffffffffffff82111715620006015762000600620005a5565b5b80604052505050565b60006200061662000576565b9050620006248282620005d4565b919050565b600067ffffffffffffffff821115620006475762000646620005a5565b5b620006528262000594565b9050602081019050919050565b82818337600083830152505050565b6000620006856200067f8462000629565b6200060a565b905082815260208101848484011115620006a457620006a36200058f565b5b620006b18482856200065f565b509392505050565b600082601f830112620006d157620006d06200058a565b5b8135620006e38482602086016200066e565b91505092915050565b6000819050919050565b6200070181620006ec565b81146200070d57600080fd5b50565b6000813590506200072181620006f6565b92915050565b6000806000806080858703121562000744576200074362000580565b5b600085013567ffffffffffffffff81111562000765576200076462000585565b5b6200077387828801620006b9565b945050602085013567ffffffffffffffff81111562000797576200079662000585565b5b620007a587828801620006b9565b9350506040620007b88782880162000710565b925050606085013567ffffffffffffffff811115620007dc57620007db62000585565b5b620007ea87828801620006b9565b91505092959194509250565b6000819050919050565b6200080b81620007f6565b81146200081757600080fd5b50565b6000813590506200082b8162000800565b92915050565b6000602082840312156200084a576200084962000580565b5b60006200085a848285016200081a565b91505092915050565b6200086e816200049c565b82525050565b60006020820190506200088b600083018462000863565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620008cd578082015181840152602081019050620008b0565b60008484015250505050565b6000620008e68262000891565b620008f281856200089c565b935062000904818560208601620008ad565b6200090f8162000594565b840191505092915050565b6200092581620006ec565b82525050565b60006080820190508181036000830152620009478187620008d9565b905081810360208301526200095d8186620008d9565b90506200096e60408301856200091a565b8181036060830152620009828184620008d9565b905095945050505050565b60006200099a8262000436565b9050919050565b620009ac816200098d565b82525050565b600060a082019050620009c96000830188620009a1565b8181036020830152620009dd8187620008d9565b90508181036040830152620009f38186620008d9565b905062000a0460608301856200091a565b818103608083015262000a188184620008d9565b90509695505050505050565b7f436f6d706169676e20646f6573206e6f74206578697374000000000000000000600082015250565b600062000a5c6017836200089c565b915062000a698262000a24565b602082019050919050565b6000602082019050818103600083015262000a8f8162000a4d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b62000ad081620007f6565b82525050565b600060608201905062000aed6000830186620009a1565b62000afc6020830185620009a1565b62000b0b604083018462000ac5565b94935050505056fe60806040526000600355600060045560405162000d0338038062000d03833981810160405281019062000033919062000248565b836000908162000044919062000562565b50826001908162000056919062000562565b508160028190555080600590816200006f919062000562565b505050505062000649565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000e38262000098565b810181811067ffffffffffffffff82111715620001055762000104620000a9565b5b80604052505050565b60006200011a6200007a565b9050620001288282620000d8565b919050565b600067ffffffffffffffff8211156200014b576200014a620000a9565b5b620001568262000098565b9050602081019050919050565b60005b838110156200018357808201518184015260208101905062000166565b60008484015250505050565b6000620001a6620001a0846200012d565b6200010e565b905082815260208101848484011115620001c557620001c462000093565b5b620001d284828562000163565b509392505050565b600082601f830112620001f257620001f16200008e565b5b8151620002048482602086016200018f565b91505092915050565b6000819050919050565b62000222816200020d565b81146200022e57600080fd5b50565b600081519050620002428162000217565b92915050565b6000806000806080858703121562000265576200026462000084565b5b600085015167ffffffffffffffff81111562000286576200028562000089565b5b6200029487828801620001da565b945050602085015167ffffffffffffffff811115620002b857620002b762000089565b5b620002c687828801620001da565b9350506040620002d98782880162000231565b925050606085015167ffffffffffffffff811115620002fd57620002fc62000089565b5b6200030b87828801620001da565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200036a57607f821691505b60208210810362000380576200037f62000322565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003ea7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620003ab565b620003f68683620003ab565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004436200043d62000437846200040e565b62000418565b6200040e565b9050919050565b6000819050919050565b6200045f8362000422565b620004776200046e826200044a565b848454620003b8565b825550505050565b600090565b6200048e6200047f565b6200049b81848462000454565b505050565b5b81811015620004c357620004b760008262000484565b600181019050620004a1565b5050565b601f8211156200051257620004dc8162000386565b620004e7846200039b565b81016020851015620004f7578190505b6200050f62000506856200039b565b830182620004a0565b50505b505050565b600082821c905092915050565b6000620005376000198460080262000517565b1980831691505092915050565b600062000552838362000524565b9150826002028217905092915050565b6200056d8262000317565b67ffffffffffffffff811115620005895762000588620000a9565b5b62000595825462000351565b620005a2828285620004c7565b600060209050601f831160018114620005da5760008415620005c5578287015190505b620005d1858262000544565b86555062000641565b601f198416620005ea8662000386565b60005b828110156200061457848901518255600182019150602085019450602081019050620005ed565b8683101562000634578489015162000630601f89168262000524565b8355505b6001600288020188555050505b505050505050565b6106aa80620006596000396000f3fe6080604052600436106100745760003560e01c80639449985b1161004e5780639449985b1461010e578063c24a0f8b14610139578063c8c5497414610164578063ed88c68e1461018f57610083565b806306fdde031461008d57806318015191146100b85780638da5cb5b146100e357610083565b3661008357610081610199565b005b61008b610199565b005b34801561009957600080fd5b506100a261025f565b6040516100af91906104ab565b60405180910390f35b3480156100c457600080fd5b506100cd6102ed565b6040516100da91906104e6565b60405180910390f35b3480156100ef57600080fd5b506100f86102f3565b60405161010591906104ab565b60405180910390f35b34801561011a57600080fd5b50610123610381565b60405161013091906104e6565b60405180910390f35b34801561014557600080fd5b5061014e610387565b60405161015b91906104ab565b60405180910390f35b34801561017057600080fd5b50610179610415565b60405161018691906104e6565b60405180910390f35b610197610199565b005b600034116101dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101d39061054d565b60405180910390fd5b34600360008282546101ee919061059c565b92505081905550600160046000828254610208919061059c565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f264f630d9efa0d07053a31163641d9fcc0adafc9d9e76f1c37c2ce3a558d2c523460405161025591906105f9565b60405180910390a2565b6001805461026c90610643565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610643565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b505050505081565b60045481565b6000805461030090610643565b80601f016020809104026020016040519081016040528092919081815260200182805461032c90610643565b80156103795780601f1061034e57610100808354040283529160200191610379565b820191906000526020600020905b81548152906001019060200180831161035c57829003601f168201915b505050505081565b60025481565b6005805461039490610643565b80601f01602080910402602001604051908101604052809291908181526020018280546103c090610643565b801561040d5780601f106103e25761010080835404028352916020019161040d565b820191906000526020600020905b8154815290600101906020018083116103f057829003601f168201915b505050505081565b60035481565b600081519050919050565b600082825260208201905092915050565b60005b8381101561045557808201518184015260208101905061043a565b60008484015250505050565b6000601f19601f8301169050919050565b600061047d8261041b565b6104878185610426565b9350610497818560208601610437565b6104a081610461565b840191505092915050565b600060208201905081810360008301526104c58184610472565b905092915050565b6000819050919050565b6104e0816104cd565b82525050565b60006020820190506104fb60008301846104d7565b92915050565b7f446f6e6174696f6e206d7573742062652067726561746572207468616e203000600082015250565b6000610537601f83610426565b915061054282610501565b602082019050919050565b600060208201905081810360008301526105668161052a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105a7826104cd565b91506105b2836104cd565b9250828201905082811215600083121683821260008412151617156105da576105d961056d565b5b92915050565b6000819050919050565b6105f3816105e0565b82525050565b600060208201905061060e60008301846105ea565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061065b57607f821691505b60208210810361066e5761066d610614565b5b5091905056fea26469706673582212204954df34bca48649c09b1c6ca2f2ef7f1f397e561ac65dc7160de46efb3aca5c64736f6c63430008180033a2646970667358221220f98c7d020f1bea51b8184e851d33120eafba0029e1ca2a871c30d55027bdfd5b64736f6c63430008180033";

type CompaignFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CompaignFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CompaignFactory__factory extends ContractFactory {
  constructor(...args: CompaignFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CompaignFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CompaignFactory__factory {
    return super.connect(runner) as CompaignFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CompaignFactoryInterface {
    return new Interface(_abi) as CompaignFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CompaignFactory {
    return new Contract(address, _abi, runner) as unknown as CompaignFactory;
  }
}
