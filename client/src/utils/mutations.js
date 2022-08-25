import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation saveBook($_id: String!, $book: Book!) {
    createMatchup(book: $book) {
      _id
      username
    }
  }
`;


