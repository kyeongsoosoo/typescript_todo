import { FormEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { saveName } from "../modules/name";


function useInput() {
    const [input, setInput] = useState<string>('');
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    },[]);
    const onReset = () => {
        setInput('');
    }
    return {input,onChange, onReset};
}

export default useInput;

export function useNameSubmit(input:string) {
    const name = useSelector((state:RootState) => state.name)
    const dispatch = useDispatch();

    const onSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(saveName(input));
    }, [dispatch,input]);

    return {name, onSubmit};
    
}

