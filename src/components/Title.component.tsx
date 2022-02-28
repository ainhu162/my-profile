import React from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Title: React.FC<Props> = ({ title, subTitle }: Props) => {
  return (
    <div className="text-center mt-20 pb-14">
      <p className="text-slate-900 dark:text-indigo-200">{title}</p>
      <p className="text-slate-900 dark:text-indigo-100 text-4xl font-semibold">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
