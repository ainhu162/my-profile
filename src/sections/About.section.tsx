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
          Icon={BriefcaseIcon}
        />
        <Intro
          name="Language"
          description="English: Intermediate"
          Icon={TranslateIcon}
        />
      </div>
      <div className="flex items-center justify-center gap-3">
        <img src={avt} alt="my-avatar" className="rounded-xl flex-1" />
        <div className="intro">
          <p>
            As Frontend developer with more than 4 years experience working with
            HTML5, CSS3, Javascript. I worked framework is ReactJS, Angular 2+.
            Expertise in developing UI/UX from design and delivery quality work.
            I'm keen on learning new technical frontend, embracing challenges to
            better
          </p>
          <div className="contact-info">
            <div>
              <span>
                <UserCircleIcon className="" /> Name
              </span>
              <span>:</span>
              <span>Nhu Tu</span>
            </div>
            <div>
              <span>
                <PhoneIcon className="" /> Phone
              </span>
              <span>:</span>
              <span>0906 772 584</span>
            </div>
            <div>
              <span>
                <AtSymbolIcon className="" /> E-mail
              </span>
              <span>:</span>
              <span>tuainhu160296@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
