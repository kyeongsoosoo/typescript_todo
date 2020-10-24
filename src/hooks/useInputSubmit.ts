import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
import { addTodo } from "../modules/todo";

export function useInputSubmit(input: string) {
  const todo = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(addTodo(input));
    },
    [dispatch, input]
  );

  return { todo, onSubmit };
}
