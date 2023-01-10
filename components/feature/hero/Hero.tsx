import React from "react";
import Image from "next/image";
import { MdOutlineWavingHand } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <article className="hero min-h-screen">
      <section className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/profile.webp"
          className="max-w-sm rounded-lg shadow-2xl hidden md:block"
          alt=""
          height={500}
          width={500}
        />
        <section>
          <h1 className="title">
            Hi&#33; I&#39;m John Carlo N&#46; Camara&#44;
          </h1>
          <p className="py-6">
            A second&#8211;year IT college student from the
            <strong>&nbsp;Philippines</strong>&#46; Currently&#44; I am
            exploring the vast world of programming&#44; specifically web
            development&#46;
          </p>
          <a
            href="#contact"
            className="btn btn-primary transform-scale hover:scale-105"
          >
            Say Hi&#33;&nbsp;
            <MdOutlineWavingHand size={20} />
          </a>
        </section>
      </section>
    </article>
  );
};

export default Hero;
