import React from "react";
import Button from "../../../../elements/Button";
import Styled from "./HomeButton.styled";

function HomeButton() {
  return (
    <Styled.HomeButtonWrapper>
      <Button>
        <Styled.HomeButtonLink to="/todo">ToDo</Styled.HomeButtonLink>
      </Button>
      <Button>
        <Styled.HomeButtonLink to="/list">List</Styled.HomeButtonLink>
      </Button>
    </Styled.HomeButtonWrapper>
  );
}

export default HomeButton;
