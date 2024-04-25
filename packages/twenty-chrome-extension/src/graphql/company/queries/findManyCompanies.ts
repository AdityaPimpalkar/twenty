import { gql } from '@apollo/client';

export const FIND_MANY_COMPANIES = gql`
  query FindManyCompanies($filter: CompanyFilterInput!) {
    companies(filter: $filter) {
      edges {
        node {
          name
          linkedinLink {
            url
            label
          }
        }
      }
    }
  }
`;
