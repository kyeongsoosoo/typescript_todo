import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { deleteTodo, toggleTodo } from "../modules/todo";

export default function useItemButton(id:number) {
    const todo = useSelector((state:RootState) => state.todo);
    const dispatch = useDispatch();

    const onRemove = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = ev.currentTarget.parentElement?.id
        const myId = id ? parseInt(id) : 0; 
        console.log(myId, id);
        dispatch(deleteTodo(myId));
    }
    const onToggle = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const id = ev.currentTarget.parentElement?.id
        const myId = id ? parseInt(id) : 0; 
        console.log(myId, id);
        dispatch(toggleTodo(myId));
    }

    return {
        onRemove,
        onToggle
    }
}