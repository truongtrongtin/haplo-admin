import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/rootReducer";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";

import css from "./ResetPassword.module.css";
import { resetPassword } from "./resetPasswordSlice";
import StyledButton from "../../components/StyledButton";
import HoverIcon from "../../components/HoverIcon";
import { ReactComponent as BackArrowGreyIcon } from "../../assets/icons/back-arrow-grey.svg";
import { ReactComponent as BackArrowBlackIcon } from "../../assets/icons/back-arrow-black.svg";

function ResetForm() {
  const [resetEmail, setResetEmail] = useState("");
  const { success } = useSelector((state: RootState) => state.resetPassword);
  const dispatch = useDispatch<any>();

  return (
    <div>
      {!success ? (
        <Formik
          initialValues={{ email: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .label("Email")
              .email("Invalid email address")
              .required()
          })}
          onSubmit={({ email }) => {
            setResetEmail(email);
            dispatch(resetPassword(resetEmail));
          }}
        >
          {({ errors }) => (
            <Form noValidate className={css.form}>
              <HoverIcon
                component={Link}
                to="/signin"
                className={css.backIcon}
                normalIcon={BackArrowGreyIcon}
                hoverIcon={BackArrowBlackIcon}
              />
              <h1 className={css.header}>Recover account</h1>
              <p className={css.instruction}>
                Enter your registered email ID to reset your password
              </p>
              <Field
                as={TextField}
                className={`${css.input} ${css.hide}`}
                autoFocus
                name="email"
                label="Email ID"
                type="email"
                fullWidth
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
              <StyledButton
                variant="contained"
                type="submit"
                className={css.submitButton}
              >
                Send
              </StyledButton>
            </Form>
          )}
        </Formik>
      ) : (
        <div className={`${css.resetSuccess}`}>
          <HoverIcon
            component={Link}
            to="/signin"
            className={css.backIcon}
            normalIcon={BackArrowGreyIcon}
            hoverIcon={BackArrowBlackIcon}
          />
          <h1 className={css.header}>Recover account</h1>
          <p className={css.instruction}>
            Link to reset your password has been sent to {resetEmail}. Change
            your password and sign in again.
          </p>
          <StyledButton
            variant="contained"
            type="submit"
            className={css.submitButton}
          >
            Back to Sign in
          </StyledButton>
        </div>
      )}
    </div>
  );
}

export default ResetForm;
