import style from "./styles/home.module.css";
import React from "react";
//Assets
import github from "../../assets/images/Home/github.svg";
//Components
import FormInput from "../../components/Inputs/FormInput/FormInput";
//Hooks
import { useForm } from "../../hooks/useForm";
import { checkString } from "../../utils/regexTest";

export default function Home() {
  const initialForm = {
    user: "",
    repo: "",
  };

  const validateForm = (form) => {
    let errors = {}
    if (!checkString(form.user)) {
      errors.user = "El campo está vacío"
    }
    if (!checkString(form.repo)) {
      errors.repo = "El campo está vacío"
    }
  };

  const { form, response, send, errors, handleChange } = useForm(
    initialForm,
    validateForm
  );

  return (
    <div>
      <div className={style.header}>
        <img src={github} alt="github-logo" />
        <div className={style.textHeader}>
          <h1>Accede a todos tus commits.</h1>
          <p>
            Solo necesitas completar los campos con tu usuario y el nombre del repositorio para ello.
            <br /> 
            (Recorda que el repo debe ser publico)
          </p>
        </div>
      </div>
      <form className={style.form}>
        <FormInput
          inputName={"user"}
          inputValue={form.user}
          inputPlaceholder={"Escribi tu nombre de usuario"}
          onChangeFunction={handleChange}
        />
        <FormInput
          inputName={"repo"}
          inputValue={form.repo}
          inputPlaceholder={"Escribi el nombre de tu repositorio"}
          onChangeFunction={handleChange}
        />
        <div>
          <button className={style.button}>Ver</button>
        </div>
      </form>
    </div>
  );
}
