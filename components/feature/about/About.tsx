import React from "react";

interface AboutProps {
  data: string;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <article className="mb-6 max-w-6xl mx-auto ">
      <h1 className="mb-5 text-5xl text-center font-bold">About me</h1>
      <section className="m-3 p-6 rounded-md">
        <p className="p-2 leading-7">{data}</p>
      </section>
    </article>
  );
};

export default About;