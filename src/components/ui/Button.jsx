import styled from "styled-components"
import { devices } from "../../settings"

const Btn = styled.button`
  padding: 16px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #354545;
  width: 100%;
  max-width: fit-content;
  margin: 0 0;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background .5s ease;
  cursor: pointer;
  ${devices.tabletLarge} {
    &:hover {
      background: #213d3d;
    }
  }
`

export default function Button({children}) {
  return (
    <Btn>{children}</Btn>
  )
}