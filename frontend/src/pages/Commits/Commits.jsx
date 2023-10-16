import style from "./styles/commits.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { getCommits } from "../../redux/actions/commits";
//Assets
import github from "../../assets/images/Home/github.svg";
import arrow from "../../assets/images/Commits/back-arrow.svg";
//Components
import CommitCard from "../../components/Card/CommitCard/CommitCard";
import Loader from "../../components/Loader/Loader";
import BackButton from "../../components/Button/BackButton/BackButton";

export default function Commits() {
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const commits = useSelector((state) => state.commitsReducer.commits);

  useEffect(() => {
    dispatch(getCommits({ user: params.user, repo: params.repository })).then(
      function (res) {
        if (res && res.name === "AxiosError") {
          setIsLoading(false);
          setErrors(true);
        } else {
          setIsLoading(false);
        }
      }
    );
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (errors) {
    return (
      <div className={style.container}>
        <BackButton />
        <div className={style.header}>
          <img src={github} alt="github-logo" />
          <div className={style.textHeader}>
            <h1>Ups! Hubo un error</h1>
            <p>
              El repositorio <b>{params.repository}</b> perteneciente al usuario{" "}
              <b>{params.user}</b> no ha sido encontrado
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <BackButton />
      <div className={style.header}>
        <img src={github} alt="github-logo" />
        <div className={style.textHeader}>
          <h1>{params.repository}</h1>
          <p>
            A continuación la lista de los commits realizados en el repositorio:
          </p>
        </div>
      </div>
      <div className={style.commitCont}>
        {commits[0] !== undefined &&
          commits.map((commit) => (
            <CommitCard
              key={commit.sha}
              name={commit.commit.message}
              url={commit.html_url}
              user={commit.commit.author.name}
            />
          ))}
      </div>
    </div>
  );
}
