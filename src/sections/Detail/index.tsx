import React from "react";
import Title from "../../components/Title.component";
import Experience from "./Experience";
import PersonalProject from "./PersonalProject";
import Skills from "./Skills";

const Detail: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Title title="My Skill and Experience" subTitle="Technical Experience" />
      <Skills />
      <Experience />
      <PersonalProject />
    </div>
  );
};

export default Detail;
