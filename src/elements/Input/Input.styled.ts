import styled from "styled-components";

const Input = styled.input`
    
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    font-size: 25px;
    
    
    &:focus {
        border-bottom: 1px solid rgba(0,0,0,0.3);
        width: 300px;
        
    }
`;

export default {Input};