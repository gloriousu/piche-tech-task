import React from 'react';
import clsx from 'clsx';
import SidebarItem from './sidebarItem';
import { MdEmail, MdShoppingCartCheckout } from 'react-icons/md';

type SidebarProps = {
  isSidebarOpen: boolean;
} & React.ComponentProps<'aside'>;

const Sidebar = ({ isSidebarOpen, className }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        'flex flex-col h-full fixed z-20 space-y-2.5 flex-shrink-0 bg-white py-2.5 px-3 transition-width duration-75',
        isSidebarOpen ? 'w-50' : 'w-20',
        className
      )}
    >
      <SidebarItem route="/" title="List" isSidebarOpen={isSidebarOpen} icon={MdShoppingCartCheckout} />
      <SidebarItem route="/contacts" title="Contacts" isSidebarOpen={isSidebarOpen} icon={MdEmail} />
    </aside>
  );
};

export default Sidebar;
