import React from "react";

import css from "./WelcomeText.module.css";

function WelcomeText() {
  return (
    <h1 className={css.welcomeText}>
      Welcome back, <strong>Clement Terrence</strong>
    </h1>
  );
}

export default WelcomeText;
