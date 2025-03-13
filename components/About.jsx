import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am currently a passionate and dedicated Software Developer,
            eagerly seeking to embark on a more exciting journey in the world of
            technology. My goal is to secure a more challenging{" "}
            <span className="text-[#5651e5]">
              Software Development Engineer (SDE)
            </span>{" "}
            role at a tech company, where I can utilize my skills and knowledge
            to drive innovation and make a significant impact.
          </p>
          <p className="py-2 text-gray-600">
            Throughout my academic and Professional journey, I have delved deep
            into the fascinating realm of Data Structures and Algorithms, honing
            my problem-solving abilities and cultivating a strong foundation in
            computer science principles.
          </p>
          <p className="py-2 text-gray-600">
            My passion for turning ideas into reality has led me to embark on
            enriching internship experiences. During my first internship as a
            Full Stack Web Developer, I had the privilege to collaborate with a
            talented team and contribute to the development of innovative web
            solutions. Subsequently, my second internship as a Frontend Web
            Developer allowed me to refine my skills in creating captivating
            user interfaces and delivering exceptional user experiences.
          </p>
          <p className="py-2 text-gray-600">
            As I move forward in my journey, I am committed to continuous
            learning, keeping myself updated with the latest trends and
            technologies in the ever-evolving tech industry. I thrive in dynamic
            environments, where challenges are embraced as opportunities for
            growth, and creativity knows no bounds.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
