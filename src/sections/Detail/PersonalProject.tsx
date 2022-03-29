import React from "react";

const PersonalProject: React.FC = () => {
  return (
    <>
      <p className="text-2xl dark:text-indigo-300 text-purple-900 mt-5">
        Personal Projects
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
            Plan saving money
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Main features: </span> Using to save
            money base on the plan was created. User can keep track their money
            to achieve the goal was planned before
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Platform:</span> Website/Mobile
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Languages: </span> React/React
            Native - ExpressJs - MongoDB - Redux - Redux Saga
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
            Loving days
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Main features: </span> Count love
            days, upload user's photos in their anniversary, alert special days
            are coming
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Platform:</span> Mobile
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Languages: </span> React Native -
            ExpressJs - MongoDB
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
            React custom prompt
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Main features: </span> Popup prompt
            when navigate if user were edited form
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Platform:</span> Website
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Languages: </span> React - React
            router
          </p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
            Landing page
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Main features: </span> Introduce
            myself
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Platform:</span> Website
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            <span className="font-semibold">Languages: </span> React
          </p>
        </div>
      </div>
    </>
  );
};

export default PersonalProject;
