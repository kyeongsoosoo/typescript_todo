import React from 'react';
import Input from '../../../../elements/Input';
import useInput, { useNameSubmit } from '../../../../hooks/useInput';

import Styled from './ToDoName.styled';

interface test{
    name : string
}

function ToDoName( ) {
    const {input,onChange} = useInput();
    const {name, onSubmit} = useNameSubmit(input);

    return (
        <Styled.ToDoNameWrapper>
            
            {!name 
                ? <Styled.ToDoNameForm onSubmit={onSubmit}>
                        <Input onChange={onChange} value={input}/>
                    </Styled.ToDoNameForm>
                : <Styled.ToDoNameText>{`${name}의 ToDoList`}
                    </Styled.ToDoNameText>}
        </Styled.ToDoNameWrapper>
        
    )
}

export default ToDoName;