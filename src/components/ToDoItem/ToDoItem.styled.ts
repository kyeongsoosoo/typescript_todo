import styled, { css } from "styled-components";

interface CheckBoxProps {
    done : boolean;
}




const ToDoItemWrapper = styled.div`
    display: flex;
    flex: none;
    justify-content: space-between;
    align-items: center;
    padding: 0px 35px;
    margin: 10px 0px;
    height: 15%;
    border-radius: 7px;
    background: white;

`;

const ToDoItemCheckBox = styled.div<CheckBoxProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #03c4a1;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    &:hover{
        cursor: pointer;
    }
    ${ ({done}) => done && css`
        background: #03c4a1;
        color:white;
    `}
    
`;

const ToDoItemText = styled.div<CheckBoxProps>`
    width: 350px;
    font-size: 30px;
    text-align: left;
    ${ ({done}) => done && css`
    text-decoration: line-through;
    color:grey;
`}
`;

const ToDoItemRemoveBox = styled.div`
&:hover{
    cursor: pointer;
}
`;

export default {
    ToDoItemCheckBox,
    ToDoItemRemoveBox,
    ToDoItemText,
    ToDoItemWrapper
}