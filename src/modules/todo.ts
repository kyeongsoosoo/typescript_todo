import Todo from "../library/types/Todo";
import { getStorage } from "../library/utils/useStorage";


const ADD_TODO = "todo/add_todo" as const;
const DELETE_TODO = "todo/delete_todo" as const;
const TOGGLE_TODO = "todo/toggle_todo" as const;

export const addTodo = (payload: string) => ({type:ADD_TODO, payload});
export const deleteTodo = (payload: number) => ({type:DELETE_TODO, payload});
export const toggleTodo = (payload: number) => ({type:TOGGLE_TODO, payload});

type TodoAction =
    |ReturnType<typeof addTodo>
    |ReturnType<typeof deleteTodo>
    |ReturnType<typeof toggleTodo>;

type TodoState = Todo[];

const initialState :TodoState= [
    {
        id:0,
        todo: 'test',
        done: false
    },
    
]

function todo(state: TodoState = initialState, action:TodoAction) : TodoState{
    switch (action.type){
        case ADD_TODO:
            const nextId = Math.max(...state.map( todo => todo.id), 0) +1 ;
            
            return[
                ...state,
                {
                    id:nextId,
                    todo: action.payload,
                    done: false,
                }
            ]
        case DELETE_TODO:
            return (
                state.filter( todo => todo.id !== action.payload)
            )
        case TOGGLE_TODO:
            return (
                state.map(todo => todo.id !== action.payload ? todo : {...todo, done: !todo.done})
            )
        default:
            return state;
    }
}

export default todo;


