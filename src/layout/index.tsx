import React, { useState } from 'react';
import clsx from 'clsx';
import Sidebar from './sidebar';
import Header from './header';
import LayoutBody from './layoutBody';

const Layout = ({ children, className }: React.ComponentProps<'div'>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className={clsx('flex flex-col pt-18', className)}>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex min-h-fw w-full">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <LayoutBody isSidebarOpen={isSidebarOpen}>{children}</LayoutBody>
      </div>
    </div>
  );
};

export default Layout;
