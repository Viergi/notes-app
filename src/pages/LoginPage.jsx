import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { login } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function LoginPage({ onLogin }) {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmit = async () => {
    const { error, data } = await login({ email, password });
    if (!error) {
      onLogin(data);
    }
  };
  return (
    <section className="login-page">
      <h2>
        {locale == "id"
          ? "Yuk,login untuk Menggunakan Aplikasi"
          : "Login to use App, please"}
      </h2>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={onEmailChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
        />
        <button type="button" onClick={onSubmit}>
          Login
        </button>
      </div>
      <p>
        {locale == "id" ? `Belum punya akun ?` : `Don't have account ?`}
        <Link to={"/register"}>
          {locale == "id" ? "Daftar di sini" : "Register here"}
        </Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
