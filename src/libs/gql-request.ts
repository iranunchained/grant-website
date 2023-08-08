import { RequestDocument, Variables, request } from "graphql-request";

const url = process.env.NEXT_PUBLIC_THE_GRAPH_URL!;

export const getGraph = <T>(query: RequestDocument, variables?: Variables): Promise<T> =>
  request<T>(url, query, variables);
