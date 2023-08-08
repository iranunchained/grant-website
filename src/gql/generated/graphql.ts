/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Grant = {
  __typename?: "Grant";
  description: Scalars["String"];
  id: Scalars["String"];
  image: Scalars["String"];
  title: Scalars["String"];
  vault: Vault;
};

export type Grant_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Grant_Filter>>>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_gt?: InputMaybe<Scalars["String"]>;
  description_gte?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  description_lt?: InputMaybe<Scalars["String"]>;
  description_lte?: InputMaybe<Scalars["String"]>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_ends_with?: InputMaybe<Scalars["String"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_gt?: InputMaybe<Scalars["String"]>;
  id_gte?: InputMaybe<Scalars["String"]>;
  id_in?: InputMaybe<Array<Scalars["String"]>>;
  id_lt?: InputMaybe<Scalars["String"]>;
  id_lte?: InputMaybe<Scalars["String"]>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id_starts_with?: InputMaybe<Scalars["String"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  image?: InputMaybe<Scalars["String"]>;
  image_contains?: InputMaybe<Scalars["String"]>;
  image_contains_nocase?: InputMaybe<Scalars["String"]>;
  image_ends_with?: InputMaybe<Scalars["String"]>;
  image_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  image_gt?: InputMaybe<Scalars["String"]>;
  image_gte?: InputMaybe<Scalars["String"]>;
  image_in?: InputMaybe<Array<Scalars["String"]>>;
  image_lt?: InputMaybe<Scalars["String"]>;
  image_lte?: InputMaybe<Scalars["String"]>;
  image_not?: InputMaybe<Scalars["String"]>;
  image_not_contains?: InputMaybe<Scalars["String"]>;
  image_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  image_not_ends_with?: InputMaybe<Scalars["String"]>;
  image_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  image_not_in?: InputMaybe<Array<Scalars["String"]>>;
  image_not_starts_with?: InputMaybe<Scalars["String"]>;
  image_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  image_starts_with?: InputMaybe<Scalars["String"]>;
  image_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Grant_Filter>>>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_contains_nocase?: InputMaybe<Scalars["String"]>;
  title_ends_with?: InputMaybe<Scalars["String"]>;
  title_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  title_gt?: InputMaybe<Scalars["String"]>;
  title_gte?: InputMaybe<Scalars["String"]>;
  title_in?: InputMaybe<Array<Scalars["String"]>>;
  title_lt?: InputMaybe<Scalars["String"]>;
  title_lte?: InputMaybe<Scalars["String"]>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  title_not_ends_with?: InputMaybe<Scalars["String"]>;
  title_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<Scalars["String"]>>;
  title_not_starts_with?: InputMaybe<Scalars["String"]>;
  title_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  title_starts_with?: InputMaybe<Scalars["String"]>;
  title_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  vault_?: InputMaybe<Vault_Filter>;
};

export enum Grant_OrderBy {
  Description = "description",
  Id = "id",
  Image = "image",
  Title = "title",
  Vault = "vault",
  VaultCreatedAt = "vault__createdAt",
  VaultId = "vault__id",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  grant?: Maybe<Grant>;
  grantSearch: Array<Grant>;
  grants: Array<Grant>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryGrantSearchArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  text: Scalars["String"];
  where?: InputMaybe<Grant_Filter>;
};

export type QueryGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};

export type QueryVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  grant?: Maybe<Grant>;
  grants: Array<Grant>;
  vault?: Maybe<Vault>;
  vaults: Array<Vault>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionGrantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionGrantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Grant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Grant_Filter>;
};

export type SubscriptionVaultArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionVaultsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Vault_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Vault_Filter>;
};

export type Vault = {
  __typename?: "Vault";
  createdAt: Scalars["BigInt"];
  grant?: Maybe<Grant>;
  id: Scalars["Bytes"];
};

export type Vault_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  grant?: InputMaybe<Scalars["String"]>;
  grant_?: InputMaybe<Grant_Filter>;
  grant_contains?: InputMaybe<Scalars["String"]>;
  grant_contains_nocase?: InputMaybe<Scalars["String"]>;
  grant_ends_with?: InputMaybe<Scalars["String"]>;
  grant_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  grant_gt?: InputMaybe<Scalars["String"]>;
  grant_gte?: InputMaybe<Scalars["String"]>;
  grant_in?: InputMaybe<Array<Scalars["String"]>>;
  grant_lt?: InputMaybe<Scalars["String"]>;
  grant_lte?: InputMaybe<Scalars["String"]>;
  grant_not?: InputMaybe<Scalars["String"]>;
  grant_not_contains?: InputMaybe<Scalars["String"]>;
  grant_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  grant_not_ends_with?: InputMaybe<Scalars["String"]>;
  grant_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  grant_not_in?: InputMaybe<Array<Scalars["String"]>>;
  grant_not_starts_with?: InputMaybe<Scalars["String"]>;
  grant_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  grant_starts_with?: InputMaybe<Scalars["String"]>;
  grant_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<Vault_Filter>>>;
};

export enum Vault_OrderBy {
  CreatedAt = "createdAt",
  Grant = "grant",
  GrantDescription = "grant__description",
  GrantId = "grant__id",
  GrantImage = "grant__image",
  GrantTitle = "grant__title",
  Id = "id",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type ListGrantIDsQueryVariables = Exact<{
  skip: Scalars["Int"];
  first: Scalars["Int"];
}>;

export type ListGrantIDsQuery = {
  __typename?: "Query";
  grants: Array<{ __typename?: "Grant"; id: string }>;
};

export type SearchGrantsQueryVariables = Exact<{
  query: Scalars["String"];
  first: Scalars["Int"];
  skip: Scalars["Int"];
}>;

export type SearchGrantsQuery = {
  __typename?: "Query";
  grantSearch: Array<{
    __typename?: "Grant";
    id: string;
    title: string;
    description: string;
    image: string;
    vault: { __typename?: "Vault"; id: any; createdAt: any };
  }>;
};

export type ListGrantsQueryVariables = Exact<{
  skip: Scalars["Int"];
  first: Scalars["Int"];
}>;

export type ListGrantsQuery = {
  __typename?: "Query";
  grants: Array<{
    __typename?: "Grant";
    id: string;
    title: string;
    description: string;
    image: string;
    vault: { __typename?: "Vault"; id: any; createdAt: any };
  }>;
};

export type GetGrantDetailsQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetGrantDetailsQuery = {
  __typename?: "Query";
  grant?: {
    __typename?: "Grant";
    id: string;
    title: string;
    description: string;
    image: string;
    vault: { __typename?: "Vault"; id: any; createdAt: any };
  } | null;
};

export const ListGrantIDsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listGrantIDs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "grants" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "vault__createdAt" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListGrantIDsQuery, ListGrantIDsQueryVariables>;
export const SearchGrantsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "searchGrants" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "query" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "grantSearch" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "text" },
                value: { kind: "Variable", name: { kind: "Name", value: "query" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "vault" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchGrantsQuery, SearchGrantsQueryVariables>;
export const ListGrantsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "listGrants" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "skip" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "first" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "grants" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "skip" },
                value: { kind: "Variable", name: { kind: "Name", value: "skip" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: { kind: "Variable", name: { kind: "Name", value: "first" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: { kind: "EnumValue", value: "vault__createdAt" },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderDirection" },
                value: { kind: "EnumValue", value: "desc" },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "vault" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListGrantsQuery, ListGrantsQueryVariables>;
export const GetGrantDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getGrantDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "grant" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "image" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "vault" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGrantDetailsQuery, GetGrantDetailsQueryVariables>;
