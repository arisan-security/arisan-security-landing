import React from "react";

export interface BaseButtonProps {
  children: React.ReactNode;
}

/**
 * BaseButton: low-level button wrapper for composition.
 */
const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return <span>{props.children}</span>;
};

export default BaseButton;
