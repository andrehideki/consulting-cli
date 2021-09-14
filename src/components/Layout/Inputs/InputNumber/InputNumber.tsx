import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function InputNumber(props: InputNumberProps) {
  return (
    <Container>
      <label>{props.label} {props.required === false && 'Opcional'}</label>
      <br/>
      <input type="number" {...props} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  
  input {
    width: 100%;
  }
`