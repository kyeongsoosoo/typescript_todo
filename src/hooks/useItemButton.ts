import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStorage } from "../library/utils/useStorage";
import { RootState } from "../modules";
import { deleteTodo, toggleTodo } from "../modules/todo";

export default function useItemButton(id:number) {
    const todo = useSelector((state:RootState) => state.todo);
    const dispatch = useDispatch();

    const onRemove = useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = ev.currentTarget.parentElement?.id
        const myId = id ? parseInt(id) : 0; 
        dispatch(deleteTodo(myId));
        setStorage('todo',todo);
    },[dispatch,id])
    const onToggle = useCallback((ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = ev.currentTarget.parentElement?.id
        const myId = id ? parseInt(id) : 0; 
        dispatch(toggleTodo(myId));
        setStorage('todo',todo);
    },[dispatch, id])

    return {
        onRemove,
        onToggle
    }
}