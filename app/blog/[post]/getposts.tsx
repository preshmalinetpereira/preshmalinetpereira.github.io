
'use client'

import useSWR from 'swr'
import { postsQuery } from "@/lib/sanity.query";
import { sanityFetch } from "@/lib/sanity.client";


export default function GetPosts() {
    const { data, error, isLoading } = useSWR({ query: postsQuery, tags: ["Post"] }, sanityFetch);
    return {
        data: data,
        isLoading,
        isError: error,
    };
}