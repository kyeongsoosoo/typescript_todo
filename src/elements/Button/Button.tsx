import React, { Children } from "react";
import Styled from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return <Styled.Button onClick={onClick}>{children}</Styled.Button>;
}

export default Button;
