import React from "react";

import thingVerse from "../assets/portfolio/thing_verse.jpg";
import reunion from "../assets/portfolio/reunion.jpg";
import marquee from "../assets/portfolio/marquee.jpg";
import panditAi from "../assets/portfolio/pandit_ai.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: panditAi,
      demo: "https://pandit-ai.vercel.app/",
      code: "https://github.com/dewa-himanshu24/pandit.ai",
    },
    {
      id: 2,
      src: thingVerse,
      demo: "https://bubbly-spicy-kumquat.glitch.me/",
      code: "https://github.com/dewa-himanshu24/thingverse",
    },
    {
      id: 3,
      src: reunion,
      demo: "https://github.com/dewa-himanshu24/reunion",
      code: "https://github.com/dewa-himanshu24/reunion",
    },
    {
      id: 4,
      src: marquee,
      demo: "https://www.youtube.com/watch?v=Z44SYMHjAdI&ab_channel=HimanshuDewangan",
      code: "https://github.com/dewa-himanshu24/Marquee",
    },
    {
      id: 5,
      src: thingVerse,
      demo: "https://bubbly-spicy-kumquat.glitch.me/",
      code: "https://github.com/dewa-himanshu24/thingverse",
    },
    {
      id: 6,
      src: panditAi,
      demo: "pandit-ai.vercel.app",
      code: "https://github.com/dewa-himanshu24/pandit.ai",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 -full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </p>
                </a>

                <a href={code} target="_blank" rel="noopener noreferrer">
                  <p className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
