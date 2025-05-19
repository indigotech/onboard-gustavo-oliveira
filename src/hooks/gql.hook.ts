import {gql} from '@apollo/client';

export const GET_USER_DETAILS = gql`
  query GetUserDetails($id: ID!) {
    user(id: $id) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers($data: PageInput!) {
    users(data: $data) {
      nodes {
        id
        name
        email
      }
      count
      pageInfo {
        hasNextPage
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      user {
        name
        email
      }
      token
    }
  }
`;
