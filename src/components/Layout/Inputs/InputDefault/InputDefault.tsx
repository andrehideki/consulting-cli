import { InputHTMLAttributes } from "react";
import { Container, Label, Input } from "./styles";

export interface InputDefaultProps extends InputHTMLAttributes<any> {
  label: string;
  required?: boolean;
}

export default function InputDefault(props: InputDefaultProps) {
  return (
    <Container>
      <Label>{props.label} {props.required === false && 'Opcional'}</Label>
      <Input>{ props.children }</Input>
    </Container>
  );
}