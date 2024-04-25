import { gql } from '@apollo/client';

export const FIND_MANY_PEOPLE = gql`
  query FindManyPeople($filter: PersonFilterInput!) {
    people(filter: $filter) {
      edges {
        node {
          name {
            firstName
            lastName
          }
          linkedinLink {
            url
            label
          }
        }
      }
    }
  }
`;
