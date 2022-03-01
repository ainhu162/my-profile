import {
  AcademicCapIcon,
  BookmarkIcon,
  ChartBarIcon,
  TranslateIcon,
} from "@heroicons/react/outline";
import React from "react";
import Intro from "../components/Intro.component";
import Title from "../components/Title.component";
import avt from "./../assets/avt.jpg";
const About: React.FC = () => {
  return (
    <div>
      <Title title="My intro" subTitle="About Me" />
      <div className="flex items-center justify-center gap-x-5">
        <Intro
          name="Experience"
          description="4 Years Working"
          Icon={BookmarkIcon}
        />
        <Intro
          name="Companies"
          description="4 companies worked"
          Icon={TranslateIcon}
        />
        <Intro
          name="Language"
          description="English: Intermediate"
          Icon={TranslateIcon}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <img src={avt} alt="my-avatar" className="rounded-xl flex-1" />
        <div className="intro"></div>
      </div>
    </div>
  );
};

export default About;
