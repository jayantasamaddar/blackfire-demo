import { FC, ReactElement, ReactNode } from 'react';

interface Props {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ title, className, children }): ReactElement => {
  return (
    <div
      className={`widget flex flex-col grow basis-1/6 bg-white rounded-xl min-h-40 drop-shadow-lg border border-slate-300 ${
        className || ''
      }`}
    >
      <h3 className="most__impactful__transactions title text-center md:text-left">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Card;
