// sanity/sanity.client.ts
import "server-only";
import {
  createClient,
  type ClientConfig,
  type QueryParams,
} from "@sanity/client";
import { projectId, dataset, apiVersion, token, mode } from "@/lib/env.api";

const config: ClientConfig = {
  projectId,
  dataset,
  apiVersion,
  useCdn: false,//mode === "development" ? true : false,
  ignoreBrowserTokenWarning: true,
  token,
  perspective: "published",
};

const client = createClient(config);

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: mode === "development" ? "no-store" : "force-cache",
    next: { tags },
  });
}

