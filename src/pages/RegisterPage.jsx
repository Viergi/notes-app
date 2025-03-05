import React, { useContext } from "react";
import useInput from "../hooks/useInput";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

function RegisterPage() {
  const { locale } = useContext(LocaleContext);
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onCofirmPasswordChange] = useInput("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (password != confirmPassword) {
      alert("Confirm password must same with password");
      return;
    }
    const response = await register({ name, email, password });
    navigate("/login");
  };

  return (
    <section className="register-page">
      <h2>
        {locale == "id"
          ? "Isi form untuk mendaftar akun"
          : "Fill the form to register account."}
      </h2>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={onNameChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={onCofirmPasswordChange}
        />
        <button type="button" onClick={onSubmit}>
          Register
        </button>
      </div>
      <p>
        {locale == "id" ? "Sudah punya akun ? " : "Already have an account ? "}
        <Link to={"/"}>{locale == "id" ? " Login di sini" : "Login here"}</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
