import style from "./styles/commitCard.module.css";
import React from "react";

export default function CommitCard({ name, url, user }) {
  const handleNavigate = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>{name}</h3>
        <button onClick={(e) => handleNavigate(e)}>Ver en Github</button>
      </div>
      <div className={style.user}>
        <p>Commited by {user}</p>
      </div>
    </div>
  );
}
