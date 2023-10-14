import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Components
import Home from "../pages/Home/Home";
import Commits from "../pages/Commits/Commits";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/commits/:repository" Component={Commits} />
      </Routes>
    </BrowserRouter>
  );
}
