import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import PasswordInput from "./PasswordInput";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(255),
  email: Yup.string()
    .required()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
  password: Yup.string()
    .required()
    .min(8)
    .matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/),
});

const SignUpForm = () => {
  const handleSubmit = (values, actions) => {
    console.log("Form values submitted:", values);
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="username">Username:</label>
          <Field type="username" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Username:</label>
          <Field type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <PasswordInput />
        </div>
        <button type="submit">Submit</button>
        <Link to="/login" />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
