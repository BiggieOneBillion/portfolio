import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen md:h-screen w-screen bg-black flex justify-center md:items-center text-[rgba(255,255,255,0.5)] relative overflow-auto pt-5 pb-10 md:pb-0 ">
      <div className="flex h-[800px] hide-scrollbar overflow-y-scroll flex-col justify-start lg:border p-5 pb-0 mt-20y md:pt-0 md:w-[500px]">
        <Link
          to={"/"}
          className="text-sm text-[rgba(255,255,255,0.7)] about-link w-fit mb-10 md:hidden "
        >
          Home
        </Link>

        {/* EXPERIENCE */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r border-gray-500  text-normal font-lighty w-fity text-[rgba(255,255,255,0.5)]">
            Experience
          </p>
          <div></div>
        </div>
        {/* EXPERIENCE LIST */}
        {/* 2020-2021 */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r text-sm border-gray-500  text-normal font-light w-fity text-[rgba(255,255,255,0.5)]">
            2020-2021
          </p>
          <div className="px-2 py-2">
            <ul className="space-y-2 text-sm md:text-base">
              {/* <li>
                {" "}
                - Worked at Ultino Resources as a Front-End Developer, where I
                was part of the team reponsibile for building and maintaining
                not only their website but other clients website{" "}
              </li>
              <li>
                {" "}
                - Also worked with Shooly Bradt Limited as a Full stack
                developer, responsible for building and maintaining react
                applications for the companies clients
              </li> */}
              <li className="py-2 border-b border-white/70">
                <p className="font-medium text-white/70">
                  Worked at <span className="underline">Shooly Brandt</span> as
                  a Front-End Developer
                </p>
                <ol className="list-decimal list-inside pl-4 text-[15px]">
                  <li>
                    Built and maintained the front-end of the company’s website
                    using HTML, CSS, JavaScript, and React.js.
                  </li>
                  <li>
                    Improved website performance by optimizing code and
                    implementing best practices, resulting in a 30% faster page
                    load time.
                  </li>
                  <li>
                    Collaborated with the design team to enhance UI/UX,
                    increasing user engagement by 20%.
                  </li>
                </ol>
              </li>
              <li>
                <p className="font-medium text-white/70">
                  Worked at <span className="underline">Ultino Resources</span>{" "}
                  as a React Js Developer
                </p>
                <ol className="list-decimal list-inside pl-4 text-[15px]">
                  <li>
                    Developed and maintained scalable web applications using
                    React.js, Redux, and REST APIs.
                  </li>
                  <li>
                    Refactored existing codebase, reducing loading time by 40%
                    and improving application responsiveness.
                  </li>
                  <li>
                    Integrated third-party libraries and APIs to add new
                    features, enhancing user functionality and experience.
                  </li>
                  <li>
                    Worked closely with back-end developers and participated in
                    code reviews to ensure quality and consistency.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2022-2023 */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r text-sm border-gray-500  text-normal font-light w-fity text-[rgba(255,255,255,0.5)]">
            2022-2023
          </p>
          <div className="px-2 py-2">
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                {" "}
                - Worked as a Freelancer, building Full stack websites and
                mobile applications using technologies like Next Js, Flutter,
                C#, MERN stack
              </li>
              <li>
                {" "}
                - Also worked on some personal project, some of which can seen
                in the project section{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* 2023-2024 */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r text-sm border-gray-500  text-normal font-light w-fity text-[rgba(255,255,255,0.5)]">
            2023-2024
          </p>
          <div className="px-2 py-2">
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <p className="font-medium text-white/70">
                  Worked at <span className="underline">OLOTU SQUARE</span> as a
                  Full Stack Developer - (Web Developement Trainer)
                </p>
                <ol className="list-decimal list-inside pl-4 text-[15px]">
                  <li>
                    Trained over 20 developers in modern web development,
                    achieving a 90% course completion rate with positive
                    feedback.
                  </li>
                  <li>
                    Led workshops on state management, component-based
                    architecture, and full-stack best practices, enhancing
                    problem-solving skills.
                  </li>
                  <li>
                    Developed a project-based curriculum for real-world
                    application development, improving hands-on coding
                    abilities.
                  </li>
                  <li>
                    Provided code reviews and one-on-one support, helping
                    students debug and adopt clean coding standards.
                  </li>
                  <li>
                    Created training materials and exercises aligned with
                    industry standards and trends.
                  </li>
                  <li>
                    Taught version control using Git and GitHub, emphasizing
                    collaborative development and best practices.
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* WORK TOOLS */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r border-gray-500  text-normal font-lighty w-fity text-[rgba(255,255,255,0.5)]">
            Tools
          </p>
          <div></div>
        </div>
        {/* WORK TOOL LIST */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className=" p-2 border-r border-gray-500 "></p>
          <div className="px-2 py-2">
            <ul className="space-y-1 text-sm">
              <li> - VS code</li>
              <li> - Github</li>
              <li> - Jira</li>
              <li> - Slack</li>
              <li> - Postman, Insonmia </li>
              <li> - Chrome Developer Tools</li>
              <li> - Jest and Vitest</li>
              <li> - Andriod studio</li>
              <li> - nvm, npm and yarn</li>
              <li> - Docker</li>
              <li> - Mongodb compass</li>
              <li> - Redux, Zustand, React Query</li>
            </ul>
          </div>
        </div>
        {/* HOBBIES */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b border-gray-500">
          <p className="section-experience p-2 border-r border-gray-500  text-normal font-lighty w-fity text-[rgba(255,255,255,0.5)]">
            Hobbies
          </p>
          <div></div>
        </div>
        {/* HOBBIES LIST */}
        <div className="grid grid-cols-[min(100px)_1fr] border-b lg:border-none border-gray-500">
          <p className=" p-2 border-r border-gray-500 "></p>
          <div className="px-2 py-2">
            <ul className="space-y-1 text-sm md:text-base">
              <li> - Sight seeing</li>
              <li> - Watching Football</li>
              <li> - Playing Indoor Games - Scrabble, Ludo, Chess(Beginner)</li>
            </ul>
          </div>
        </div>
      </div>
      <Link
        to={"/"}
        className="absolute hidden md:block top-5 text-sm left-10 text-[rgba(255,255,255,0.7)] about-link "
      >
        Home
      </Link>
    </div>
  );
};

export default AboutPage;
