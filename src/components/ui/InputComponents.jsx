import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  outline: none;
  padding: 0;
  width: 100%;
  padding: 18px 40px 12px 18px;
  background: #f5f5f5;
  border: none;
  border-bottom: 1px solid rgba(0, 20, 31, 0.44);
  font-size: 18px;
  font-weight: 400;
`;

const InputIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function InputComponents({ type = "text", placeholder, icon }) {
  return (
    <InputWrapper>
      <Input
        type={type}
        placeholder={placeholder}
      />
      <InputIcon>{icon}</InputIcon>
    </InputWrapper>
  );
}
