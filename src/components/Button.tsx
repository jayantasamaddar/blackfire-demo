import { FC, ReactElement } from 'react';

interface Props {
  className?: string;
  name: string;
}

const Button: FC<Props> = ({ name, className }): ReactElement => {
  return (
    <button
      className={`px-4 py-2 border border-slate-300 hover:border-[#2da1bf] ${
        className || ''
      }`}
    >
      {name}
    </button>
  );
};

export default Button;
