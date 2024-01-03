import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PasswordInput from "./PasswordInput";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../../../helpers/redux/auth/authOperations";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "Password should be 7 symbols"
    )
    .required("Password is required"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    console.log("Form values submitted:", values);
    dispatch(signUpThunk(values));
    navigate("/dictionary");
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
          <label htmlFor="name">Username:</label>
          <Field type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <PasswordInput />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Submit</button>
        <Link to="/login">Login</Link>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
