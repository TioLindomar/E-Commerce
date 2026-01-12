import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao E-commerce!</h1>
      <p>Esta é a página inicial do projeto.</p>
      <button className="btn-primary"> Botão primário</button>
      <button className="btn-secondary"> Botão secundário</button>

      <div className="input-wrapper">
        <span className="material-icons">lock</span>
        <input
          type={showPassword ? "text" : "password"}
          className="input"
          placeholder="Senha"
        />

        <span
          className="material-icons"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </div>
    </div>
  );
}
