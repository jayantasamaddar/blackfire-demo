import { FC, ReactElement } from 'react';
import { Navbar } from '.';

const Header: FC = (): ReactElement => {
  return (
    <header className="header">
      <div className="w-full h-[50px] bg-slate-600 flex items-center px-20">
        <Navbar className="flex items-center gap-10 p-2">
          <div className="searchOrg">Search Bar</div>
          <div className="datePicker">Date Picker</div>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
