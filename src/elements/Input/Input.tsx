import React from 'react';
import Styled from './Input.styled';


function Input({...rest}) {
    return (
        <Styled.Input {...rest}/>
    )
}

export default Input;