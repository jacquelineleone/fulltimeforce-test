import style from "./styles/formInput.module.css";
import React from "react";

export default function FormInput({
  inputName,
  inputValue,
  inputPlaceholder,
  onChangeFunction,
}) {
  return (
    <input
      type="text"
      name={inputName}
      value={inputValue}
      placeholder={inputPlaceholder}
      onChange={(e) => onChangeFunction(e)}
      className={style.formInput}
    />
  );
}
