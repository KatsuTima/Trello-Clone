import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../store/cartSlice";
function SignInForm({ getUserData, get }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const seendingUserData = async (event) => {
    event.preventDefault();
    if (!userData.email.trim() && !userData.password.trim()) return null;

    const data = getUserData.find(
      (item) =>
        item.email === userData.email && userData.password === item.password
    );
    if (data) {
      return alert("Выберите другое имя");
    } else {
      navigate("/list");
    }
    dispatch(postUser(userData));
    get();
  };

  const onHandleEmail = (event) => {
    setUserData({ ...userData, email: event.target.value });
  };

  const onHandlerPassword = (event) => {
    setUserData({ ...userData, password: event.target.value });
  };
  const onHandleLogin = () => {
    navigate("/login");
  };

  return (
    <ContainerForm onSubmit={seendingUserData}>
      <Title>Регистрация</Title>
      <Input
        onChange={onHandleEmail}
        value={userData.email}
        placeholder="укажите адрес электронной почты"
        type="email"
      />
      <Input
        onChange={onHandlerPassword}
        value={userData.password}
        placeholder="Введите пароль"
        type="password"
      />
      <Btn type="submit">Вход</Btn>
      <YesAccount onClick={onHandleLogin}>Уже есть аккаунт?</YesAccount>
    </ContainerForm>
  );
}

export default SignInForm;

const ContainerForm = styled.form`
  margin: 0 auto;
  background: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  height: 360px;
  width: 400px;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 250px;
  padding-left: 10px;
  height: 40px;
  border: 1px solid black;
  outline: none;
  border-radius: 5px;
  margin: 5px;
  ::placeholder {
    padding-left: 8px;
  }
`;
const Btn = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  border-radius: 10px;
  width: 150px;
`;

const Title = styled.h1`
  color: #999;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 28px;
  font-weight: 700;
`;

const YesAccount = styled.div`
  font-weight: 500;
  margin-top: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  box-shadow: 1px 1px 1px;
  border: none;
`;
