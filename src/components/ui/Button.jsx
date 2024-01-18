import styled from "styled-components";
import { devices } from "../../settings";

const Btn = styled.button`
  padding: 16px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: ${(props) => (props.isActiveButton ? "#66a9a9" : "#354545")};
  width: 100%;
  max-width: fit-content;
  margin: 0 0;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.5s ease;
  cursor: pointer;
  ${devices.tabletLarge} {
    &:hover {
      background: #66a9a9;
    }
  }
`;

export default function Button({ isActive, onClick, children }) {
  return (
    <Btn
      isActiveButton={isActive}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
}
