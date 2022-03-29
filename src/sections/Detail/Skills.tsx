import React from "react";

import iconReact from "../../assets/icon-react.svg";
import iconAngular from "../../assets/icon-angular.svg";
import iconNext from "../../assets/icon-next.svg";
import iconJs from "../../assets/icon-js.svg";
import iconCss from "../../assets/icon-css.svg";
import iconTs from "../../assets/icon-ts.svg";
import iconSass from "../../assets/icon-sass.svg";
import iconTw from "../../assets/icon-tailwindcss.svg";
import iconMUI from "../../assets/icon-mui.svg";
import iconSc from "../../assets/icon-sc.svg";
import iconRedux from "../../assets/icon-redux.svg";
import iconSaga from "../../assets/icon-redux-saga.svg";
import iconNode from "../../assets/icon-nodejs.svg";
import iconGraph from "../../assets/icon-graphql.svg";
import iconNgrx from "../../assets/icon-ngrx.svg";
import iconRxjs from "../../assets/icon-rxjs.svg";

const Skills: React.FC = () => {
  return (
    <>
      <p className="text-2xl dark:text-indigo-300 text-purple-900 ">
        Languages
      </p>
      {/* javascript skills */}
      <div className="lg:w-2/3 mx-auto flex items-start mt-3 p-3 dark:bg-slate-700 rounded-lg">
        <div className="flex-1 text-center dark:text-indigo-50 text-slate-900">
          Javascript, ES6+, TS
          <ul className="flex justify-center items-center gap-x-5 mt-4">
            <li>
              <img
                className="sm:w-10 lg:w-14 mx-auto"
                src={iconJs}
                alt="javascript/es6+"
                title="javascript/es6+"
              />
            </li>
            <li>
              <img
                className="sm:w-10 lg:w-14 mx-auto"
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
      <div className="sm:flex-col lg:flex-row flex justify-around mt-10 ">
        {/* css skills */}
        <div className="lg:w-1/3 flex items-start">
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
        <div className="sm:mt-3 lg:mt-0 lg:w-1/3 text-center dark:text-indigo-50 text-slate-900">
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
    </>
  );
};

export default Skills;
