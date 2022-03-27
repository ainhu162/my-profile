import React from 'react';
import Title from '../components/Title.component';
import './style.css';
import iconReact from '../assets/icon-react.svg';
import iconAngular from '../assets/icon-angular.svg';
import iconNext from '../assets/icon-next.svg';
import iconJs from '../assets/icon-js.svg';
import iconCss from '../assets/icon-css.svg';
import iconTs from '../assets/icon-ts.svg';
import iconSass from '../assets/icon-sass.svg';
import iconTw from '../assets/icon-tailwindcss.svg';
import iconMUI from '../assets/icon-mui.svg';
import iconSc from '../assets/icon-sc.svg';
import iconRedux from '../assets/icon-redux.svg';
import iconSaga from '../assets/icon-redux-saga.svg';
import iconNode from '../assets/icon-nodejs.svg';
import iconGraph from '../assets/icon-graphql.svg';
import iconNgrx from '../assets/icon-ngrx.svg';
import iconRxjs from '../assets/icon-rxjs.svg';

const Skills: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Title title="My Skill and Experience" subTitle="Technical Experience" />
      <p className="text-2xl dark:text-indigo-300 text-slate-900">Languages</p>
      {/* javascript skills */}
      <div className="w-2/3 mx-auto flex items-start mt-3">
        <div className="flex-1 text-center dark:text-indigo-50 text-slate-900">
          Javascript, ES6+, Typescript
          <ul className="flex justify-center items-center gap-x-5 mt-4">
            <li>
              <img
                className="w-14 mx-auto"
                src={iconJs}
                alt="javascript/es6+"
                title="javascript/es6+"
              />
            </li>
            <li>
              <img
                className="w-14 mx-auto"
                src={iconTs}
                alt="typescript"
                title="typescript"
              />
            </li>
          </ul>
        </div>
        <div className="flex-1 text-center dark:text-indigo-50 text-slate-900">
          Frameworks/Library
          <ul className="flex items-center gap-x-5 mx-auto mt-4 justify-center">
            <li>
              <img
                className="w-14"
                src={iconReact}
                alt="React/React Native"
                title="React/React Native"
              />
            </li>
            <li>
              <img
                className="w-14"
                src={iconAngular}
                alt="Angular2+"
                title="Angular2+"
              />
            </li>
            <li>
              <img
                className="w-14"
                src={iconNext}
                alt="NextJS"
                title="NextJS"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        {/* css skills */}
        <div className="w-1/3 flex items-start">
          <div className="flex-1 text-center dark:text-indigo-50 text-slate-900">
            CSS
            <ul className="flex justify-center items-center gap-x-5 mt-4">
              <li>
                <img
                  className="w-8 mx-auto"
                  src={iconCss}
                  alt="css"
                  title="css"
                />
              </li>
              <li>
                <img
                  className="w-8 mx-auto"
                  src={iconSass}
                  alt="css"
                  title="Scss"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 text-center dark:text-indigo-50 text-slate-900">
            Frameworks/Library
            <ul className="flex items-center gap-x-5 mx-auto mt-4 justify-center">
              <li>
                <img
                  className="w-8"
                  src={iconSc}
                  alt="Styled Component"
                  title="Styled Component"
                />
              </li>
              <li>
                <img
                  className="w-8"
                  src={iconMUI}
                  alt="material ui"
                  title="Material UI"
                />
              </li>
              <li>
                <img
                  className="w-8"
                  src={iconTw}
                  alt="tailwindcss"
                  title="Tailwind Css"
                />
              </li>
            </ul>
          </div>
        </div>
        {/* other skill */}
        <div className="w-1/3 text-center dark:text-indigo-50 text-slate-900">
          <p>Others</p>
          <ul className="flex items-center gap-x-5 mx-auto mt-4 justify-center">
            <li>
              <img className="w-8" src={iconRedux} alt="Redux" title="Redux" />
            </li>
            <li>
              <img
                className="w-8"
                src={iconSaga}
                alt="Redux Saga"
                title="Redux Saga"
              />
            </li>
            <li>
              <img className="w-8" src={iconNgrx} alt="ngrx" title="Ngrx" />
            </li>
            <li>
              <img className="w-8" src={iconRxjs} alt="rxjs" title="Rxjs" />
            </li>
            <li>
              <img className="w-8" src={iconGraph} alt="tailwindcss" />
            </li>
            <li>
              <img
                className="w-8"
                src={iconNode}
                alt="nodejs"
                title="Node JS"
              />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-2xl dark:text-indigo-300 text-slate-900 mt-5">
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
          <div className="dark:text-stone-500 italic">
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
          <div className="dark:text-stone-500 italic">
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
          <div className="dark:text-stone-500 italic">
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
          <div className="dark:text-stone-500 italic">
            <p className="indent-2">- Convert PSD to HTML5, CSS3, JQuery</p>
            <p className="indent-2">- Create news pages for VNG's Game</p>
            <p className="indent-2">
              - Maintain and Develop tools manage banner, article
            </p>
            <p className="indent-2">
              - Create webpages for users to interact vote, share, social login{' '}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
