import React from 'react';
import clsx from 'clsx';

type UiModalProps = {
  isOpen: boolean;
  setIsOpen: (isVisible: boolean) => void;
} & React.ComponentProps<'div'>;

const UiModal = ({ children, isOpen, setIsOpen, className }: UiModalProps) => {
  return (
    <div
      className={clsx('fixed inset-0 modal-color z-100', isOpen ? 'flex justify-center items-center' : 'hidden')}
      onClick={() => setIsOpen(false)}
    >
      <div className={'p-8 bg-white rounded ' + className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default UiModal;
