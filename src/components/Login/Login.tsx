import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

// interface IFormSubmitHandler {
//   email: string;
//   password: string;
// }

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const formSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (email.trim() === "") return alert("Поле «Email» должно быть заполнено");
    if (password.trim() === "")
      return alert("Поле «Пароль» должно быть заполнено");
  };
  return (
    <section className="register">
      <h1 className="register__title">Вход по логину/паролю сотрудников *</h1>

      <form onSubmit={formSubmitHandler} className="register__form">
        <div className="register__formgroup">
          <label htmlFor="email" className="register__formlabel">
            Персональный логин сотрудника *
          </label>

          <input
            type="email"
            className="register__forminput"
            placeholder="Персональный логин сотрудника *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="register__formgroup">
          <label htmlFor="username" className="register__formlabel">
            Пароль сотрудника *
          </label>

          <input
            type="password"
            className="register__forminput"
            placeholder="Пароль сотрудника *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="register__btn">
          Войти
        </button>
      </form>

      <div className="register__footer">
        Вы забыли свой пароль?  

        <Link to=""> Восстановить пароль</Link>
      </div>
    </section>
  );
};

export default Login;
