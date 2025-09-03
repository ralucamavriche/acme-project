import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
  <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={onClick}>
    {children}
  </button>
);

export default Button;
