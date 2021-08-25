import React from "react";
import "./LoginPage.css";
import { useAuth } from "../../providers/auth";

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
      <form onSubmit={handleSubmit}>
        <h1>Entrar no Sistema</h1>
        <label>
          Email
          <input type="email" name="email" value={values.email} onChange={handleChange} />
        </label>
        <label>
          Senha
          <input type="password" name="password" value={values.password} onChange={handleChange} />
        </label>
        <button>Login</button>
        <div>{values.loginErrors}</div>
      </form>
  );
}