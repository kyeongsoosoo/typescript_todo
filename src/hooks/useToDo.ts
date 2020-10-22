import { useSelector } from "react-redux";
import { RootState } from "../modules";

export default function useToDo() {
    const todos = useSelector( (state:RootState) => state.todo);
    return todos;
}