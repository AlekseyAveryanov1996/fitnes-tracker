import styled from "styled-components";
import bgLogin from "../../image/bgLogin.jpg";
import LoginTabs from "./LoginTabs/LoginTabs";
import { devices } from "../../settings";
import { useState } from "react";

const LoginBackgound = styled.div`
  width: 100%;
  height: 100dvh;
  background: url(${bgLogin}) no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  ${devices.mobile} {
    background-position: 0 0;
  }
`;

export default function Login() {
  return (
    <LoginBackgound>
      <LoginTabs />
    </LoginBackgound>
  );
}
