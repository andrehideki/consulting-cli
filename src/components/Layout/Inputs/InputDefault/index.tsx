import { InputHTMLAttributes } from "react";
import { Container, Label, Input, Errors } from "./styles";

export interface InputDefaultProps extends InputHTMLAttributes<any> {
  label: string;
  required?: boolean;
  errors?: string[];
}

export default function InputDefault(props: InputDefaultProps) {
  return (
    <Container>
      <Label>{props.label} {props.required === false && 'Opcional'}</Label>
      <Input>{ props.children }</Input>
      { props.errors && 
        <Errors>
          { props.errors.map(error => (
              <div>
                { error }
              </div>
          )) }
        </Errors>
      }
    </Container>
  );
}