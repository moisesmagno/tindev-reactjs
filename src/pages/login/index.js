import React, { useState } from "react";

import "./styles.css";

import api from "../../services/api";

import Logo from "../../assets/logo.svg";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={Logo} alt="Logo" />
        <input
          type="text"
          placeholder="Digite seu usuário do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
