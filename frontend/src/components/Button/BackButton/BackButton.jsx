import style from "./styles/backButton.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
//Assets
import arrow from "../../../assets/images/Commits/back-arrow.svg";

export default function BackButton() {
  const navigate = useNavigate();

  function handleBack(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className={style.backButton} onClick={(e) => handleBack(e)}>
      <img src={arrow} alt="flecha-volver" />
      <p>Volver</p>
    </div>
  );
}
