import styled from "styled-components";
import { useSelector } from "react-redux";
import ListInput from "./ListInput";
function ListTodo() {
  const items = useSelector((state) => state.cart.items);
  return (
    <MainBox>
      {items.map((item) => (
        <ListInput key={item.id} {...item} />
      ))}
    </MainBox>
  );
}

export default ListTodo;

const MainBox = styled.div`
  display: flex;
  height: 97vh;
  background: url("https://images.alphacoders.com/598/598847.jpg") no-repeat;
  background-size: cover;
  width: 100%;
  overflow: auto;
`;
