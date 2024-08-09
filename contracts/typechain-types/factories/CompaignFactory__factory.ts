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
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_image",
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
  "0x608060405234801561001057600080fd5b50611afe806100206000396000f3fe608060405260043610620000445760003560e01c806318ed9aa61462000049578063ae73c8f01462000079578063b38fdb861462000099578063cbc261d714620000c7575b600080fd5b3480156200005657600080fd5b50620000616200010b565b60405162000070919062000558565b60405180910390f35b620000976004803603810190620000919190620005cb565b6200019b565b005b348015620000a657600080fd5b50620000c56004803603810190620000bf91906200079a565b620002ce565b005b348015620000d457600080fd5b50620000f36004803603810190620000ed9190620005cb565b620003c2565b604051620001029190620008e2565b60405180910390f35b606060008054806020026020016040519081016040528092919081815260200182805480156200019157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831162000146575b5050505050905090565b6000805490508110620001e5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001dc9062000960565b60405180910390fd5b6000808281548110620001fd57620001fc62000982565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff1663ed88c68e346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200027357600080fd5b505af115801562000288573d6000803e3d6000fd5b50505050507f70c6bc6cf53707fb5561feef795d557f7e46f57bd4f1a13ce36e9ffdf58d38bb813334604051620002c293929190620009e7565b60405180910390a15050565b6000868686868686604051620002e49062000402565b620002f59695949392919062000aad565b604051809103906000f08015801562000312573d6000803e3d6000fd5b5090506000819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507fa97e314e7028f14f1efc5faef8f39ab7dcfb855de4792b0963a4b080911abf5e8188888686604051620003b195949392919062000b3d565b60405180910390a150505050505050565b60008181548110620003d357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610f198062000bb083390190565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000487620004816200047b846200043c565b6200045c565b6200043c565b9050919050565b60006200049b8262000466565b9050919050565b6000620004af826200048e565b9050919050565b620004c181620004a2565b82525050565b6000620004d58383620004b6565b60208301905092915050565b6000602082019050919050565b6000620004fb8262000410565b6200050781856200041b565b935062000514836200042c565b8060005b838110156200054b5781516200052f8882620004c7565b97506200053c83620004e1565b92505060018101905062000518565b5085935050505092915050565b60006020820190508181036000830152620005748184620004ee565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b620005a58162000590565b8114620005b157600080fd5b50565b600081359050620005c5816200059a565b92915050565b600060208284031215620005e457620005e362000586565b5b6000620005f484828501620005b4565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620006528262000607565b810181811067ffffffffffffffff8211171562000674576200067362000618565b5b80604052505050565b6000620006896200057c565b905062000697828262000647565b919050565b600067ffffffffffffffff821115620006ba57620006b962000618565b5b620006c58262000607565b9050602081019050919050565b82818337600083830152505050565b6000620006f8620006f2846200069c565b6200067d565b90508281526020810184848401111562000717576200071662000602565b5b62000724848285620006d2565b509392505050565b600082601f830112620007445762000743620005fd565b5b813562000756848260208601620006e1565b91505092915050565b6000819050919050565b62000774816200075f565b81146200078057600080fd5b50565b600081359050620007948162000769565b92915050565b60008060008060008060c08789031215620007ba57620007b962000586565b5b600087013567ffffffffffffffff811115620007db57620007da6200058b565b5b620007e989828a016200072c565b965050602087013567ffffffffffffffff8111156200080d576200080c6200058b565b5b6200081b89828a016200072c565b955050604087013567ffffffffffffffff8111156200083f576200083e6200058b565b5b6200084d89828a016200072c565b945050606087013567ffffffffffffffff8111156200087157620008706200058b565b5b6200087f89828a016200072c565b93505060806200089289828a0162000783565b92505060a087013567ffffffffffffffff811115620008b657620008b56200058b565b5b620008c489828a016200072c565b9150509295509295509295565b620008dc81620004a2565b82525050565b6000602082019050620008f96000830184620008d1565b92915050565b600082825260208201905092915050565b7f436f6d706169676e20646f6573206e6f74206578697374000000000000000000600082015250565b600062000948601783620008ff565b9150620009558262000910565b602082019050919050565b600060208201905081810360008301526200097b8162000939565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000620009be826200043c565b9050919050565b620009d081620009b1565b82525050565b620009e18162000590565b82525050565b6000606082019050620009fe6000830186620009c5565b62000a0d6020830185620009c5565b62000a1c6040830184620009d6565b949350505050565b600081519050919050565b60005b8381101562000a4f57808201518184015260208101905062000a32565b60008484015250505050565b600062000a688262000a24565b62000a748185620008ff565b935062000a8681856020860162000a2f565b62000a918162000607565b840191505092915050565b62000aa7816200075f565b82525050565b600060c082019050818103600083015262000ac9818962000a5b565b9050818103602083015262000adf818862000a5b565b9050818103604083015262000af5818762000a5b565b9050818103606083015262000b0b818662000a5b565b905062000b1c608083018562000a9c565b81810360a083015262000b30818462000a5b565b9050979650505050505050565b600060a08201905062000b546000830188620009c5565b818103602083015262000b68818762000a5b565b9050818103604083015262000b7e818662000a5b565b905062000b8f606083018562000a9c565b818103608083015262000ba3818462000a5b565b9050969550505050505056fe60806040526000600555600060065560405162000f1938038062000f1983398181016040528101906200003391906200026e565b8560009081620000449190620005f0565b508460019081620000569190620005f0565b508360029081620000689190620005f0565b5082600390816200007a9190620005f0565b50816004819055508060079081620000939190620005f0565b50505050505050620006d7565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200010982620000be565b810181811067ffffffffffffffff821117156200012b576200012a620000cf565b5b80604052505050565b600062000140620000a0565b90506200014e8282620000fe565b919050565b600067ffffffffffffffff821115620001715762000170620000cf565b5b6200017c82620000be565b9050602081019050919050565b60005b83811015620001a95780820151818401526020810190506200018c565b60008484015250505050565b6000620001cc620001c68462000153565b62000134565b905082815260208101848484011115620001eb57620001ea620000b9565b5b620001f884828562000189565b509392505050565b600082601f830112620002185762000217620000b4565b5b81516200022a848260208601620001b5565b91505092915050565b6000819050919050565b620002488162000233565b81146200025457600080fd5b50565b60008151905062000268816200023d565b92915050565b60008060008060008060c087890312156200028e576200028d620000aa565b5b600087015167ffffffffffffffff811115620002af57620002ae620000af565b5b620002bd89828a0162000200565b965050602087015167ffffffffffffffff811115620002e157620002e0620000af565b5b620002ef89828a0162000200565b955050604087015167ffffffffffffffff811115620003135762000312620000af565b5b6200032189828a0162000200565b945050606087015167ffffffffffffffff811115620003455762000344620000af565b5b6200035389828a0162000200565b93505060806200036689828a0162000257565b92505060a087015167ffffffffffffffff8111156200038a5762000389620000af565b5b6200039889828a0162000200565b9150509295509295509295565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003f857607f821691505b6020821081036200040e576200040d620003b0565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004787fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000439565b62000484868362000439565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620004d1620004cb620004c5846200049c565b620004a6565b6200049c565b9050919050565b6000819050919050565b620004ed83620004b0565b62000505620004fc82620004d8565b84845462000446565b825550505050565b600090565b6200051c6200050d565b62000529818484620004e2565b505050565b5b8181101562000551576200054560008262000512565b6001810190506200052f565b5050565b601f821115620005a0576200056a8162000414565b620005758462000429565b8101602085101562000585578190505b6200059d620005948562000429565b8301826200052e565b50505b505050565b600082821c905092915050565b6000620005c560001984600802620005a5565b1980831691505092915050565b6000620005e08383620005b2565b9150826002028217905092915050565b620005fb82620003a5565b67ffffffffffffffff811115620006175762000616620000cf565b5b620006238254620003df565b6200063082828562000555565b600060209050601f83116001811462000668576000841562000653578287015190505b6200065f8582620005d2565b865550620006cf565b601f198416620006788662000414565b60005b82811015620006a2578489015182556001820191506020850194506020810190506200067b565b86831015620006c25784890151620006be601f891682620005b2565b8355505b6001600288020188555050505b505050505050565b61083280620006e76000396000f3fe60806040526004361061008a5760003560e01c80639449985b116100595780639449985b1461014f578063c24a0f8b1461017a578063c8c54974146101a5578063ed88c68e146101d0578063f3ccaac0146101da57610099565b806306fdde03146100a357806318015191146100ce5780637284e416146100f95780638da5cb5b1461012457610099565b3661009957610097610205565b005b6100a1610205565b005b3480156100af57600080fd5b506100b86102cb565b6040516100c59190610633565b60405180910390f35b3480156100da57600080fd5b506100e3610359565b6040516100f0919061066e565b60405180910390f35b34801561010557600080fd5b5061010e61035f565b60405161011b9190610633565b60405180910390f35b34801561013057600080fd5b506101396103ed565b6040516101469190610633565b60405180910390f35b34801561015b57600080fd5b5061016461047b565b604051610171919061066e565b60405180910390f35b34801561018657600080fd5b5061018f610481565b60405161019c9190610633565b60405180910390f35b3480156101b157600080fd5b506101ba61050f565b6040516101c7919061066e565b60405180910390f35b6101d8610205565b005b3480156101e657600080fd5b506101ef610515565b6040516101fc9190610633565b60405180910390f35b60003411610248576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023f906106d5565b60405180910390fd5b346005600082825461025a9190610724565b925050819055506001600660008282546102749190610724565b925050819055503373ffffffffffffffffffffffffffffffffffffffff167f264f630d9efa0d07053a31163641d9fcc0adafc9d9e76f1c37c2ce3a558d2c52346040516102c19190610781565b60405180910390a2565b600180546102d8906107cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610304906107cb565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b505050505081565b60065481565b6002805461036c906107cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610398906107cb565b80156103e55780601f106103ba576101008083540402835291602001916103e5565b820191906000526020600020905b8154815290600101906020018083116103c857829003601f168201915b505050505081565b600080546103fa906107cb565b80601f0160208091040260200160405190810160405280929190818152602001828054610426906107cb565b80156104735780601f1061044857610100808354040283529160200191610473565b820191906000526020600020905b81548152906001019060200180831161045657829003601f168201915b505050505081565b60045481565b6007805461048e906107cb565b80601f01602080910402602001604051908101604052809291908181526020018280546104ba906107cb565b80156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b505050505081565b60055481565b60038054610522906107cb565b80601f016020809104026020016040519081016040528092919081815260200182805461054e906107cb565b801561059b5780601f106105705761010080835404028352916020019161059b565b820191906000526020600020905b81548152906001019060200180831161057e57829003601f168201915b505050505081565b600081519050919050565b600082825260208201905092915050565b60005b838110156105dd5780820151818401526020810190506105c2565b60008484015250505050565b6000601f19601f8301169050919050565b6000610605826105a3565b61060f81856105ae565b935061061f8185602086016105bf565b610628816105e9565b840191505092915050565b6000602082019050818103600083015261064d81846105fa565b905092915050565b6000819050919050565b61066881610655565b82525050565b6000602082019050610683600083018461065f565b92915050565b7f446f6e6174696f6e206d7573742062652067726561746572207468616e203000600082015250565b60006106bf601f836105ae565b91506106ca82610689565b602082019050919050565b600060208201905081810360008301526106ee816106b2565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061072f82610655565b915061073a83610655565b925082820190508281121560008312168382126000841215161715610762576107616106f5565b5b92915050565b6000819050919050565b61077b81610768565b82525050565b60006020820190506107966000830184610772565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107e357607f821691505b6020821081036107f6576107f561079c565b5b5091905056fea264697066735822122075baa5949d56d33e7c4e96fc122268522f699ada930ed725ad118ffa2f13f9e264736f6c63430008180033a26469706673582212209071f428f38e5890b14446bcf6ff18ea1791104ec94bd3a49410b1828a4ba2b564736f6c63430008180033";

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
