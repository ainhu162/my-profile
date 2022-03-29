import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Title: React.FC<Props> = ({ title, subTitle }: Props) => {
  return (
    <div className="text-center mt-20 sm:pb-10 lg:pb-14">
      <p className="text-violet-400 dark:text-indigo-200">{title}</p>
      <p className="text-violet-700 dark:text-indigo-100 sm:text-2xl md:text-4xl font-semibold">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
