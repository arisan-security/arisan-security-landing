import React from "react";
import BaseButton from "./base";

export interface ButtonProps {
  variant?: "filled" | "outlined";
  children: React.ReactNode;
  className?: string;
}

/**
 * Button: styled button component for consistent UI.
 * Accepts 'filled' or 'outlined' variants.
 */
const Button: React.FC<ButtonProps> = ({ variant = 'filled', children, className = '' }) => {
  const variants: Record<string, string> = {
    filled: `
      text-white 
      bg-light-blue 
      hover:bg-white
      hover:text-light-blue 
      hover:outline-none 
      hover:ring-4 
      hover:ring-blue-300
      border
      border-light-blue 
      font-medium 
      rounded-full 
      text-sm 
      px-5 
      py-2.5 
      text-center 
      cursor-pointer 
      shadow-md
    `,
    outlined: `
      border 
      border-light-white
      px-8
      py-2.5 
      text-center
      text-white
      rounded-full   
    `,
  };
  return (
    <div className={`${className} ${variants[variant]}`}>
      <BaseButton>{children}</BaseButton>
    </div>
  );
};

export default Button;
