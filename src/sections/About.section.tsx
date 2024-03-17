import {
  AtSymbolIcon,
  BookmarkIcon,
  BriefcaseIcon,
  PhoneIcon,
  TranslateIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React from "react";
import Intro from "../components/Intro.component";
import Title from "../components/Title.component";
import avt from "./../assets/avt2.jpg";
const About: React.FC = () => {
  return (
    <div>
      <Title title="My intro" subTitle="About Me" />
      <div className="sm:px-3 sm:grid sm:grid-cols-1 md:flex items-center justify-center gap-5">
        <Intro
          name="Experience"
          description="5 Years Working"
          Icon={BookmarkIcon}
        />
        <Intro
          name="Companies"
          description="4 companies worked"
          Icon={BriefcaseIcon}
        />
        <Intro
          name="Language"
          description="English: Intermediate"
          Icon={TranslateIcon}
        />
      </div>
      <div className="mt-5 flex items-start justify-center gap-5 container mx-auto">
        <img
          src={avt}
          alt="my-avatar"
          className="sm:hidden lg:block rounded-xl flex-1 w-1/3"
        />
        <div className="intro">
          <p className="dark:text-indigo-50 text-slate-900">
            <span className="text-3xl">A</span>s an accomplished front-end
            developer with more than 5 years of experience, I have proficiency
            in front-end languages HTML, CSS, and JS (ES6+). I actively excel in
            swiftly adapting to diverse environments and diligently supporting
            fellow team members while eagerly absorbing new technical knowledge.
            I thrive when faced with challenging projects, leveraging my
            problem-solving abilities to achieve optimal results
          </p>
          <p className="dark:text-indigo-50 text-slate-900">
            <span className="text-3xl">I’</span>m keen on learning new technical
            frontend, embracing challenges to better.
          </p>
          <div className="contact-info mt-10 dark:text-indigo-50 text-slate-900">
            <div className="flex items-center">
              <UserCircleIcon className="h-5 w-5 mr-2 dark:text-indigo-300" />
              <span className="w-20">Name</span>
              <span>:</span>
              <span className="ml-2">Nhu Tu</span>
            </div>
            <div className="flex items-center my-2">
              <PhoneIcon className="h-5 w-5 mr-2 dark:text-indigo-300" />
              <span className="w-20">Phone</span>
              <span>:</span>
              <span className="ml-2">0906 772 584</span>
            </div>
            <div className="flex items-center">
              <AtSymbolIcon className="h-5 w-5 mr-2 dark:text-indigo-300" />
              <span className="w-20">E-mail</span>
              <span>:</span>
              <span className="ml-2">tuainhu160296@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
