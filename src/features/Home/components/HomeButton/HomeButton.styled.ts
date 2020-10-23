import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  top: 50%;
  left: 24%;
  width: 400px;
  height: 200px;
  margin: auto;
`;

const HomeButtonLink = styled(Link)`
  width: 100px;
  height: 60px;
`;

export default {
  HomeButtonLink,
  HomeButtonWrapper,
};
