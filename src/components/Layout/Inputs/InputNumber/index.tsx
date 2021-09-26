import { InputHTMLAttributes } from "react";
import InputDefault from "../InputDefault";

export interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  errors?: string[];
}

export default function InputNumber(props: InputNumberProps) {
  return (
    <InputDefault label={ props.label } required={ props.required }>
      <input type="number" {...props} />
    </InputDefault>
  );
};