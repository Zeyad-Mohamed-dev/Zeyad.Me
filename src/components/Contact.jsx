import React, { useRef } from "react";
import SectionHeader from "../Animation/SectionHeader";
import { socials } from "../constants/constants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useForm, ValidationError } from "@formspree/react";
import Marquee from "./Marquee";

export default function Contact() {
  const containerRef = useRef(null);
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Zeyad-Mohamed-dev",
      icon: "mdi:github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zeyad-mohamed-29751723b/",
      icon: "mdi:linkedin",
    },
    {
      name: "Email",
      url: "mailto:zeyadmohamedabdelfatah123@gmail.com",
      icon: "mdi:email-outline",
    },
  ];

  useGSAP(() => {
    gsap.from(".contact-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <section id="contact" ref={containerRef} className="flex flex-col bg-white">

      <Marquee items={["React", "JavaScript", "Node.js", "NestJS", "MongoDB", "PostgreSQL", "Tailwind CSS", "REST APIs"]} className="text-white bg-black" />
      <SectionHeader
        title="Get in Touch"
        description="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      
      <div className="flex flex-col lg:flex-row gap-12 px-10 pb-20">
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="contact-item">
            <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out 
              through any of the platforms below.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex items-center gap-4 group"
              >
                <Icon 
                  icon={link.icon} 
                  className="size-6 text-gray-400 group-hover:text-black transition-colors duration-300" 
                />
                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
                  {link.name}
                </span>
                <Icon 
                  icon="fluent:arrow-up-right-16-regular" 
                  className="size-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                />
              </a>
            ))}
          </div>

          <div className="contact-item mt-4">
            <div className="border-t-2 border-black pt-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                Direct Email
              </p>
              <a 
                href="mailto:zeyadmohamedabdelfatah123@gmail.com"
                className="text-xl md:text-2xl hover:underline"
              >
                zeyadmohamedabdelfatah123@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <form 
            onSubmit={handleSubmit}
            className="contact-item flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label 
                htmlFor="name" 
                className="text-sm uppercase tracking-wide text-gray-500"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-4 bg-gray-50 border-2 border-transparent 
                         focus:border-black focus:bg-white outline-none transition-all duration-300
                         text-lg"
                placeholder="Your name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="email" 
                className="text-sm uppercase tracking-wide text-gray-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 bg-gray-50 border-2 border-transparent 
                         focus:border-black focus:bg-white outline-none transition-all duration-300
                         text-lg"
                placeholder="your@email.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className="flex flex-col gap-2">
              <label 
                htmlFor="message" 
                className="text-sm uppercase tracking-wide text-gray-500"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full p-4 bg-gray-50 border-2 border-transparent 
                         focus:border-black focus:bg-white outline-none transition-all duration-300
                         text-lg resize-none"
                placeholder="Tell me about your project..."
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-4 bg-black text-white text-lg uppercase 
                       tracking-wider hover:bg-gray-800 transition-colors duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
            >
              {state.submitting ? (
                <>
                  <Icon icon="mdi:loading" className="animate-spin size-5" />
                  Sending...
                </>
              ) : state.succeeded ? (
                <>
                  <Icon icon="mdi:check" className="size-5" />
                  Message Sent!
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}