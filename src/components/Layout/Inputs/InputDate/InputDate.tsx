import { InputHTMLAttributes } from "react";
import InputDefault from "../InputDefault/InputDefault";

export interface InputDateProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export default function InputDate(props: InputDateProps) {
  return (
    <InputDefault label={ props.label } required={ props.required }>
      <input type="date" {...props} />
    </InputDefault>
  );
}