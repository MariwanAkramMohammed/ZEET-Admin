import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/Apis";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    login(dispatch, { email, password });
    console.log({ email, password })
    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Wraped onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ButtonCon>
          <Button>Login</Button>
        </ButtonCon>
      </Wraped>
    </Container>
  );
};
export default Login;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wraped = styled.form`
  width: 30vw;
  height: 32vh;
  background: rgba(43, 53, 44, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 15px 10px #060d0650;
`;
const Input = styled.input`
  margin-top: 30px;
  flex: 0.3;
  width: 90%;
  padding: 10px 10px;
`;
const ButtonCon = styled.div`
  margin-top: 30px;
  width: 100%;
  flex: 2;

  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 70%;
  height: 50%;
  border: none;
  background: #0c9605;
  // background:  #77c03b;
  font-weight: 600;
  font-size: 22px;
  color: #c4d0c2;
  cursor: pointer;
  transition: all 0.6s;
  &:hover {
    background: #10b807;
  }
`;
