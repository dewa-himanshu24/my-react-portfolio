import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Himanshu Dewangan. I am a software developer. I live in
          Durg, Chhattisgarh. I did my graduation in Mechanical Engineering from
          CSVTU Bhilai. Currently I am open to work as a software developer.
        </p>

        <br />
        <p className="text-xl">
          I keep myself motivated and eager to learn something new and it is one
          of the reasons I started working with JavaScript and and it excites me
          how easy to read and write JavaScript is it makes me more curious to
          learn more so I started working on Node.js and its web application
          framework express eventually I worked on mongoDb and MySQL with ORM
          like sequelize and Prisma. I always wanted to develop my skill for a fullstack
          developer which leads me to work with REACT, NEXT JS, TypeScrip, Tailwind, 
          HTML and CSS. I have also know python as I started my journey with python only.
        </p>

        <br />
        <p className="text-xl">
          In 2016 as my engineering  discipline is mechanical engineering so I started preparing for the GATE examination and other govt examinations but it didn't go well. So one of my friends suggested that I learn programming as I started learning and exploring programming. I was fascinated it indulge me more into working and learning with different frameworks. That's where I started my journey.
        </p>
      </div>
    </div>
  );
};

export default About;
