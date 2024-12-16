import React, { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};

const Portal: FC<PortalProps> = ({ children }) => {
  const [container, setContainer] = useState<Element | null>(null);

  useEffect(() => {
    const portalElement = document.querySelector('#myportal');
    if (portalElement) {
      setContainer(portalElement);
    }
  }, []);

  if (!container) {
    return null;
  }

  return createPortal(children, container);
};

export default Portal;
