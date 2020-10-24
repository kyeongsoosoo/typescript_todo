import React from "react";
import { Route, Switch } from "react-router-dom";
import { listApi } from "../api/api";
import Input from "../elements/Input";
import HomeContainer from "../features/Home/containers";
import ListDetail from "../features/List/components/ListDetail";
import ListContainer from "../features/List/container";
import ToDoContainer from "../features/ToDo/containers";
import GlobalStyle from "../library/css/GlobalStyle";
import Template from "./Template";

function App() {
  listApi.getList();

  return (
    <Template>
      <Switch>
        <Route path="/" exact component={HomeContainer} />
        <Route path="/todo" exact component={ToDoContainer} />
        <Route path="/list" component={ListContainer} />
      </Switch>
      <Route path="/list/:id" component={ListDetail} />
    </Template>
  );
}

export default App;
