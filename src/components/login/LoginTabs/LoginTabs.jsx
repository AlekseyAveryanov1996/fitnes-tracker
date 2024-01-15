import styled from "styled-components"
import { devices } from "../../../settings"
import Button from "../../ui/Button"

const ContainerTabs = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.90);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${devices.mobile} {
    max-width: 1200px;
  }
`

const TabsHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  ${devices.mobile} {
    flex-direction: row;
  }
`

export default function LoginTabs() {
  return (
    <ContainerTabs>
      <TabsHeader>
        <Button>Авторизация</Button>
        <Button>Регистрация</Button>
      </TabsHeader>
    </ContainerTabs>
  )
}