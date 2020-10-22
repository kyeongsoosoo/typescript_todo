import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStorage } from "../library/utils/useStorage";
import { RootState } from "../modules";
import {addTodo} from '../modules/todo';

export function useInputSubmit(input:string) {
    const todo = useSelector((state:RootState) => state.todo)
    const dispatch = useDispatch();



    const onSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(input));
    }, [dispatch,todo,input]);

    return {todo, onSubmit};
    
}

