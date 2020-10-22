import styled from "styled-components";

const ToDoHeaderWrapper = styled.div`
    display: flex;

    align-items: center;

    padding-left: 10px;
    width: 100%;
    height: 10%;
    
    border-bottom: 1px solid rgba(0,0,0,0.3);

`;

const ToDoHeaderText = styled.div`
    font-size: 25px;
`;

export default { 
    ToDoHeaderText,
    ToDoHeaderWrapper
};

