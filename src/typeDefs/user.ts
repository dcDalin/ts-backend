import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    "All matters user related"
    users: String
  }
`;
