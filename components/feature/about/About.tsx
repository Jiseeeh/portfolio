import React from "react";

interface AboutProps {
  data: string;
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <article id="about" className="min-h-screen grid items-center">
      <section className="mb-6 max-w-6xl mx-auto ">
        <h1 className="mb-5 title text-center">About me</h1>
        <section className="m-3 p-6 rounded-md">
          <p className="p-2 leading-7">{data}</p>
        </section>
      </section>
    </article>
  );
};

export default About;
