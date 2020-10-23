import React from 'react';
import Styled from './ToDoTemplate.styled';

interface ToDoTemplateProps {
    children: React.ReactNode
}

function ToDoTemplate({children} : ToDoTemplateProps) {
    return (
        <Styled.ToDoTemplate>
            {children}
        </Styled.ToDoTemplate>
    )
}

export default ToDoTemplate;