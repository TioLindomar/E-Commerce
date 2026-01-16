import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import ThemeToggler from "../../../components/ThemeToggler";
import styles from "../Auth.module.css";
import GoogleBlack from "../../../assets/google-black.svg";
import GoogleWhite from "../../../assets/google-white.svg";
import { useTheme } from "../../../contexts/theme/ThemeContext";
import { useAuth } from "../../../contexts/auth/AuthContext";
import { registerRequest } from "../../../services/auth";
import { sanitizeEmail, sanitizeString } from "../../../utils/formatters";
import { notify } from "../../../utils/toasts";
import { AxiosError } from "axios";
import Throbber from "../../../components/Throbber";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatedPasswordRef = useRef<HTMLInputElement>(null);

  // Lógica de validação visual por campo
  const nameError = attemptedSubmit && !name.trim();
  const emailError = attemptedSubmit && (!email.trim() || !email.includes("@"));
  const passwordError =
    (attemptedSubmit && !password) ||
    (password.length > 0 && password.length < 6);
  const repeatedPassError = attemptedSubmit && !repeatedPassword;
  const matchError =
    password !== repeatedPassword &&
    (repeatedPassword.length > 0 || attemptedSubmit);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { theme } = useTheme();

  // * Funções de mostrar e esconder senhas
  const togglePassword = () => {
    setShowPassword(!showPassword);
    passwordRef.current?.focus();
  };

  const toggleRepeatedPassword = () => {
    setShowRepeatedPassword(!showRepeatedPassword);
    repeatedPasswordRef.current?.focus();
  };

  // * Mensagens de erro da senha
  const validationErrors: string[] = [];

  if (password.length > 0 && password.length < 6) {
    validationErrors.push("A senha deve ter no mínimo 6 caracteres");
  }

  if (password && repeatedPassword && password !== repeatedPassword) {
    validationErrors.push("As senhas não são iguais");
  }

  const formattedErrors = validationErrors.join(". ");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    setAttemptedSubmit(true); // Ativa as bordas vermelhas nos campos vazios

    // Validações de bloqueio
    if (!name || !email || !password || !repeatedPassword) {
      notify.error("Preencha todos os campos");
      return;
    }

    if (password !== repeatedPassword) {
      notify.error("As senhas não são iguais");
      return;
    }

    try {
      setLoading(true);

      const cleanName = sanitizeString(name);
      const cleanEmail = sanitizeEmail(email);
      const data = await registerRequest(cleanName, cleanEmail, password);

      setTimeout(() => 5000);

      notify.success("Conta criada com sucesso!");
      login(data.user, data.token); // Atenção: alterado para data.user
      navigate("/home");
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        notify.error(error.response.data.error);
      } else {
        notify.error("Erro ao conectar com o servidor.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Throbber />}
      <form onSubmit={handleRegister} className={styles.container}>
        <ThemeToggler />

        <div>
          <h1 className={styles.title}>CADASTRO</h1>
          {validationErrors && (
            <p className="error-message"> {formattedErrors}</p>
          )}
        </div>

        {/* Input wrapper */}
        <div className={styles.inputsWrapper}>
          {/* Campo de nome de usuário */}
          <div className={clsx("input-wrapper", nameError && "input-error")}>
            <span className="material-symbols-outlined input-icon icon-left">
              person
            </span>
            <input
              type="text"
              className="input has-left-icon"
              placeholder="Nome de usuário"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Campo de e-mail */}
          <div className={clsx("input-wrapper", emailError && "input-error")}>
            <span className="material-symbols-outlined input-icon icon-left">
              mail
            </span>
            <input
              type="email"
              className="input has-left-icon"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo de senha */}
          <div
            className={clsx("input-wrapper", passwordError && "input-error")}
          >
            <span className="material-symbols-outlined input-icon icon-left">
              lock
            </span>
            <input
              type={showPassword ? "text" : "password"}
              className="input has-left-icon has-right-icon"
              placeholder="Senha"
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            <span
              className="material-symbols-outlined input-icon icon-right"
              onClick={togglePassword}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </div>

          {/* Campo de repetir senha */}
          <div
            className={clsx(
              "input-wrapper",
              matchError || (repeatedPassError && "input-error")
            )}
          >
            <span className="material-symbols-outlined input-icon icon-left">
              lock
            </span>
            <input
              type={showRepeatedPassword ? "text" : "password"}
              className="input has-left-icon has-right-icon"
              ref={repeatedPasswordRef}
              placeholder="Repita a senha"
              onChange={(e) => setRepeatedPassword(e.target.value)}
            />
            <span
              className="material-symbols-outlined input-icon icon-right"
              onClick={toggleRepeatedPassword}
              onMouseDown={(e) => e.preventDefault()}
            >
              {showRepeatedPassword ? "visibility_off" : "visibility"}
            </span>
          </div>
        </div>

        {/* Buttons wrapper */}
        <div className={styles.buttonsWrapper}>
          <button type="submit" className={"btn btn-primary"}>
            Criar conta
          </button>

          <button className="btn btn-secondary">
            <img
              src={theme === "dark" ? GoogleWhite : GoogleBlack}
              alt="Google logo"
            />
            Criar com o Google
          </button>
          <Link to="/login" className={styles.hasAccount}>
            Já tenho uma conta
          </Link>
        </div>
      </form>
    </>
  );
}
