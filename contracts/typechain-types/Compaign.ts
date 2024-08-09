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

export interface CompaignInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "currentAmmount"
      | "description"
      | "donate"
      | "endDate"
      | "image"
      | "name"
      | "owner"
      | "targetAmmount"
      | "transactions"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "DonationReceived"): EventFragment;

  encodeFunctionData(
    functionFragment: "currentAmmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "donate", values?: undefined): string;
  encodeFunctionData(functionFragment: "endDate", values?: undefined): string;
  encodeFunctionData(functionFragment: "image", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "targetAmmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transactions",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "currentAmmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endDate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "image", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetAmmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transactions",
    data: BytesLike
  ): Result;
}

export namespace DonationReceivedEvent {
  export type InputTuple = [donor: AddressLike, amount: BigNumberish];
  export type OutputTuple = [donor: string, amount: bigint];
  export interface OutputObject {
    donor: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Compaign extends BaseContract {
  connect(runner?: ContractRunner | null): Compaign;
  waitForDeployment(): Promise<this>;

  interface: CompaignInterface;

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

  currentAmmount: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  donate: TypedContractMethod<[], [void], "payable">;

  endDate: TypedContractMethod<[], [string], "view">;

  image: TypedContractMethod<[], [string], "view">;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  targetAmmount: TypedContractMethod<[], [bigint], "view">;

  transactions: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "currentAmmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "donate"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "endDate"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "image"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "targetAmmount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transactions"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "DonationReceived"
  ): TypedContractEvent<
    DonationReceivedEvent.InputTuple,
    DonationReceivedEvent.OutputTuple,
    DonationReceivedEvent.OutputObject
  >;

  filters: {
    "DonationReceived(address,uint256)": TypedContractEvent<
      DonationReceivedEvent.InputTuple,
      DonationReceivedEvent.OutputTuple,
      DonationReceivedEvent.OutputObject
    >;
    DonationReceived: TypedContractEvent<
      DonationReceivedEvent.InputTuple,
      DonationReceivedEvent.OutputTuple,
      DonationReceivedEvent.OutputObject
    >;
  };
}
