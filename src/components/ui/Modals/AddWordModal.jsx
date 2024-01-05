import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Modal from "./ModalComponent/ModalComponent";
import CategorySelect from "../../Words/Dashboard/CategorySelect";

const englishPattern = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const ukrainianPattern = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

const validationSchema = yup.object().shape({
  enString: yup.string().matches(englishPattern, "Invalid English string"),
  uaString: yup.string().matches(ukrainianPattern, "Invalid Ukrainian string"),
});
const initialValues = {
  en: "",
  ua: "",
};
const AddWordModal = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Modal>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <CategorySelect />

          <label htmlFor="en">
            <Field type="text" id="en" name="en" />
          </label>
          <label htmlFor="ua">
            <Field type="text" id="ua" name="ua" />
          </label>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddWordModal;
