import React from "react";
import GoHomeButton from "../../../../components/GoHomeButton";
import Styled from "./ToDoHeader.styled";

function ToDoHeader() {
  return (
    <Styled.ToDoHeaderWrapper>
      <GoHomeButton />
      <Styled.ToDoHeaderText>ToDoList</Styled.ToDoHeaderText>
    </Styled.ToDoHeaderWrapper>
  );
}

export default ToDoHeader;
