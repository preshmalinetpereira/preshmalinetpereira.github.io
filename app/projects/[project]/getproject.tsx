'use client'
import { sanityFetch } from "@/lib/sanity.client";
import { singleProjectQuery } from "@/lib/sanity.query";
import useSWR from 'swr'

export default function GetProject(slug: string) {
  const { data, error, isLoading } = useSWR({ query: singleProjectQuery, tags: ["project"], qParams: { slug } }, sanityFetch);
  return {
    data: data,
    isLoading,
    isError: error,
  };
}