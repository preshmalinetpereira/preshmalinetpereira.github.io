'use client'
import { sanityFetch } from "@/lib/sanity.client";
import { projectsQuery } from "@/lib/sanity.query";
import useSWR from 'swr'

export default function GetProjects() {
  const { data, error, isLoading } = useSWR({ query: projectsQuery, tags: ["project"] }, sanityFetch);

  return {
    data: data,
    isLoading,
    isError: error,
  };

}