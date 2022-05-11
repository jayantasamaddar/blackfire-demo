import { FC, ReactElement, ReactNode, useState, useEffect } from 'react';
import { Header, Sidebar } from '.';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }): ReactElement => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handler = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [windowWidth]);

  return (
    <div className="grid grid-cols-16 w-full h-full relative">
      {windowWidth > 768 && <Sidebar />}
      <div className="md:col-start-3 col-span-16 w-full h-full">
        <Header />
        <main className="main-container p-5 w-full min-h-[calc(100vh-50px)]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
