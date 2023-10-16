import style from "./styles/commits.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//Actions
import { getCommits } from "../../redux/actions/commits";
//Assets
import github from "../../assets/images/Home/github.svg";
//Components
import CommitCard from "../../components/Card/CommitCard/CommitCard";

export default function Commits() {
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const commits = useSelector((state) => state.commitsReducer.commits);

  useEffect(() => {
    dispatch(getCommits({ user: params.user, repo: params.repository })).then(
      function (res) {
        if (res.status === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setErrors(true);
        }
      }
    );
  }, []);

  /*if(isLoading) {
    return ()
  }*/

  /*if(errors) {
    return ()
  }
   */

  return (
    <div className={style.container}>
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
        {commits.map((commit) => (
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
