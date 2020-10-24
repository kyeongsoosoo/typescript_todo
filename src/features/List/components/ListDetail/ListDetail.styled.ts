import styled from "styled-components";

const ListDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f8efd4;
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 30px 30px;
  margin-top: 30px;
  width: 100%;
  height: 35%;
  border-radius: 10px;
`;

const ListDetailTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 20px 30px;
  width: 100%;
  height: 80%;
  background: white;
`;

const ListDetailText = styled.div``;

export default {
  ListDetailText,
  ListDetailTextBox,
  ListDetailWrapper,
};
