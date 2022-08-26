const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String! 
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]
    bookId: String!
    description: String!
    image: string
    link: String
    title: String!
  }
  input BookInput {
    authors: [String]
    bookId: String!
    description: String!
    image: string
    link: String
    title: String!
  }

  type Query {
     hi: User
  }

  type Mutation {
    saveBook(book: BookInput!): User!
`;

module.exports = typeDefs;
