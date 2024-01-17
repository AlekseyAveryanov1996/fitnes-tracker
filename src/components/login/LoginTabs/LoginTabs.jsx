import styled from "styled-components";
import { devices } from "../../../settings";
import Button from "../../ui/Button";
import { useState } from "react";
import Autentification from "./Autentification/Autentification";
import Registr from "./Registr/Registr";

const ContainerTabs = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${devices.mobile} {
    max-width: 1200px;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  ${devices.mobile} {
    flex-direction: row;
  }
`;

const TabsMain = styled.div`
  margin-top: 20px;
`;

export default function LoginTabs() {
  const [tab, setTab] = useState("login");

  return (
    <ContainerTabs>
      <TabsHeader>
        <Button
          isActive={tab === "login"}
          onClick={() => setTab("login")}
        >
          Авторизация
        </Button>
        <Button
          isActive={tab === "registr"}
          onClick={() => setTab("registr")}
        >
          Регистрация
        </Button>
      </TabsHeader>

      <TabsMain>
        {tab === "login" && <Autentification />}
        {tab === "registr" && <Registr />}
      </TabsMain>
    </ContainerTabs>
  );
}
