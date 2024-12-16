import React from 'react';
import { Menu, MenuButton, MenuProps } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/zoom.css';

type UiMenuProps = {
  menuButtonContent: React.ReactNode;
} & Omit<MenuProps, 'menuButton'>;

const UiMenu = ({ menuButtonContent, children, ...menuProps }: UiMenuProps) => {
  return (
    <Menu {...menuProps} menuButton={<MenuButton>{menuButtonContent}</MenuButton>}>
      {children}
    </Menu>
  );
};

export default UiMenu;
