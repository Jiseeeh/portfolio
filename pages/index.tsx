import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import sanityClient from "@lib/sanity";
import Hero from "@feature/hero/Hero";
import About from "@feature/about/About";
import Experience from "@feature/experience/Experience";
import TechStack from "@feature/tech-stack/TechStack";
import Projects from "@feature/projects/Projects";
import Contact from "@feature/contact/Contact";

export const getStaticProps = async () => {
  const information = await sanityClient.fetch(`*[_type == 'information'][0]`);
  const education = await sanityClient.fetch(`*[_type == 'education']`);
  const work = await sanityClient.fetch(`*[_type == 'experience']`);
  const techStack = await sanityClient.fetch(`*[_type == 'techStack']`);
  const aboutMe: string = await information.aboutMe;
  const projects = await sanityClient.fetch(`*[_type == 'project']`);

  return {
    props: {
      aboutMe,
      education,
      work,
      techStack,
      projects,
    },
    revalidate: 10,
  };
};

export default function Home({
  aboutMe,
  education,
  work,
  techStack,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>John Carlo N. Camara</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A collection of my work, including web development projects and design portfolio."
        />
        <meta
          name="keywords"
          content="portfolio, web development, design, projects, John Carlo Camara, Jiseeeh, john carlo camara, john carlo n. camara, John Carlo N. Camara, john camara, John Camara, JC Camara, jc camara"
        />
        <meta name="author" content="Jiseeeh" />
        <meta property="og:title" content="John Carlo N. Camara" />
        <meta property="og:site_name" content="John Carlo N. Camara" />
        <meta property="og:url" content="https://jiseeeh.vercel.app" />
        <meta
          property="og:description"
          content="Personal website of John Carlo N. Camara"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.webp" />
        <link rel="icon" href="/avatar.ico" />
      </Head>
      <Hero />
      <About data={aboutMe} />
      <Projects data={projects} />
      <Experience educExperienceItems={education} workExperienceItems={work} />
      <TechStack data={techStack} />
      <Contact />
    </>
  );
}
