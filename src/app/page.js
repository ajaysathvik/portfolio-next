"use client";

import ButtonCV from "./components/ButtonCv";
import "./fonts/fonts.css";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className=" min-h-96 items-center min-w-max flex leading-relaxed ml-10 text-4xl font-light text-gray-300 flex-col justify-center"
      >
        <h2 className="mt-10 text-9xl font-thin fonts2 mb-4">
          DIGITAL DESIGNER
        </h2>
        <ButtonCV />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
