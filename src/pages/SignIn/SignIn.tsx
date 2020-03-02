import React from "react";

import css from "./SignIn.module.css";
import signInImg from "../../assets/images/signin.jpg";

function SignIn() {
  return (
    <div className={css.root}>
      <img className={css.signInImg} src={signInImg} alt="sign-in" />
      <div className={css.wrapper2}>
        <form className={css.form}>
          <h1>Sign in</h1>
          <input type="email" />
          <input type="password" />
          <div>
            <input type="checkbox" />
            <a href="/">Forgot password?</a>
          </div>
          <button>Sign in</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
