import styled from "styled-components";
import { devices } from "../../settings";

const WrapperForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${devices.tabletLarge} {
    gap: 49px;
  }
`;

export default function Form({ children }) {
  return <WrapperForm>{children}</WrapperForm>;
}
