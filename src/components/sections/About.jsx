import RevealOnScroll from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "TailwindCSS", "JavaScript", "CSS", "HTML"];
    const backendSkills = ["Python", "Django", "MongoDB", "AWS", "MySQL"];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-black py-20 px-4 text-white">
            <RevealOnScroll>
                <div className="max-w-4xl w-full">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        About Me
                    </h2>

                    <div className="rounded-xl p-6 md:p-8 border border-black/10 bg-white/5 hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="rounded-xl p-6 border border-blue-500/20 bg-blue-500/5 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                                <div className="flex flex-wrap gap-3">
                                    {frontendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div className="rounded-xl p-6 border border-green-500/20 bg-green-500/5 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 text-green-400">Backend</h3>
                                <div className="flex flex-wrap gap-3">
                                    {backendSkills.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-green-500/10 text-green-400 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-md transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-cyan-300">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                                <li>
                                    <strong>MCA in Computer Application</strong> – Bharathidasan University (2024–2026)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures, Web Development, Cloud Computing
                                </li>
                            </ul>
                        </div>


                        <div className="p-6 rounded-xl border border-white/10 bg-white/5 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 text-cyan-300">Technical Experience</h3>
                            <div className="space-y-4 text-gray-300 text-sm">
                                <div>
                                    <h4 className="font-semibold text-lg text-white">FullStack – E-Commerce Website</h4>
                                    <strong>GitHub Repository</strong> —{" "}
                                    <a
                                        href="https://github.com/Anbalagan121/Fullstack-Ecommerce"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>
                                    <ul className="list-disc list-inside space-y-1 mt-2">
                                        <li><strong>Stack:</strong> Python, Django, MySQL, HTML, CSS, Bootstrap 5</li>
                                        <li>Developed a full-stack e-commerce website with category-wise product listing.</li>
                                        <li>Implemented user login, cart management, and admin product control panel.</li>
                                        <li>Designed a responsive UI using Bootstrap 5.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
