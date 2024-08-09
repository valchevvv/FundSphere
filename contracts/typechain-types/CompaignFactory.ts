/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface CompaignFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addCompaign"
      | "compaigns"
      | "donateToCompaign"
      | "getCompaigns"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CompaignCreated" | "DonationMade"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addCompaign",
    values: [string, string, string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "compaigns",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "donateToCompaign",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCompaigns",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addCompaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "compaigns", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "donateToCompaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompaigns",
    data: BytesLike
  ): Result;
}

export namespace CompaignCreatedEvent {
  export type InputTuple = [
    compaignAddress: AddressLike,
    owner: AddressLike,
    name: string,
    targetAmmount: BigNumberish,
    endDate: string
  ];
  export type OutputTuple = [
    compaignAddress: string,
    owner: string,
    name: string,
    targetAmmount: bigint,
    endDate: string
  ];
  export interface OutputObject {
    compaignAddress: string;
    owner: string;
    name: string;
    targetAmmount: bigint;
    endDate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DonationMadeEvent {
  export type InputTuple = [
    compaignAddress: AddressLike,
    donor: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    compaignAddress: string,
    donor: string,
    amount: bigint
  ];
  export interface OutputObject {
    compaignAddress: string;
    donor: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CompaignFactory extends BaseContract {
  connect(runner?: ContractRunner | null): CompaignFactory;
  waitForDeployment(): Promise<this>;

  interface: CompaignFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addCompaign: TypedContractMethod<
    [
      _name: string,
      _description: string,
      _image: string,
      _targetAmmount: BigNumberish,
      _endDate: string
    ],
    [void],
    "nonpayable"
  >;

  compaigns: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  donateToCompaign: TypedContractMethod<
    [index: BigNumberish],
    [void],
    "payable"
  >;

  getCompaigns: TypedContractMethod<[], [string[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addCompaign"
  ): TypedContractMethod<
    [
      _name: string,
      _description: string,
      _image: string,
      _targetAmmount: BigNumberish,
      _endDate: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "compaigns"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "donateToCompaign"
  ): TypedContractMethod<[index: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "getCompaigns"
  ): TypedContractMethod<[], [string[]], "view">;

  getEvent(
    key: "CompaignCreated"
  ): TypedContractEvent<
    CompaignCreatedEvent.InputTuple,
    CompaignCreatedEvent.OutputTuple,
    CompaignCreatedEvent.OutputObject
  >;
  getEvent(
    key: "DonationMade"
  ): TypedContractEvent<
    DonationMadeEvent.InputTuple,
    DonationMadeEvent.OutputTuple,
    DonationMadeEvent.OutputObject
  >;

  filters: {
    "CompaignCreated(address,address,string,int256,string)": TypedContractEvent<
      CompaignCreatedEvent.InputTuple,
      CompaignCreatedEvent.OutputTuple,
      CompaignCreatedEvent.OutputObject
    >;
    CompaignCreated: TypedContractEvent<
      CompaignCreatedEvent.InputTuple,
      CompaignCreatedEvent.OutputTuple,
      CompaignCreatedEvent.OutputObject
    >;

    "DonationMade(address,address,uint256)": TypedContractEvent<
      DonationMadeEvent.InputTuple,
      DonationMadeEvent.OutputTuple,
      DonationMadeEvent.OutputObject
    >;
    DonationMade: TypedContractEvent<
      DonationMadeEvent.InputTuple,
      DonationMadeEvent.OutputTuple,
      DonationMadeEvent.OutputObject
    >;
  };
}
