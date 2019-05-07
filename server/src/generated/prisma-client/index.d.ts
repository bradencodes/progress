// Code generated by Prisma (prisma@1.31.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  activity: (where?: ActivityWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  activity: (where: ActivityWhereUniqueInput) => ActivityPromise;
  activities: (args?: {
    where?: ActivityWhereInput;
    orderBy?: ActivityOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Activity>;
  activitiesConnection: (args?: {
    where?: ActivityWhereInput;
    orderBy?: ActivityOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ActivityConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createActivity: (data: ActivityCreateInput) => ActivityPromise;
  updateActivity: (args: {
    data: ActivityUpdateInput;
    where: ActivityWhereUniqueInput;
  }) => ActivityPromise;
  updateManyActivities: (args: {
    data: ActivityUpdateManyMutationInput;
    where?: ActivityWhereInput;
  }) => BatchPayloadPromise;
  upsertActivity: (args: {
    where: ActivityWhereUniqueInput;
    create: ActivityCreateInput;
    update: ActivityUpdateInput;
  }) => ActivityPromise;
  deleteActivity: (where: ActivityWhereUniqueInput) => ActivityPromise;
  deleteManyActivities: (where?: ActivityWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  activity: (
    where?: ActivitySubscriptionWhereInput
  ) => ActivitySubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ActivityOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "color_ASC"
  | "color_DESC"
  | "adds_ASC"
  | "adds_DESC"
  | "nextReset_ASC"
  | "nextReset_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ActivityCreatestartInput {
  set?: Int[] | Int;
}

export type ActivityWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ActivityUpdateInput {
  name?: String;
  color?: String;
  progress?: ActivityUpdateprogressInput;
  target?: ActivityUpdatetargetInput;
  start?: ActivityUpdatestartInput;
  end?: ActivityUpdateendInput;
  repeat?: ActivityUpdaterepeatInput;
  adds?: Boolean;
  nextReset?: Int;
}

export interface ActivityCreaterepeatInput {
  set?: Int[] | Int;
}

export interface ActivityCreateInput {
  id?: ID_Input;
  name: String;
  color: String;
  progress?: ActivityCreateprogressInput;
  target?: ActivityCreatetargetInput;
  start?: ActivityCreatestartInput;
  end?: ActivityCreateendInput;
  repeat?: ActivityCreaterepeatInput;
  adds: Boolean;
  nextReset: Int;
}

export interface ActivitySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ActivityWhereInput;
  AND?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput;
  OR?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput;
  NOT?: ActivitySubscriptionWhereInput[] | ActivitySubscriptionWhereInput;
}

export interface ActivityCreateprogressInput {
  set?: Int[] | Int;
}

export interface ActivityUpdaterepeatInput {
  set?: Int[] | Int;
}

export interface ActivityUpdateprogressInput {
  set?: Int[] | Int;
}

export interface ActivityCreateendInput {
  set?: Int[] | Int;
}

export interface ActivityUpdatetargetInput {
  set?: Int[] | Int;
}

export interface ActivityCreatetargetInput {
  set?: Int[] | Int;
}

export interface ActivityUpdateendInput {
  set?: Int[] | Int;
}

export interface ActivityUpdateManyMutationInput {
  name?: String;
  color?: String;
  progress?: ActivityUpdateprogressInput;
  target?: ActivityUpdatetargetInput;
  start?: ActivityUpdatestartInput;
  end?: ActivityUpdateendInput;
  repeat?: ActivityUpdaterepeatInput;
  adds?: Boolean;
  nextReset?: Int;
}

export interface ActivityWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  color?: String;
  color_not?: String;
  color_in?: String[] | String;
  color_not_in?: String[] | String;
  color_lt?: String;
  color_lte?: String;
  color_gt?: String;
  color_gte?: String;
  color_contains?: String;
  color_not_contains?: String;
  color_starts_with?: String;
  color_not_starts_with?: String;
  color_ends_with?: String;
  color_not_ends_with?: String;
  adds?: Boolean;
  adds_not?: Boolean;
  nextReset?: Int;
  nextReset_not?: Int;
  nextReset_in?: Int[] | Int;
  nextReset_not_in?: Int[] | Int;
  nextReset_lt?: Int;
  nextReset_lte?: Int;
  nextReset_gt?: Int;
  nextReset_gte?: Int;
  AND?: ActivityWhereInput[] | ActivityWhereInput;
  OR?: ActivityWhereInput[] | ActivityWhereInput;
  NOT?: ActivityWhereInput[] | ActivityWhereInput;
}

export interface ActivityUpdatestartInput {
  set?: Int[] | Int;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ActivityPreviousValues {
  id: ID_Output;
  name: String;
  color: String;
  progress: Int[];
  target: Int[];
  start: Int[];
  end: Int[];
  repeat: Int[];
  adds: Boolean;
  nextReset: Int;
}

export interface ActivityPreviousValuesPromise
  extends Promise<ActivityPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
  progress: () => Promise<Int[]>;
  target: () => Promise<Int[]>;
  start: () => Promise<Int[]>;
  end: () => Promise<Int[]>;
  repeat: () => Promise<Int[]>;
  adds: () => Promise<Boolean>;
  nextReset: () => Promise<Int>;
}

export interface ActivityPreviousValuesSubscription
  extends Promise<AsyncIterator<ActivityPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
  progress: () => Promise<AsyncIterator<Int[]>>;
  target: () => Promise<AsyncIterator<Int[]>>;
  start: () => Promise<AsyncIterator<Int[]>>;
  end: () => Promise<AsyncIterator<Int[]>>;
  repeat: () => Promise<AsyncIterator<Int[]>>;
  adds: () => Promise<AsyncIterator<Boolean>>;
  nextReset: () => Promise<AsyncIterator<Int>>;
}

export interface Activity {
  id: ID_Output;
  name: String;
  color: String;
  progress: Int[];
  target: Int[];
  start: Int[];
  end: Int[];
  repeat: Int[];
  adds: Boolean;
  nextReset: Int;
}

export interface ActivityPromise extends Promise<Activity>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  color: () => Promise<String>;
  progress: () => Promise<Int[]>;
  target: () => Promise<Int[]>;
  start: () => Promise<Int[]>;
  end: () => Promise<Int[]>;
  repeat: () => Promise<Int[]>;
  adds: () => Promise<Boolean>;
  nextReset: () => Promise<Int>;
}

export interface ActivitySubscription
  extends Promise<AsyncIterator<Activity>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  color: () => Promise<AsyncIterator<String>>;
  progress: () => Promise<AsyncIterator<Int[]>>;
  target: () => Promise<AsyncIterator<Int[]>>;
  start: () => Promise<AsyncIterator<Int[]>>;
  end: () => Promise<AsyncIterator<Int[]>>;
  repeat: () => Promise<AsyncIterator<Int[]>>;
  adds: () => Promise<AsyncIterator<Boolean>>;
  nextReset: () => Promise<AsyncIterator<Int>>;
}

export interface ActivitySubscriptionPayload {
  mutation: MutationType;
  node: Activity;
  updatedFields: String[];
  previousValues: ActivityPreviousValues;
}

export interface ActivitySubscriptionPayloadPromise
  extends Promise<ActivitySubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ActivityPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ActivityPreviousValuesPromise>() => T;
}

export interface ActivitySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ActivitySubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ActivitySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ActivityPreviousValuesSubscription>() => T;
}

export interface ActivityConnection {
  pageInfo: PageInfo;
  edges: ActivityEdge[];
}

export interface ActivityConnectionPromise
  extends Promise<ActivityConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ActivityEdge>>() => T;
  aggregate: <T = AggregateActivityPromise>() => T;
}

export interface ActivityConnectionSubscription
  extends Promise<AsyncIterator<ActivityConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ActivityEdgeSubscription>>>() => T;
  aggregate: <T = AggregateActivitySubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ActivityEdge {
  node: Activity;
  cursor: String;
}

export interface ActivityEdgePromise
  extends Promise<ActivityEdge>,
    Fragmentable {
  node: <T = ActivityPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ActivityEdgeSubscription
  extends Promise<AsyncIterator<ActivityEdge>>,
    Fragmentable {
  node: <T = ActivitySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateActivity {
  count: Int;
}

export interface AggregateActivityPromise
  extends Promise<AggregateActivity>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateActivitySubscription
  extends Promise<AsyncIterator<AggregateActivity>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Activity",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
