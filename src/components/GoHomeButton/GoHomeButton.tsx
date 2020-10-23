import React from "react";
import { useHistory } from "react-router-dom";
import GoHo from ".";
import Button from "../../elements/Button";

function GoHomeButton() {
  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return <Button onClick={handleClick}>Go Home</Button>;
}

export default GoHomeButton;
