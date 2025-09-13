import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import profileImg from "../../assets/profile.png"

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white"
        >
            <RevealOnScroll>
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-pink-700 bg-clip-text text-transparent leading-tight">
                            Hi, I'm Anbalagan
                        </h1>
                        <p className="text-gray-400 text-lg mb-8">
                            I'm a Python Full-stack Developer passionate about building clean, scalable, and efficient web applications. I focus on performance, user experience, and elegant design.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a
                                href="#projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="border border-blue-500 text-blue-500 py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                Contact Me
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1oS4uT5KHZOriwxUszsl03t3YC7GgohiO/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white py-3 px-6 rounded-lg font-medium transition transform hover:-translate-y-1 hover:shadow-lg"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                        <div className="w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                            <img
                                src={profileImg}
                                alt="Anbu Tech"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
