import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ListItem } from "../../../../library/types/List";
import { RootState } from "../../../../modules";
import Styled from "./ListDetail.styled";

type DetailProp = {
  id: string;
};

function ListDetail() {
  const { id }: DetailProp = useParams();

  const list = useSelector((state: RootState) => state.list.list);
  const item = list?.find((item) => item.alpha2Code === id);

  return (
    <Styled.ListDetailWrapper>
      <Styled.ListDetailTextBox>
        <Styled.ListDetailText>Name : {item?.name}</Styled.ListDetailText>
        <Styled.ListDetailText>Code :{item?.alpha2Code}</Styled.ListDetailText>
        <Styled.ListDetailText>Region :{item?.region}</Styled.ListDetailText>
        <Styled.ListDetailText>Capital : {item?.capital}</Styled.ListDetailText>
      </Styled.ListDetailTextBox>
    </Styled.ListDetailWrapper>
  );
}

export default ListDetail;
