'use client'
import Image from "next/image";
import { jobQuery } from "@/lib/sanity.query";
import type { JobType } from "@/types";
import { formatDate } from "../../utils/date";
import { Slide } from "../../animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import useSWR from 'swr'

function GetJobs() {
  const { data, error, isLoading } = useSWR({ query: jobQuery, tags: ["job"] }, sanityFetch);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}

export default function Job() {
  // const job: JobType[] = await sanityFetch({
  //   query: jobQuery,
  //   tags: ["job"],
  // });
  const job: JobType[] = []
  const { data, isLoading, isError } = GetJobs();
  if (!isLoading) {
    const job = data as JobType[]
  }
  return (
    <section className="mt-32">
      {job && job.length > 0 && (
        <Slide delay={0.16}>
          <div className="mb-16">
            <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
        </Slide>
      )}
      <Slide delay={0.18}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {job.map((j) => (
            <div
              key={j._id}
              className="flex items-start lg:gap-x-6 gap-x-4 max-w-2xl relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
            >
              <a
                href={j.url}
                rel="noreferrer noopener"
                target="_blank"
                className="grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative"
              >
                <Image
                  src={j.logo}
                  className="object-cover duration-300"
                  alt={`${j.name} logo`}
                  width={50}
                  height={50}
                />
              </a>
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold">{j.name}</h3>
                <p>{j.jobTitle}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">
                  {formatDate(j.startDate)} - {" "}{j.endDate ? (formatDate(j.endDate)) : (
                    <span className="dark:text-primary-color text-tertiary-color">
                      Present
                    </span>
                  )}
                </time>
                <p className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4">
                  {j.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
