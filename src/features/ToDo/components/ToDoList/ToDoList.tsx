import React, { useCallback } from 'react';
import useToDo from '../../../../hooks/useToDo';
import Styled from './ToDoList.styled';
import Todo from '../../../../library/types/Todo';
import ToDoItem from '../../../../components/ToDoItem';

function ToDoList() {
    const todos = useToDo();

    const renderTodo = useCallback((todo:Todo) =>
        <ToDoItem key = {todo.id} id= {todo.id} todo={todo.todo} done={todo.done} /> , []
    )

    return (
        <Styled.ToDoListWrapper>
            {todos.map( (todo:Todo) => renderTodo(todo))}
        </Styled.ToDoListWrapper>
    )
}

export default ToDoList;