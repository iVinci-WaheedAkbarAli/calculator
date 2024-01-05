import React from "react";

type InsertButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const InsertButton: React.FC<InsertButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default InsertButton;
