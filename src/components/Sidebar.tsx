import { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo, Navbar, NavItem } from '.';
import { AiOutlineDashboard } from 'react-icons/ai';
import { IoIosPulse } from 'react-icons/io';
import { RiScan2Line } from 'react-icons/ri';
import { BsGearWideConnected } from 'react-icons/bs';
import { BiBell } from 'react-icons/bi';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = ({ className }): ReactElement => {
  const navigate = useNavigate();
  return (
    <aside
      className={`sidebar fixed col-span-2 w-[calc(100vw/8)] z-100 ${
        className || ''
      }`}
    >
      <div className="flex flex-col w-full h-screen bot-0 bg-[#333] gap-4 p-5">
        <div
          className="h-20 flex justify-center items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Logo />
        </div>
        <div className="flex flex-col py-5">
          <Navbar className="flex flex-col gap-4">
            <NavItem
              name="Health Report"
              className="text-white"
              icon={<AiOutlineDashboard size={'1.3rem'} />}
            />
            <NavItem
              name="Monitoring"
              className="text-white"
              icon={<IoIosPulse size={'1.3rem'} />}
            />
            <NavItem
              name="Profiles"
              className="text-white"
              icon={<RiScan2Line size={'1.3rem'} />}
            />
            <NavItem
              name="Builds"
              className="text-white"
              icon={<BsGearWideConnected size={'1.3rem'} />}
            />
            <NavItem
              name="Alerting"
              className="text-white"
              icon={<BiBell size={'1.3rem'} />}
            />
          </Navbar>
        </div>

        <div className="flex flex-col py-5 mt-auto">
          <Navbar className="h-full flex flex-col gap-4">
            <NavItem name="Support" className="text-white" />
            <NavItem name="Docs" className="text-white" />
            <NavItem name="Pricing" className="text-white" />
            <NavItem name="Blog" className="text-white" />
          </Navbar>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
