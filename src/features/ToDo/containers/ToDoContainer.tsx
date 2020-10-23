import React from "react";
import ToDoHeader from "../components/ToDoHeader";
import ToDoInput from "../components/ToDoInput";
import ToDoList from "../components/ToDoList";
import ToDoName from "../components/ToDoName";

function ToDoContainer() {
  return (
    <>
      <ToDoHeader />
      <ToDoName />
      <ToDoInput name="" />
      <ToDoList />
    </>
  );
}

export default ToDoContainer;
