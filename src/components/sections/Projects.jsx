import RevealOnScroll from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">


                        <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-semibold text-white mb-2">Smart voting System</h3>
                            <p className="text-gray-300 mb-4 font-medium">
                                <strong>Face- Authentication </strong> —{" "}
                                <a
                                    href="https://github.com/Anbalagan121/smart-voting-system"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-300"
                                >
                                    View Project
                                </a>
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Adhar Number Checking</li>
                                <li className="ml-5">– Face Authorites</li>
                                <li className="ml-5">– Memory usage</li>
                                <li className="ml-5">– Votes Csv Storage</li>
                                <li className="ml-5">–Voting Option in Voters</li>
                                <li>Ensures high secure</li>
                            </ul>
                        </div>


                        <div className="p-6 border border-white/10 rounded-xl hover:-translate-y-1 transition-all">
                            <h3 className="text-2xl font-semibold text-white mb-2">Mini Projects</h3>
                            <p className="text-gray-300 mb-4 font-medium">
                                <strong>GitHub Repository</strong> —{" "}
                                <a
                                    href="https://github.com/Anbalagan121?tab=repositories"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-300"
                                >
                                    View Repo
                                </a>
                            </p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                                <li>Youtube Clone
                                    <a
                                        href="https://github.com/Anbalagan121/youtube-clone"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>


                                </li>
                                <li >Password Generator
                                    <a
                                        href="https://anbalagan121.github.io/Micro-IT-internship-password-generator-task/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>


                                </li>
                                <li >To-Do List App
                                    <a
                                        href="https://anbalagan121.github.io/todo-list/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>



                                </li>
                                <li >Frontend E-commerce Website
                                    <a
                                        href="https://anbalagan121.github.io/Nike-web/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>


                                </li>
                                <li >Calculator Projects
                                    <a
                                        href="https://anbalagan121.github.io/Micro-IT-internship-calculator-Project-/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>


                                </li>
                                <li >Other mini projects
                                    <a
                                        href="https://github.com/Anbalagan121?tab=repositories&q=&type=&language=&sort="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        View Repo
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RevealOnScroll >
        </section >
    );
};
