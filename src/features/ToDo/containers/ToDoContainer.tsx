import React from 'react';
import ToDoHeader from '../components/ToDoHeader';
import ToDoInput from '../components/ToDoInput';
import ToDoList from '../components/ToDoList';
import ToDoName from '../components/ToDoName';
import ToDoTemplate from '../components/ToDoTemplate';

function ToDoContainer() {
    return (
    <ToDoTemplate>
        <ToDoHeader />
        <ToDoName />
        <ToDoInput name=''/>
        <ToDoList />
    </ToDoTemplate>
    )
}

export default ToDoContainer;