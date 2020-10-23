import React from "react";
import { Route, Switch } from "react-router-dom";
import Input from "../elements/Input";
import HomeContainer from "../features/Home/containers";
import ToDoContainer from "../features/ToDo/containers";
import GlobalStyle from "../library/css/GlobalStyle";
import ToDoTemplate from "./ToDoTemplate";

function App() {
  return (
    <ToDoTemplate>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/todo" exact component={ToDoContainer} />
        {/* <Route path="/list" exact component={TestList} /> */}
      </Switch>
    </ToDoTemplate>
  );
}

export default App;
