import React from 'react';
import Greeting from '../../components/Greeting.component';
import CV from './../../assets/cv_tuainhu.pdf';
import avt from './../../assets/avt.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <div className="intro text-center pt-28">
        <Greeting />
        <a
          href={CV}
          download
          className="mt-10 rounded-lg border-2 border-indigo-500 py-2 px-5 inline-block text-indigo-400 dark:text-indigo-200"
        >
          Download CV
        </a>
        <div
          style={{
            backgroundImage: `url(${avt})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
          }}
          className="rounded-full border-2 border-indigo-500 w-48 h-48 shadow shadow-indigo-500 mx-auto mt-6"
        ></div>
      </div>
    </div>
  );
};

export default Home;
