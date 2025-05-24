import { useState, useRef } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const formRef = useRef();

    const SERVICE_ID = "service_g8t2l7n";
    const TEMPLATE_ID = "template_89x8cfv";
    const PUBLIC_KEY = "jwX70g4nlxSvddx7b";

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(() => {
                alert("Message Sent!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white"
        >
            <RevealOnScroll>
                <div className="max-w-xl w-full">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <form
                        ref={formRef}
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:-translate-y-0.5 shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
