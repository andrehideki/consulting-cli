import { InputHTMLAttributes } from "react";
import InputDefault from "../InputDefault";

export interface InputDateProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  rows?: number;
  errors?: string[];
}

export default function TextArea(props: InputDateProps) {
  return (
    <InputDefault label={props.label} required={props.required}>
      <textarea {...props}></textarea>
    </InputDefault>
  );
}