import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { signIn } from "./signInSlice";
import {
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Link
} from "@material-ui/core";
import StyledButton from "../../components/StyledButton";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as EyeOffIcon } from "../../assets/icons/eyeoff.svg";
import css from "./SignIn.module.css";

function SignInForm() {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const onTogglePasswordVisibility = () =>
    setIsShowPassword(prevState => !prevState);

  return (
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
        <Form noValidate className={css.form}>
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
              className={css.rememberLabel}
              control={<Checkbox value="checkedB" />}
              label="Remember me"
            />
            <Link component={RouterLink} className={css.forgotLink} to="/reset">
              Forgot password?
            </Link>
          </div>
          <StyledButton
            type="submit"
            variant="contained"
            className={css.signInButton}
          >
            Sign In
          </StyledButton>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
