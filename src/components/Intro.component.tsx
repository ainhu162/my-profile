import React, { ElementType } from "react";

type Props = {
  Icon: ElementType;
  name: string;
  description: string;
};
const Intro: React.FC<Props> = ({ Icon, name, description }: Props) => {
  return (
    <div className="py-5 px-8 text-center shadow-md bg-indigo-50 dark:bg-slate-800 rounded-lg">
      <Icon className="w-6 dark:text-indigo-300 text-slate-900 mx-auto" />
      <p className="dark:text-indigo-50 text-slate-900 font-semibold text-lg">
        {name}
      </p>
      <p className="text-xs text-slate-400">{description}</p>
    </div>
  );
};

export default Intro;
