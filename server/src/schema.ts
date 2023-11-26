import gql from "graphql-tag";

const typeDefs = gql`
  "A group of modules that teaches about specific topics"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Query to get tracks for the homepage grid"
    tracksForHome: [Track!]!
  }
`;

export default typeDefs;
