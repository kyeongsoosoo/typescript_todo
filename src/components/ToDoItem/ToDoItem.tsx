import React from "react";
import Styled from "./ToDoItem.styled";
import { MdDelete, MdDone } from "react-icons/md";
import Todo from "../../library/types/Todo";
import useItemButton from "../../hooks/useItemButton";

interface ToDoItemProps {
  todo: string;
  done: boolean;
  id: string;
}

function ToDoItem({ todo, done, id }: ToDoItemProps) {
  const { onRemove, onToggle } = useItemButton(id);
  const parseId = id.toString();
  return (
    <Styled.ToDoItemWrapper id={parseId}>
      <Styled.ToDoItemCheckBox done={done} onClick={onToggle}>
        <MdDone />
      </Styled.ToDoItemCheckBox>
      <Styled.ToDoItemText done={done}>{todo}</Styled.ToDoItemText>
      <Styled.ToDoItemRemoveBox onClick={onRemove}>
        <MdDelete />
      </Styled.ToDoItemRemoveBox>
    </Styled.ToDoItemWrapper>
  );
}

export default ToDoItem;
