import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($book: BookInput!) {
    createMatchup(book: $book) {
      _id
      username
    }
  }
`;


