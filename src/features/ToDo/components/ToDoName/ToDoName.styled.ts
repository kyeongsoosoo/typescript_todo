import styled from "styled-components";

const ToDoNameWrapper = styled.div`
    display:flex;
    align-items: center;
    width: 100%;
    height: 15%;
    border-bottom: 1px solid rgba(0,0,0,0.2);
`;

const ToDoNameText = styled.div`
    display:flex;
    color: #b8de6f;
    align-items: center;
    font-size: 32px;
    width: 100%;
    height: 100%;

`;

const ToDoNameForm = styled.form``;

export default {
    ToDoNameWrapper,
    ToDoNameText,
    ToDoNameForm
};