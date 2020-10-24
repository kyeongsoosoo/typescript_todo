import React from "react";
import Input from "../../../../elements/Input";
import useInput from "../../../../hooks/useInput";
import { useInputSubmit } from "../../../../hooks/useInputSubmit";
import Styled from "./ToDoInput.styled";

interface test {
  name: string;
}

function ToDoInput({ name }: test) {
  const { input, onChange, onReset } = useInput();
  const { todo, onSubmit } = useInputSubmit(input);

  const onInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmit(e);
    onReset();
  };

  return (
    <Styled.ToDoInputWrapper>
      <Styled.ToDoInputForm onSubmit={onInputSubmit}>
        <Input
          placeholder="Write your ToDo"
          value={input}
          onChange={onChange}
        />
      </Styled.ToDoInputForm>
    </Styled.ToDoInputWrapper>
  );
}

export default ToDoInput;
