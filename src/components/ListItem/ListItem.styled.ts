import styled, { css } from "styled-components";

const ListItemWrapper = styled.div`
  display: flex;
  flex: none;
  justify-content: space-between;
  align-items: center;
  padding: 0px 35px;
  margin: 10px 0px;
  height: 15%;
  border-radius: 7px;
  background: white;
  &:hover {
    cursor: pointer;
  }
`;
const ListItemText = styled.div`
  width: 350px;
  font-size: 30px;
  text-align: left;
`;

const ListItemRemoveBox = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default {
  ListItemRemoveBox,
  ListItemText,
  ListItemWrapper,
};
