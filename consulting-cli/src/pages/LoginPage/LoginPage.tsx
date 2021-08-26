import React from "react";
import { useAuth } from "../../providers/auth";
import { Form, FormPage } from "./styles";

export default function LoginPage() {
  const { login } = useAuth();

  const [values, setValues] = React.useState({
    email: "", password: "", loginErrors: ""
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    const { email, password } = values;
    if (!email || !password) return;
    login({ password, email });
  }

  return (
    <FormPage>
      <h1>Entrar no Sistema</h1>
      <Form onSubmit={ handleSubmit }>
        <label>
          Email
          <input type="email" name="email" value={values.email} onChange={handleChange} />
        </label>
        <label>
          Senha
          <input type="password" name="password" value={values.password} onChange={handleChange} />
        </label>
        <button>Login</button>
      </Form>
      <div>{values.loginErrors}</div>
    </FormPage>
  );
}