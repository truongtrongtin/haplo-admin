import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { signIn } from "./signInSlice";
import {
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "../../assets/icons/eyeoff.svg";
import css from "./SignIn.module.css";
import girl from "../../assets/images/girl.jpg";
import logo from "../../assets/images/logo-northgate.png";

function SignIn() {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onTogglePasswordVisibility = () =>
    setIsShowPassword(prevState => !prevState);

  return (
    <div className={css.root}>
      <div className={css.leftWrapper}>
        <img className={css.signInImg} src={girl} alt="sign-in" />
        <img className={css.logo} src={logo} alt="logo" />
      </div>
      <div className={css.rightWrapper}>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .label("Email")
              .email("Invalid email address")
              .required(),
            password: Yup.string()
              .label("Password")
              .required()
          })}
          onSubmit={({ email, password }) => {
            dispatch(signIn({ email, password }));
          }}
        >
          {({ errors, touched }) => (
            <Form noValidate>
              <h1 className={css.title}>Sign in</h1>
              <Field
                as={TextField}
                className={css.marginTop}
                fullWidth
                name="email"
                type="email"
                label="Email ID"
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <Field
                as={TextField}
                className={css.marginTop}
                fullWidth
                name="password"
                label="Password"
                error={errors.password && touched.password}
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
                type={isShowPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onTogglePasswordVisibility}
                      >
                        {isShowPassword ? <EyeIcon /> : <EyeOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className={css.rememberWrapper}>
                <FormControlLabel
                  control={<Checkbox value="checkedB" color="primary" />}
                  label="Primary"
                />
                <Link to="/forgot">Forgot password?</Link>
              </div>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                classes={{ root: css.button, label: css.buttonLabel }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignIn;
