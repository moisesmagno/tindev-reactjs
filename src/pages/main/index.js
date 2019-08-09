import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./styles.css";

import Logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import dislike from "../../assets/dislike.svg";

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(id) {
    console.log(id);
  }

  async function handleDislike(id) {
    console.log(id);
  }

  return (
    <div className="main-container">
      <img src={Logo} alt="Logo" />
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt="" />
            <footer>
              <strong>{user.name}</strong>
              <p>{!user.bio ? "-- Sem Descrição --" : user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={() => handleDislike(user._id)}>
                <img src={dislike} alt="" />
              </button>
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
