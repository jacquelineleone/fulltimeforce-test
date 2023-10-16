import style from "./styles/loader.module.css";
import React from "react";

export default function Loader() {
  return (
    <div className={style.overlay}>
      <span className={style.loader}></span>
    </div>
  );
}
