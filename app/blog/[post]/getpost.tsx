'use client'

import useSWR from 'swr'
import { singlePostQuery } from "@/lib/sanity.query";
import { sanityFetch } from "@/lib/sanity.client";



export default function GetPost(slug: string) {
    const { data, error, isLoading } = useSWR({ query: singlePostQuery, tags: ["Post"], qParams: { slug } }, sanityFetch) //useSWR(slug, fetcher);
    return {
        data: data,
        isLoading,
        isError: error,
    };
}