// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bem-vindo ao E-commerce!</h1>
      <p>Esta é a página inicial do projeto.</p>
      <button onClick={handleClick} className="btn btn-primary">Ir para Login</button>

    </div>
  );
}
