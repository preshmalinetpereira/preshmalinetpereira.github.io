
import Image from "next/image";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import { CustomPortableText } from "@/app/components/shared/CustomPortableText";
import { Slide } from "../../animation/Slide";
import { urlFor } from "@/lib/sanity.image";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";
import projects_placeholder from "@/public/projects_placeholder.png"
import { notFound } from "next/navigation";
import GetProject from "./getproject";
import GetProjects from "./getprojects";

type Props = { params: { project: string }; };

export async function generateStaticParams() {
  const { data, isLoading, isError } = GetProjects();
  
  // if (!projects || projects.length === 0) {
  if (isError || data instanceof Error){  
    return [{ project: 'not-found' }];
  }
  const projects = data as ProjectType[]
  return projects.map(p => ({ project: p.slug }));

}

export default function Project({params}: Props) {
  const slug = params.project;



	const { data, isLoading, isError } = GetProject(slug);

  if (!isError) {
    notFound();
  }
  const project = data as ProjectType
  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Slide>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start justify-between flex-wrap mb-4">
            <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-4 max-w-md">
              {project.name}
            </h1>

            <div className="flex items-center gap-x-2">
              <a
                href={project.projectUrl}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${!project.projectUrl
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                  }`}
              >
                <BiLinkExternal aria-hidden="true" />
                {project.projectUrl ? "Live URL" : "Coming Soon"}
              </a>

              <a
                href={project.repository}
                rel="noreferrer noopener"
                target="_blank"
                className={`flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 ${!project.repository
                    ? "cursor-not-allowed opacity-80"
                    : "cursor-pointer hover:dark:border-zinc-700 hover:border-zinc-200"
                  }`}
              >
                <BiLogoGithub aria-hidden="true" />
                {project.repository ? "GitHub" : "No Repo"}
              </a>
            </div>
          </div>

          <div className="relative w-full h-40 pt-[52.5%]">
            <Image
              className="rounded-xl border dark:border-zinc-800 border-zinc-100 object-cover"
              layout="fill"
              src={project.coverImage?.image || projects_placeholder.src}
              alt={project.coverImage?.alt || project.name}
              quality={100}
              placeholder={project.coverImage?.lqip ? `blur` : "empty"}
              blurDataURL={project.coverImage?.lqip || ""}
            />
          </div>

          <div className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed">
            <PortableText
              value={project.description}
              components={CustomPortableText}
            />
          </div>
        </div>
      </Slide>
    </main>
  );
}
