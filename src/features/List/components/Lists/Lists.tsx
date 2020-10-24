import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ListItemBox from "../../../../components/ListItem/ListItem";
import { ListItem } from "../../../../library/types/List";

import { RootState } from "../../../../modules";
import { getList } from "../../../../modules/list";
import Styled from "./Lists.styled";

function Lists() {
  const state = useSelector((state: RootState) => state.list);
  const dispatch = useDispatch();

  const renderList = useCallback(
    (item: ListItem) => (
      <ListItemBox key={item.alpha2Code} id={item.alpha2Code}>
        {item.name}
      </ListItemBox>
    ),
    []
  );

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <Styled.ListsWrapper>
      {state.list && state.list.map((item: ListItem) => renderList(item))}
    </Styled.ListsWrapper>
  );
}

export default Lists;
