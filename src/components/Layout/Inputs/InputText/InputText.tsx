import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function InputText(props: InputTextProps) {
  return (
    <Container>
      <label>{props.label} {props.required && '*'}</label>
      <br/>
      <input {...props} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
`