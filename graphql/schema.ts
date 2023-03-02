import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Package {
  id: ID!
  name: String!
  duration: String!
  cost: Int!
  activities: [String!]!
  img: String!
  location: String!
}

input PackageInput {
  name: String!
  duration: String!
  cost: Int!
  activities: [String!]!
  img: String!
  location: String!
}

type Query {
  hello: String
  packages: [Package!]!
}

type Mutation {
  createPackage(data: PackageInput!): Package!
}
`);

export default schema;