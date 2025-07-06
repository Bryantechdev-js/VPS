"use client";

import Image from "next/image";
import Header from "./components/Header";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-200 min-h-screen">
      <Header />
      <section className="hero flex flex-col items-center justify-center text-center py-20 animate-fade-in">
        <Image
          src="/school-hero.jpg"
          alt="School campus"
          width={400}
          height={250}
          className="rounded-xl shadow-lg mb-8 transition-transform hover:scale-105 duration-300"
        />
        <h1 className="text-5xl font-bold text-blue-900 mb-4 drop-shadow-lg">
          Welcome to Our School
        </h1>
        <p className="text-xl text-blue-700 mb-6">
          Empowering students for a brighter future.
        </p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-colors"
        >
          Learn More
        </a>
      </section>
      <section
        id="about"
        className="about flex flex-col md:flex-row items-center gap-10 px-8 py-16 bg-white bg-opacity-80 animate-slide-up"
      >
        <Image
          src="/classroom.jpg"
          alt="Classroom"
          width={300}
          height={200}
          className="rounded-lg shadow-md"
        />
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-2">
            About Us
          </h2>
          <p className="text-lg text-gray-700">
            Our school is dedicated to providing quality education and fostering a
            supportive community. We believe in holistic development and nurturing
            every student's potential.
          </p>
        </div>
      </section>
      <section className="contact flex flex-col items-center py-16 animate-fade-in-up">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          If you have any questions, feel free to reach out!
        </p>
        <form className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease;
        }
      `}</style>
    </div>
  );
}
