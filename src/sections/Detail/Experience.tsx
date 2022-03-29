import React from "react";
import "./style.css";
const Experience: React.FC = () => {
  return (
    <>
      <p className="text-2xl dark:text-indigo-300 text-purple-900 mt-10">
        Experiences
      </p>
      <ul className="flex flex-col experience-list">
        <li className="text-right w-1/2 p-3">
          <p className="time dark:text-violet-300 text-gray-400">
            April 2021 - Now
          </p>
          <p className="company text-teal-600 font-semibold uppercase dark:text-indigo-100">
            IDea logic
          </p>
          <div className="dark:text-stone-500 italic sm:hidden md:block">
            <p className="indent-2">
              - Maintain source code and Enhance feature
            </p>
            <p className="indent-2">
              - Based on Zeplin design to build the applications UI
            </p>
            <p className="indent-2">- Develop the website using Angular 11</p>
          </div>
        </li>
        <li className="ml-auto w-1/2 p-3">
          <p className="time dark:text-violet-300 text-gray-400">
            Jun 2020 - April 2021
          </p>
          <p className="company text-teal-600 font-semibold uppercase dark:text-indigo-100">
            S3 CORP
          </p>
          <div className="dark:text-stone-500 italic sm:hidden md:block">
            <p className="indent-2">- Implement almost the UI of the website</p>
            <p className="indent-2">
              - Communicate with SP team to collect requirements
            </p>
            <p className="indent-2">
              - Based on Figma design to build the applications UI
            </p>
            <p className="indent-2">
              - Develop the website using ReactJS( React Hook ) and Auth0 to
              manage user login
            </p>
            <p className="indent-2">- Suggest UX/UI for PO</p>
          </div>
        </li>

        <li className="text-right w-1/2 p-3">
          <p className="time dark:text-violet-300 text-gray-400">
            Jan 2019 - May 2020
          </p>
          <p className="company text-teal-600 font-semibold uppercase dark:text-indigo-100">
            KMS TECHNOLOGY
          </p>
          <div className="dark:text-stone-500 italic sm:hidden md:block">
            <p className="indent-2">
              - Worked with the design team to build the applications UI
            </p>
            <p className="indent-2">
              - Developed a web application using ReactJS(Typescript)/ NextJS/
              Redux
            </p>
            <p className="indent-2">- Review code for other team members</p>
          </div>
        </li>
        <li className="ml-auto w-1/2 p-3">
          <p className="time dark:text-violet-300 text-gray-400">
            Aug 2017 - May 2018
          </p>
          <p className="company text-teal-600 font-semibold uppercase dark:text-indigo-100">
            VNG CORP
          </p>
          <div className="dark:text-stone-500 italic sm:hidden md:block">
            <p className="indent-2">- Convert PSD to HTML5, CSS3, JQuery</p>
            <p className="indent-2">- Create news pages for VNG's Game</p>
            <p className="indent-2">
              - Maintain and Develop tools manage banner, article
            </p>
            <p className="indent-2">
              - Create webpages for users to interact vote, share, social login{" "}
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Experience;
