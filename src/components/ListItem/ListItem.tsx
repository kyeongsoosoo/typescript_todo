import React, { useCallback } from "react";
import Styled from "./ListItem.styled";
import { MdDelete, MdDone } from "react-icons/md";

import useItemButton from "../../hooks/useItemButton";
import { useDispatch } from "react-redux";
import { removeList } from "../../modules/list";
import { useHistory } from "react-router-dom";

type ListItemBoxProps = {
  id: string;
  children: React.ReactNode;
};

function ListItemBox({ id, children }: ListItemBoxProps) {
  const dispatch = useDispatch();

  const history = useHistory();
  function handleClick(ev: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    history.push(`/list/${id}`);
  }

  const handleRemove = useCallback(
    (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const clickedId = ev.currentTarget.parentElement?.id;
      if (clickedId) dispatch(removeList(clickedId));
    },
    []
  );

  return (
    <Styled.ListItemWrapper id={id} onClick={handleClick}>
      <Styled.ListItemText>{children}</Styled.ListItemText>
      <Styled.ListItemRemoveBox onClick={handleRemove}>
        <MdDelete />
      </Styled.ListItemRemoveBox>
    </Styled.ListItemWrapper>
  );
}

export default ListItemBox;
