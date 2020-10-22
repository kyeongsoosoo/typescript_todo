const SAVE_NAME = "name/save_name" as const;

export const saveName = (payload: string) => ({type: SAVE_NAME, payload})

type NameAction = 
 ReturnType<typeof saveName>;

type NameState = string;

const initialState: NameState = '';

function name(state: NameState = initialState, action:NameAction): NameState {

    switch(action.type){
        case SAVE_NAME:
            return (
                action.payload
            )
        default:
            return state;
    }
}

export default name;