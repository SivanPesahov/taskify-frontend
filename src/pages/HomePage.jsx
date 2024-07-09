import React, { useEffect } from "react";
import { CircleHelp } from "lucide-react";
import { LayoutList } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { FilePlus2 } from "lucide-react";
import { PanelTop } from "lucide-react";

export const HomePage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddennElements = document.querySelectorAll(".hiddenn");
    hiddennElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 p-8">
        <h1 className="text-white text-4xl mb-4">
          Welcome to Your Task Manager
        </h1>
        <p className="text-white text-lg max-w-2xl">
          Manage your tasks effortlessly with our intuitive task manager. Stay
          organized and keep track of your daily, weekly, and monthly tasks.
        </p>
        <div className="absolute bottom-4 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </section>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 p-8">
        <h1 className="text-white text-4xl mb-4">Plan Your Day</h1>
        <p className="text-white text-lg max-w-2xl mb-4">
          Start your day with a clear plan. Our task manager allows you to
          create, prioritize, and track tasks to boost your productivity.
        </p>
        <p className="text-white text-lg max-w-2xl">
          Whether you have personal tasks, work assignments, or project
          deadlines, our task manager is designed to help you stay on top of
          everything.
        </p>
      </section>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 p-8">
        <h1 className="text-white text-4xl mb-4">Achieve Your Goals</h1>
        <p className="text-white text-lg max-w-2xl mb-4">
          Stay focused and achieve your goals with our powerful task manager.
          Track your progress, meet deadlines, and accomplish more.
        </p>
        <p className="text-white text-lg max-w-2xl">
          Sign up now to start managing your tasks efficiently and take the
          first step towards a more organized and productive life.
        </p>
      </section>
      <section className="hiddenn h-screen flex flex-col items-center justify-center text-center bg-sky-900 p-8">
        <h1 className="text-white text-4xl mb-4">Getting started: </h1>
        <div className="text-white text-lg max-w-2xl mb-4 flex">
          <CircleHelp />
          <p className="ml-2">for information about us</p>
        </div>
        <div className="text-white text-lg max-w-2xl mb-4 flex">
          <CircleUserRound />
          <p className="ml-2">for contact info</p>
        </div>
        <div className="text-white text-lg max-w-2xl mb-4 flex">
          <LayoutList />
          <p className="ml-2">view tour tasks</p>
        </div>
        <div className="text-white text-lg max-w-2xl mb-4 flex">
          <FilePlus2 />
          <p className="ml-2">to add new tasks</p>
        </div>
        <div
          className="text-white text-lg max-w-2xl my-10 flex cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <PanelTop />
          <p className="ml-2">back to top</p>
        </div>
      </section>
    </>
  );
};
