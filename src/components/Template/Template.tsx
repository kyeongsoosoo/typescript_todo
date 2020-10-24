import React from "react";
import Styled from "./Template.styled";

interface TemplateProps {
  children: React.ReactNode;
}

function Template({ children }: TemplateProps) {
  return <Styled.Template>{children}</Styled.Template>;
}

export default Template;
