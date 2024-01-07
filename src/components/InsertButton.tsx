import React from "react";
import { Button } from "@chakra-ui/react";

type InsertButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const InsertButton: React.FC<InsertButtonProps> = ({ onClick, children }) => {
  return (
    <Button margin={1} colorScheme="blue" onClick={onClick}>
      {children}
    </Button>
  );
};

export default InsertButton;
