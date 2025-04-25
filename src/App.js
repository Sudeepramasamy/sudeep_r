import React from "react";
import foodImg from './assets/food.jpg';
import flower from './assets/flower.jpg';
import quiz from './assets/quiz.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";




const App = () => {

  return (
    <div className="bg-darkBlue">
      <div className=" bg-center h-screen bg-cover flex flex-col justify-center p-6">
        <div className="text-left pl-14 max-w-4xl" >
          <h1 className="font-bold font-poppins text-1xl text-teal-300">Hi, my name is</h1>
          <h1 className="font-bold text-5xl font-poppins text-white leading-tight">Sudeep.<br></br>I'm Python Full-Stack Developer.</h1>
          <p className="font-medium max-w-3xl text-gray-400 mt-2 mb-6 font-poppins">
            Hi, I'm a Full Stack Python Developer passionate about building dynamic and user-friendly web applications.
            I specialize in creating seamless experiences using Django, React, PostgreSQL, and REST APIs.
            With a strong foundation in both frontend and backend development, I turn ideas into fully functional digital solutions.
            <br></br>
            <a
              href="Sudeep_python_developer_resume.pdf"
              download
              className="inline-block font-poppins bg-teal-600 hover:bg-teal-500 rounded-none mt-4 px-2 py-2 text-white">
              Download resume</a>
          </p>
        </div>
      </div>
      <div className=" bg-center bg-cover min-h-screen flex justify-center items-start pt-20 px-6">
        <div className="text-left max-w-4xl">
          <h1 className="text-teal-400 text-5xl font-bold mb-6 font-poppins">About Me</h1>
          <p className="text-left items-center max-w-4xl text-gray-400 font-medium font-poppins">
            I'm Sudeep Ramasamy, a passionate Full Stack Developer with a strong foundation in Python, Django, React, PostgreSQL, SQLite, and MySQL. I have a B.Tech in Biotechnology from Sri Shakthi Institute of Engineering and Technology.
            After completing my degree, I pursued a three-month Full Stack Python course, which helped me build a solid understanding of backend and frontend technologies. I am particularly skilled in developing dynamic web applications and APIs using Django and React.
            In addition to web development, I have a growing interest in AI and machine learning. I have basic knowledge of AI models, including TensorRT and YOLO, and I am actively expanding my expertise in AI-driven technologies.
            I love learning, experimenting, and building innovative applications. Whether it's crafting efficient backend systems, designing seamless user interfaces, or exploring AI-powered solutions, I am always eager to push my boundaries and improve my skills.
            When I’m not coding, I enjoy exploring new technologies, solving challenging problems, and continuously enhancing my knowledge in the tech world.
          </p>
          <p className=" font-poppins mb-6 mt-4 text-gray-400 font-medium">
            I love creating dynamic web applications, APIs, and experimenting with new technologies.
            Lately, I've been diving into AI/ML and learning about models like YOLO and TensorRT.
            Whether it's building powerful backend systems or clean UIs, I'm always eager to grow.
          </p>
          <p className="mb-6 text-gray-400 font-mediumfont-poppins">Here are a few technologies I’ve been working with recently:</p>
          <ul className="grid grid-cols-4 gap-x-1 gap-y-1 list-disc pl-4 mb-6 font-medium font-poppins">
            <li className="text-gray-400 list-disc marker:text-teal-400">HTML</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">CSS</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">JavaScript</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">Python</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">React JS</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">Django</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">Sqlite</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">PostgreSQL</li>
            <li className="text-gray-400 list-disc marker:text-teal-400">Tailwind CSS</li>
          </ul>
        </div>
      </div>

      <div className="text-white min-h-screen px-10 py-19 pt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-300 mb-10 flex items-center gap-2">
          <span className="text-teal-400 font-poppins"></span>Somethings i've built..</h2>
        <div className="flex flex-col md:flex-row gap-10 md:items-start items-center">
          <div className="md:w-1/2 relative group">
            <a href="https://loclharvest.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group">
              <img src={foodImg} alt="food tracker"
                className="transition-all duration-300"></img>
            <div className="absolute inset-0 bg-teal-300 opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
            </a>
          </div>
          <div className="md:w-1/2 space-y-4 left-0 md:-ml-28 md:mt-24 z-20">
            <a
              href="https://loclharvest.netlify.app"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className="text-2xl font-bold text-right font-poppins hover:text-teal-300">Food Supply Chain Tracker</h2>
            </a>
            <p className="bg-deepblue rounded-md p-6  text-gray-400 text-sm font-medium font-poppins">
              This project is a food supply chain tracker that allows users to trace the origin
              and movement of food products. Built using React, Django, PostgreSQL, and more.
            </p>
            <div className="flex flex-wrap justify-end text-xs font-medium gap-3 mt-4 text-teal-400 font-poppins">
              <span>Python</span>
              <span>React</span>
              <span>django</span>
            </div>
            <div className="flex justify-end gap-6 mt-9 text-3xl text-teal-300">
              <a href="https://github.com/Sudeepramasamy/Local-Harvest" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-white transition duration-300"></FaGithub></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:items-start items-center mt-24">
          <div className="md:w-1/2 relative group">
            <img src={flower} alt="food tracker"
              className=" transition-all duration-300"></img>
            <div className="absolute inset-0 bg-teal-500 opacity-30 group-hover:opacity-0 transition-all duration-500"></div>
          </div>
          <div className="md:w-1/2 space-y-4 left-0 md:-ml-28 md:mt-24 z-20">
            <a
              href="https://github.com/Sudeepramasamy/e-commerce---Flower-shop"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className="text-2xl font-bold text-right font-poppins hover:text-teal-300">E-Commerce Website</h2>
            </a>
            <p className="bg-deepblue rounded-md p-6  text-gray-400 text-sm font-medium font-poppins">
              I developed a responsive e-commerce website for a flower shop using Django, HTML, CSS, and JavaScript.
              The platform features category-wise product listings, user authentication, and secure order processing.
              Customers can add items to the cart, and place orders seamlessly.
              Product data is managed through an admin panel, ensuring efficient inventory control.
            </p>
            <div className="flex flex-wrap justify-end text-xs gap-3 mt-4 text-teal-400 font-medium font-poppins">
              <span>Python</span>
              <span>django</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="flex justify-end gap-6 mt-9 text-3xl text-teal-300">
              <a href="https://github.com/Sudeepramasamy/e-commerce---Flower-shop" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-white transition duration-300"></FaGithub></a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:items-start items-center mt-24">
          <div className="md:w-1/2 relative group">
            <img src={quiz} alt="food tracker"
              className=" transition-all duration-300"></img>
            <div className="absolute inset-0 bg-teal-500 opacity-30 group-hover:opacity-0 transition-all duration-500"></div>
          </div>
          <div className="md:w-1/2 space-y-4 left-0 md:-ml-28 md:mt-24 z-20">
            <a
              href="https://github.com/Sudeepramasamy/quizzz"
              target="_blank"
              rel="noopener noreferrer">
              <h2 className="text-2xl font-bold text-right font-poppins hover:text-teal-300">Quiz app</h2>
            </a>
            <p className="bg-deepblue rounded-md p-6  text-gray-400 text-sm font-medium font-poppins">
            A simple web-based quiz app that allows users to answer multiple-choice questions.
It tracks scores in real-time and displays results at the end of the quiz.
The app is built with clean UI for smooth user experience.
Ideal for learning, practicing, and testing knowledge interactively.
            </p>
            <div className="flex flex-wrap justify-end text-xs gap-3 mt-4 text-teal-400 font-medium font-poppins">
              <span>Python</span>
              <span>django</span>
              <span>React JS</span>
              <span>Tailwind CSS</span>
              <span>PostgreSQL</span>
            </div>
            <div className="flex justify-end gap-6 mt-9 text-3xl text-teal-300">
              <a href="https://github.com/Sudeepramasamy/quizzz" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-white transition duration-300"></FaGithub></a>
            </div>
          </div>
        </div>


      </div>

      <div className="text-white min-h-screen flex justify-center items-center font-poppins">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-5xl md:text-6xl text-teal-300 font-bold mb-6">Get in Touch</h1>
          <p className="mt-4 font-medium text-gray-400">
          Have a project in mind or looking to collaborate?
          </p>
          <p className="text-gray-400 font-medium mt-4">
          I'm open to freelance work, full-time roles, or exciting new opportunities. Let's build something amazing together!
          </p>
          <a
            href="mailto:sudeep9568@gmail.com"
            className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-md mt-6 transition duration-300"
          >
            Say Hello
          </a>
          <div className="flex justify-center gap-6 mt-9 text-3xl text-teal-300">
            <a href="https://linkedin.com/in/Sudeep-ramasamy" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-white transition duration-300"></FaLinkedin></a>
            <a href="https://github.com/Sudeepramasamy" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-white transition duration-300"></FaGithub></a>
          </div>

        </div>
      </div>

    </div>
  )

};
export default App;