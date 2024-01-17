import styled from "styled-components";
import { devices } from "../../settings";

export default function Input({ type = "text", placeholder, icon }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
      />
      <div>{icon}</div>
    </div>
  );
}
