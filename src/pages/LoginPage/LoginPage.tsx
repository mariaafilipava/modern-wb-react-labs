import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Wrapper,
  Title,
  FormContainer,
  LabelRow,
  Label,
  Input,
  ButtonGroup,
  Button,
  CancelButton,
} from "./LoginPage.styled";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const redirectPath = searchParams.get("redirect");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", username);
    setUsername("");
    setPassword("");
    navigate(redirectPath ? `/${redirectPath}` : "/");
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <FormContainer onSubmit={handleSubmit}>
        <LabelRow>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </LabelRow>

        <LabelRow>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelRow>

        <ButtonGroup>
          <Button type="submit">Log In</Button>
          <CancelButton type="button" onClick={() => navigate("/")}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      </FormContainer>
    </Wrapper>
  );
};

export default LoginPage;
