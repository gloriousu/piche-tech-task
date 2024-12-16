import React from 'react';
import clsx from 'clsx';

type UiButtonProps = {
  variant?: 'primary' | 'cancel' | 'submit';
  text: string;
  icon?: React.ReactNode;
} & React.ComponentProps<'button'>;

const UiButton = ({ variant = 'primary', text, className, onClick, type, icon }: UiButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'flex items-center px-5 py-2 rounded gap-2 disabled:bg-gray-300 disabled:hover:bg-gray-300',
        variant === 'primary' && 'bg-black text-white hover:bg-gray-800',
        variant === 'submit' && 'bg-green-500 hover:bg-green-400',
        variant === 'cancel' && 'border-1 border-black bg-transparent hover:bg-gray-100',
        className
      )}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default UiButton;
