const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
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

  type Query {
     
  }

  type Mutation {
    saveBook(book: Book!): User!
`;

module.exports = typeDefs;
