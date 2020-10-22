import { getStorage, setStorage } from "../library/utils/useStorage";

const SAVE_NAME = "name/save_name" as const;

export const saveName = (payload: string) => ({type: SAVE_NAME, payload})

type NameAction = 
 ReturnType<typeof saveName>;

type NameState = string;

const initialState: NameState = getStorage('name');

function name(state: NameState = initialState, action:NameAction): NameState {

    switch(action.type){
        case SAVE_NAME:
            setStorage('name', action.payload)
            return (
                action.payload
            )
        default:
            return state;
    }
}

export default name;