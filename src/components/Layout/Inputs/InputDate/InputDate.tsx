import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function InputDate(props: InputDateProps) {
  return (
    <Container>
      <label>{props.label} {props.required && '*'}</label>
      <br/>
      <input type="date" {...props} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  
  input {
    width: 100%;
  }
`