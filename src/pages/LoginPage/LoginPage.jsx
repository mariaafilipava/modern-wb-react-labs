import React, { useState } from "react";
import {
  Wrapper,
  Title,
  FormContainer,
  LabelRow,
  Label,
  Input,
  ButtonGroup,
  Button,
  CancelButton
} from "./LoginPage.styled";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));

    console.log("Logged in:", user);
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <Wrapper>
      <Title>Log in</Title>
      <FormContainer onSubmit={handleSubmit}>
        <LabelRow>
          <Label>User name</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="UserName"
          />
        </LabelRow>

        <LabelRow>
          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </LabelRow>

        <ButtonGroup>
          <Button type="submit">Submit</Button>
          <CancelButton type="button" onClick={handleCancel}>
            Cancel
          </CancelButton>
        </ButtonGroup>
      </FormContainer>
    </Wrapper>
  );
};

export default LoginPage;








