import { FC, ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const Navbar: FC<Props> = ({ className, children }): ReactElement => {
  return (
    <nav className="w-full h-full">
      <ul className={`${className || ''} w-full h-full`}>{children}</ul>
    </nav>
  );
};

export default Navbar;
