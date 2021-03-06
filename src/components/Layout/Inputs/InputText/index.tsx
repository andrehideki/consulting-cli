import { InputHTMLAttributes } from "react";
import InputDefault, { Property } from "../InputDefault";

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  errors?: string[];
  prop: Property;
}

export default function InputText(props: InputTextProps) {
  return (
    <InputDefault label={props.label} required={props.required} >
      <input {...props} />
    </InputDefault>
  );
}