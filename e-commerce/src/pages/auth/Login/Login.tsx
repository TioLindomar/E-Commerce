import { useState } from "react";
import ThemeToggler from "../../../components/ThemeToggler";
import styles from "../Login/Login.module.css";
import GoogleColor from "../../../assets/google-color.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.container}>
      <ThemeToggler />

      <h1 className={styles.title}>LOGIN</h1>
      {/* Input wrapper */}
      <div className={styles.inputWrapper}>
        {/* Campo de e-mail */}
        <div className="input-wrapper">
          <span className="material-symbols-outlined input-icon icon-left">
            mail
          </span>
          <input
            type="text"
            className="input has-left-icon"
            placeholder="E-mail"
          />
        </div>

        {/* Campo de senha e link para "Esqueci minha senha" */}
        <div className={styles.passwordArea}>
          <div className="input-wrapper">
            <span className="material-symbols-outlined input-icon icon-left">
              lock
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="input has-left-icon has-right-icon"
              placeholder="******"
            />

            <span
              className="material-symbols-outlined input-icon icon-right"
              onClick={() => setShowPassword((prev) => !prev)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
          {/* Esqueci minha senha */}
          <a href="#" className={styles.forgotPassword}>
            Esqueci minha senha
          </a>
        </div>
      </div>

      {/* Buttons wrapper */}
      <div className={styles.buttonsWrapper}>
        <button className="btn btn-primary">Entrar</button>

        <button className="btn btn-secondary">
          <img src={GoogleColor} alt="Google logo" />
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
