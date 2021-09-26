import { InputHTMLAttributes } from "react";
import InputDefault from "../InputDefault";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  errors?: string[];
}

export default function InputText(props: InputTextProps) {
  return (
    <InputDefault label={props.label} required={props.required}>
      <input {...props} />
    </InputDefault>
  );
}