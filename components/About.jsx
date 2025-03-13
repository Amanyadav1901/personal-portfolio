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
            I am a passionate and results-driven Software Developer, dedicated
            to building high-performance applications, optimizing code, and
            leveraging data-driven insights. My goal is to secure a more
            challenging
            <span className="text-[#5651e5]">
              Software Development Engineer (SDE)
            </span>
            role at a tech company where I can drive innovation and make a
            meaningful impact.
          </p>
          <p className="py-2 text-gray-600">
            With a strong foundation in Data Structures and Algorithms, I have
            honed my problem-solving abilities and deepened my understanding of
            computer science principles, enabling me to tackle complex
            challenges effectively.
          </p>
          <p className="py-2 text-gray-600">
            With over a year of experience as a Software Developer in an MNC, I
            have worked on building high-performance applications, optimizing
            code, and leveraging data analysis to drive efficiency. Previously,
            during my internships, I contributed as a Full Stack Web Developer,
            collaborating on innovative solutions, and later as a Frontend Web
            Developer, refining user interface design and experience.
          </p>

          <p className="py-2 text-gray-600">
            I am committed to continuous learning and staying at the forefront
            of emerging technologies. I thrive in dynamic environments where
            challenges drive growth, and creativity fuels innovation.
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
