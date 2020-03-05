import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";
import { resetPassword } from "../../api";

function ResetPassword() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Recover account</h1>
      <span>Enter your registered email ID to reset your password</span>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required")
        })}
        onSubmit={({ email }) => resetPassword(email)}
      >
        {({ errors }) => (
          <Form noValidate>
            <Field
              as={TextField}
              required
              autoFocus
              name="email"
              label="Email"
              placeholder="Enter your email"
              InputLabelProps={{ shrink: true }}
              type="email"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <Button color="primary" fullWidth variant="contained" type="submit">
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ResetPassword;
