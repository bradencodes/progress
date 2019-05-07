module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type Activity {
  id: ID!
  name: String!
  color: String!
  progress: [Int!]!
  target: [Int!]!
  start: [Int!]!
  end: [Int!]!
  repeat: [Int!]!
  adds: Boolean!
  nextReset: Int!
  createdBy: User!
}

type ActivityConnection {
  pageInfo: PageInfo!
  edges: [ActivityEdge]!
  aggregate: AggregateActivity!
}

input ActivityCreateendInput {
  set: [Int!]
}

input ActivityCreateInput {
  id: ID
  name: String!
  color: String!
  progress: ActivityCreateprogressInput
  target: ActivityCreatetargetInput
  start: ActivityCreatestartInput
  end: ActivityCreateendInput
  repeat: ActivityCreaterepeatInput
  adds: Boolean!
  nextReset: Int!
  createdBy: UserCreateOneWithoutActivitiesInput!
}

input ActivityCreateManyWithoutCreatedByInput {
  create: [ActivityCreateWithoutCreatedByInput!]
  connect: [ActivityWhereUniqueInput!]
}

input ActivityCreateprogressInput {
  set: [Int!]
}

input ActivityCreaterepeatInput {
  set: [Int!]
}

input ActivityCreatestartInput {
  set: [Int!]
}

input ActivityCreatetargetInput {
  set: [Int!]
}

input ActivityCreateWithoutCreatedByInput {
  id: ID
  name: String!
  color: String!
  progress: ActivityCreateprogressInput
  target: ActivityCreatetargetInput
  start: ActivityCreatestartInput
  end: ActivityCreateendInput
  repeat: ActivityCreaterepeatInput
  adds: Boolean!
  nextReset: Int!
}

type ActivityEdge {
  node: Activity!
  cursor: String!
}

enum ActivityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  color_ASC
  color_DESC
  adds_ASC
  adds_DESC
  nextReset_ASC
  nextReset_DESC
}

type ActivityPreviousValues {
  id: ID!
  name: String!
  color: String!
  progress: [Int!]!
  target: [Int!]!
  start: [Int!]!
  end: [Int!]!
  repeat: [Int!]!
  adds: Boolean!
  nextReset: Int!
}

input ActivityScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  adds: Boolean
  adds_not: Boolean
  nextReset: Int
  nextReset_not: Int
  nextReset_in: [Int!]
  nextReset_not_in: [Int!]
  nextReset_lt: Int
  nextReset_lte: Int
  nextReset_gt: Int
  nextReset_gte: Int
  AND: [ActivityScalarWhereInput!]
  OR: [ActivityScalarWhereInput!]
  NOT: [ActivityScalarWhereInput!]
}

type ActivitySubscriptionPayload {
  mutation: MutationType!
  node: Activity
  updatedFields: [String!]
  previousValues: ActivityPreviousValues
}

input ActivitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityWhereInput
  AND: [ActivitySubscriptionWhereInput!]
  OR: [ActivitySubscriptionWhereInput!]
  NOT: [ActivitySubscriptionWhereInput!]
}

input ActivityUpdateendInput {
  set: [Int!]
}

input ActivityUpdateInput {
  name: String
  color: String
  progress: ActivityUpdateprogressInput
  target: ActivityUpdatetargetInput
  start: ActivityUpdatestartInput
  end: ActivityUpdateendInput
  repeat: ActivityUpdaterepeatInput
  adds: Boolean
  nextReset: Int
  createdBy: UserUpdateOneRequiredWithoutActivitiesInput
}

input ActivityUpdateManyDataInput {
  name: String
  color: String
  progress: ActivityUpdateprogressInput
  target: ActivityUpdatetargetInput
  start: ActivityUpdatestartInput
  end: ActivityUpdateendInput
  repeat: ActivityUpdaterepeatInput
  adds: Boolean
  nextReset: Int
}

input ActivityUpdateManyMutationInput {
  name: String
  color: String
  progress: ActivityUpdateprogressInput
  target: ActivityUpdatetargetInput
  start: ActivityUpdatestartInput
  end: ActivityUpdateendInput
  repeat: ActivityUpdaterepeatInput
  adds: Boolean
  nextReset: Int
}

input ActivityUpdateManyWithoutCreatedByInput {
  create: [ActivityCreateWithoutCreatedByInput!]
  delete: [ActivityWhereUniqueInput!]
  connect: [ActivityWhereUniqueInput!]
  set: [ActivityWhereUniqueInput!]
  disconnect: [ActivityWhereUniqueInput!]
  update: [ActivityUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ActivityUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [ActivityScalarWhereInput!]
  updateMany: [ActivityUpdateManyWithWhereNestedInput!]
}

input ActivityUpdateManyWithWhereNestedInput {
  where: ActivityScalarWhereInput!
  data: ActivityUpdateManyDataInput!
}

input ActivityUpdateprogressInput {
  set: [Int!]
}

input ActivityUpdaterepeatInput {
  set: [Int!]
}

input ActivityUpdatestartInput {
  set: [Int!]
}

input ActivityUpdatetargetInput {
  set: [Int!]
}

input ActivityUpdateWithoutCreatedByDataInput {
  name: String
  color: String
  progress: ActivityUpdateprogressInput
  target: ActivityUpdatetargetInput
  start: ActivityUpdatestartInput
  end: ActivityUpdateendInput
  repeat: ActivityUpdaterepeatInput
  adds: Boolean
  nextReset: Int
}

input ActivityUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ActivityWhereUniqueInput!
  data: ActivityUpdateWithoutCreatedByDataInput!
}

input ActivityUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ActivityWhereUniqueInput!
  update: ActivityUpdateWithoutCreatedByDataInput!
  create: ActivityCreateWithoutCreatedByInput!
}

input ActivityWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  color: String
  color_not: String
  color_in: [String!]
  color_not_in: [String!]
  color_lt: String
  color_lte: String
  color_gt: String
  color_gte: String
  color_contains: String
  color_not_contains: String
  color_starts_with: String
  color_not_starts_with: String
  color_ends_with: String
  color_not_ends_with: String
  adds: Boolean
  adds_not: Boolean
  nextReset: Int
  nextReset_not: Int
  nextReset_in: [Int!]
  nextReset_not_in: [Int!]
  nextReset_lt: Int
  nextReset_lte: Int
  nextReset_gt: Int
  nextReset_gte: Int
  createdBy: UserWhereInput
  AND: [ActivityWhereInput!]
  OR: [ActivityWhereInput!]
  NOT: [ActivityWhereInput!]
}

input ActivityWhereUniqueInput {
  id: ID
}

type AggregateActivity {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createActivity(data: ActivityCreateInput!): Activity!
  updateActivity(data: ActivityUpdateInput!, where: ActivityWhereUniqueInput!): Activity
  updateManyActivities(data: ActivityUpdateManyMutationInput!, where: ActivityWhereInput): BatchPayload!
  upsertActivity(where: ActivityWhereUniqueInput!, create: ActivityCreateInput!, update: ActivityUpdateInput!): Activity!
  deleteActivity(where: ActivityWhereUniqueInput!): Activity
  deleteManyActivities(where: ActivityWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  activity(where: ActivityWhereUniqueInput!): Activity
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity]!
  activitiesConnection(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  activity(where: ActivitySubscriptionWhereInput): ActivitySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  activities(where: ActivityWhereInput, orderBy: ActivityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Activity!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  username: String!
  email: String!
  password: String!
  activities: ActivityCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutActivitiesInput {
  create: UserCreateWithoutActivitiesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutActivitiesInput {
  id: ID
  username: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  email: String
  password: String
  activities: ActivityUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  username: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutActivitiesInput {
  create: UserCreateWithoutActivitiesInput
  update: UserUpdateWithoutActivitiesDataInput
  upsert: UserUpsertWithoutActivitiesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutActivitiesDataInput {
  username: String
  email: String
  password: String
}

input UserUpsertWithoutActivitiesInput {
  update: UserUpdateWithoutActivitiesDataInput!
  create: UserCreateWithoutActivitiesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  activities_every: ActivityWhereInput
  activities_some: ActivityWhereInput
  activities_none: ActivityWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    