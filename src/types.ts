import { ListGrantsQuery } from "gql/generated/graphql";

export interface CustomLink {
  label: string;
  href: string;
  targetBlank?: boolean;
}

export type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

export enum GrantFilterOption {
  Official = "Official",
  Active = "Active",
  Completed = "Completed",
}

export interface IBalance {
  formatted: string;
  value: string;
}

export type IRound = {
  tags: string[];
  note: string;
  link: string;
  raised: IBalance;
};

export type IGrantConfig = Partial<{
  isHidden: boolean;
  isOfficial: boolean;
  currentRound: Partial<IRound>;
  historicalRounds: Array<IRound>;
}>;

type ListGrant = ListGrantsQuery["grants"][number];

export type TGrant = ListGrant & IGrantConfig;
