import React from 'react';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { MdLocalGroceryStore } from 'react-icons/md';
import Link from 'next/link';

type HeaderProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (currentState: boolean) => void;
};

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  return (
    <div className="flex h-18 w-full top-0 bg-white flex-shrink-0 fixed z-40">
      <div className="flex items-center w-full h-full">
        <div className="flex items-center w-20 justify-center flex-shrink-0">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <AiOutlineMenuFold size={32} /> : <AiOutlineMenuUnfold size={32} />}
          </button>
        </div>
        <Link href="/">
          <span className="flex items-center text-xl font-bold gap-1">
            <MdLocalGroceryStore size={28} />
            GroceFi
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
