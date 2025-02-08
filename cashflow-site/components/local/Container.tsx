// components/Container.tsx
import React, { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string; // Optional additional classes for flexibility
}

const Container: FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto px-9 sm:px-16 md:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
