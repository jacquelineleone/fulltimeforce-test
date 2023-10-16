import style from "./styles/home.module.css";
import React from "react";
import { useNavigate } from "react-router-dom";
//Assets
import github from "../../assets/images/Home/github.svg";
//Components
import FormInput from "../../components/Inputs/FormInput/FormInput";
//Utils
import { useForm } from "../../hooks/useForm";
import { checkString } from "../../utils/regexTest";

export default function Home() {
  const navigate = useNavigate();

  const initialForm = {
    user: "",
    repo: "",
  };

  const validateForm = (form) => {
    let errors = {};
    if (!checkString(form.user)) {
      errors.user = "El campo está vacío";
    }
    if (!checkString(form.repo)) {
      errors.repo = "El campo está vacío";
    }

    return errors;
  };

  const { form, send, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validateForm
  );

  const allowContinue = Object.keys(errors).length === 0;

  const handleSearch = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (allowContinue) {
      navigate(`/commits/${form.user}/${form.repo}`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <img src={github} alt="github-logo" />
        <div className={style.textHeader}>
          <h1>Accede a todos tus commits.</h1>
          <p>
            Solo necesitas completar los campos con tu usuario y el nombre del
            repositorio para ello.
            <br />
            (Recorda que el repo debe ser publico)
          </p>
        </div>
      </div>
      <form className={style.form} onSubmit={(e) => handleSearch(e)}>
        <section>
          <FormInput
            inputName={"user"}
            inputValue={form.user}
            inputPlaceholder={"Escribi tu nombre de usuario"}
            onChangeFunction={handleChange}
          />
          {send && errors.user && <p className={style.error}>{errors.user}</p>}
        </section>
        <section>
          <FormInput
            inputName={"repo"}
            inputValue={form.repo}
            inputPlaceholder={"Escribi el nombre de tu repositorio"}
            onChangeFunction={handleChange}
          />
          {send && errors.repo && <p className={style.error}>{errors.repo}</p>}
        </section>
        <div className={style.buttonCont}>
          <button className={style.button} onClick={(e) => handleSearch(e)}>
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
