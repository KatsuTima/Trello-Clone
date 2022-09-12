import React, { useState } from "react";
import styled from "styled-components";

function InnerTasks({ item }) {
  const [seendingData, setSeendingData] = useState([]);
  const openModalInput = (item) => {
    setSeendingData([...seendingData, item]);
  };
  return (
    <ContainerInnerTask>
      <List
        defaultValue={item.value}
        onClick={() => {
          openModalInput(item);
        }}
      />
    </ContainerInnerTask>
  );
}

export default InnerTasks;

const List = styled.input`
  width: 190px;
  min-height: 15px;
  border: 2px solid white;
  border-color: white;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px #888;
  margin: 5px;
`;
const Modal = styled.div`
  position: relative;
`;

const ContainerInnerTask = styled.div``;
