import React from "react";
import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";
import projectFour from "../assets/project-4.png";

const projects = {
  1: {
    title: "Car-Showcase",
    image: projectOne,
    description: (
      <p>
         A state-of-the-art modern application that is mobile responsive and utilizes all of the latest and greatest of what Next 14 has to offer, leveraging features such as server-side rendering and the app router: React, Next.js 14, Typescript, Tailwind CSS. 
      </p>
      
    ),
    github: "https://github.com/ses-beep/car-showcase/tree/main",
    demo: "https://papaya-ganache-58ab71.netlify.app",
  },
  2: {
    title: "Gericht Restaurant",
    image: projectTwo,
    description: (
      <p>
          A mobile responsive client ready fine dining restaurant website that showcases my skills in Javascript, CSS and React.
        </p>
      
    ),
    github: "https://github.com/ses-beep/https---github.com-ses-beep-gerich-restaurant",
    demo: "https://boisterous-travesseiro-8166d5.netlify.app",
  },
  3: {
    title: "Sesflix",
    image: projectThree,
    description: (
      <>
        <p>
         This is a simple responsive movie website that enables the user to search for movies and displays information about the movies. It showcases my skills in JavaScript and fetching Data from an API
        </p>
      </>
    ),
    github: "https://github.com/ses-beep/sesflix",
    demo: "https://grand-donut-c2eab7.netlify.app",
  },
  4: {
    title: "Modern Bank App",
    image: projectFour,
    description: (
      <>
        <p>
         A responsive React JS application consisting of a stunning hero section, high-quality assets. Showcases skills in UI/UX design, React Js and Tailwind CSS
        </p>
      </>
    ),
    github: "https://github.com/ses-beep/modern_bank_app",
    demo: "https://timely-bublanina-cca6cb.netlify.app",
  },
};

export default projects;