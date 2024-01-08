import { Field, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Modal from "./ModalComponent/ModalComponent";
import { useSelector } from "react-redux";
import { selectCurrentWord } from "../../../helpers/redux/words/wordsSelectors";

const englishPattern = /\b[A-Za-z'-]+(?:\s+[A-Za-z'-]+)*\b/;
const ukrainianPattern = /^(?![A-Za-z])[А-ЯІЄЇҐґа-яієїʼ\s]+$/u;

const validationSchema = yup.object().shape({
  enString: yup.string().matches(englishPattern, "Invalid English string"),
  uaString: yup.string().matches(ukrainianPattern, "Invalid Ukrainian string"),
});

const EditWordModal = () => {
  const currentWord = useSelector(selectCurrentWord);
  const initialValues = {
    en: currentWord.en,
    ua: currentWord.ua,
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal>
      <Formik>
        <Form
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <label htmlFor="en">
            <Field type="text" id="en" name="en" />
            <span>hello world</span>
          </label>
          <label htmlFor="ua">
            <Field type="text" id="ua" name="ua" />
            <span>hello world</span>
          </label>
          <button></button>
          <button></button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditWordModal;
