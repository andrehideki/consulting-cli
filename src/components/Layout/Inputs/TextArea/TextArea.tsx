import { InputHTMLAttributes } from "react";
import styled from "styled-components";

export interface InputDateProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  rows?: number;
}

export default function TextArea(props: InputDateProps) {
  return (
    <Container>
      <label>{props.label} {props.required && '*'}</label>
      <br/>
      <textarea {...props}></textarea>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  
  textarea {
    width: 100%;
  }
`