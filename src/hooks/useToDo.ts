import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setStorage } from "../library/utils/useStorage";
import { RootState } from "../modules";

export default function useToDo() {
    const todos = useSelector( (state:RootState) => state.todo);

    useEffect(() =>{setStorage('todo', todos)},
    [todos])
    return todos;
}