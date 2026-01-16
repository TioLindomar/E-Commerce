import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggler from "../../../components/ThemeToggler";
import styles from "../Auth.module.css";
import GoogleBlack from "../../../assets/google-black.svg";
import GoogleWhite from "../../../assets/google-white.svg";
import { useTheme } from "../../../contexts/theme/ThemeContext";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { loginRequest } from "../../../services/auth";
import { notify } from "../../../utils/toasts";
import { AxiosError } from "axios";
import Throbber from "../../../components/Throbber";
import { clsx } from "clsx";
import { sanitizeEmail } from "../../../utils/formatters";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [serverError, setServerError] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);

  const togglePassword = () => {
    setShowPassword(!showPassword);
    passwordRef.current?.focus();
  };

  const navigate = useNavigate();
  const { theme } = useTheme();
  const { login } = useAuth();

  const emailError = (attemptedSubmit && !email) || serverError;
  const passwordError = (attemptedSubmit && !password) || serverError;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);
    setServerError(false);

    if (!email || !password) {
      notify.error("Preencha todos os campos");
      return;
    }
    try {
      setLoading(true);
      const cleanEmail = sanitizeEmail(email);
      const data = await loginRequest(cleanEmail, password);

      // 2. Avisa o contexto (AuthProvider)
      login(data.user, data.token);

      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        setServerError(true);
        notify.error(error.response.data.error);
      } else {
        notify.error("Erro desconhecido ao tentar cadastrar.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Throbber />}
      <form onSubmit={handleLogin} className={styles.container}>
        <ThemeToggler />

        <div>
          <h1 className={styles.title}>LOGIN</h1>
        </div>

        {/* Input wrapper */}
        <div className={styles.inputsWrapper}>
          {/* Campo de e-mail */}
          <div className={clsx("input-wrapper", emailError && "input-error")}>
            <span className="material-symbols-outlined input-icon icon-left">
              mail
            </span>
            <input
              type="email"
              className="input has-left-icon"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
                setServerError(false);
              }}
            />
          </div>

          {/* Campo de senha e link para "Esqueci minha senha" */}
          <div className={styles.passwordArea}>
            <div
              className={clsx("input-wrapper", passwordError && "input-error")}
            >
              <span className="material-symbols-outlined input-icon icon-left">
                lock
              </span>
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                className="input has-left-icon has-right-icon"
                placeholder="Senha"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setServerError(false);
                }}
              />

              <span
                className="material-symbols-outlined input-icon icon-right"
                onClick={togglePassword}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </div>
            {/* Esqueci minha senha */}
            <Link to="" className={styles.forgotPassword}>
              Esqueci minha senha
            </Link>
          </div>
        </div>

        {/* Buttons wrapper */}
        <div className={styles.buttonsWrapper}>
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>

          <button className="btn btn-secondary">
            <img
              src={theme === "dark" ? GoogleWhite : GoogleBlack}
              alt="Google logo"
            />
            Entrar com Google
          </button>
          <Link to="/Register" className={styles.createAccount}>
            Criar conta
          </Link>
        </div>
      </form>
    </>
  );
}
