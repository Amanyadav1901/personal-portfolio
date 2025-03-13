import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Aman | Resume</title>
        <meta
          name="description"
          content="I’m a Software Developer | Enhancing performance and driving insights through data analysis and application optimization."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Aman Yadav</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/aman-yadav-351357167/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/Amanyadav1901/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Software Developer <span className="px-1">|</span> Data Analyst
              <span className="px-1">|</span> Performance Enhancement
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          With a strong foundation in Data Structures and Algorithms, I have
          honed my problem-solving abilities and deepened my understanding of
          computer science principles, enabling me to tackle complex challenges
          effectively. My journey in the tech industry has been enriched by
          hands-on experience in data analysis, performance optimization, and
          application development. During my internships, I worked as a Full
          Stack Web Developer, collaborating with teams to create innovative
          solutions, and later as a Frontend Web Developer, refining my ability
          to design intuitive user interfaces.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Full stack Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Angular
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Node JS
            <span className="px-2">|</span> Spring Boot
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">CBRE</span>
            <span className="px-2">|</span>Gurgram, IN
          </p>
          <p className="py-1 italic">
            Associate Software Engineer (Feb 2024 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Conducted performance testing using JMeter, executing test cases
              to evaluate system performance under various conditions.
            </li>
            <li>
              Analyzed test results to identify bottlenecks and optimize system
              efficiency and reliability.
            </li>
            <li>
              Actively upskilled in software development, focusing on building
              scalable applications with Spring Boot.
            </li>
            <li>
              Balanced performance testing responsibilities while enhancing
              development expertise to contribute to application optimization.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Bixtop</span>
            <span className="px-2">|</span>Dallas, TX
          </p>
          <p className="py-1 italic">
            Full stack Web Developer Intern (May 2023 - August 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created an admin portal from scratch to efficiently manage user
              profiles, ensuring seamless verification process reducing
              verification time by 75%, integrated user authentication
              mechanism.
            </li>
            <li>
              Incorporated interactive graphs and Designed a robust lead
              management system, resulting in 50% faster response times and
              better customer satisfaction.
            </li>
          </ul>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default resume;
