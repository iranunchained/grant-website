import { graphql } from "gql/generated/gql";

export const listGrantIDs = graphql(`
  query listGrantIDs($skip: Int!, $first: Int!) {
    grants(first: $first, skip: $skip, orderBy: vault__createdAt, orderDirection: desc) {
      id
    }
  }
`);

export const searchGrants = graphql(`
  query searchGrants($query: String!, $first: Int!, $skip: Int!) {
    grantSearch(text: $query, first: $first, skip: $skip) {
      id
      title
      description
      image
      vault {
        id
        createdAt
      }
    }
  }
`);

export const listGrants = graphql(`
  query listGrants($skip: Int!, $first: Int!) {
    grants(skip: $skip, first: $first, orderBy: vault__createdAt, orderDirection: desc) {
      id
      title
      description
      image
      vault {
        id
        createdAt
      }
    }
  }
`);

export const getGrantDetails = graphql(`
  query getGrantDetails($id: ID!) {
    grant(id: $id) {
      id
      title
      description
      image
      vault {
        id
        createdAt
      }
    }
  }
`);
