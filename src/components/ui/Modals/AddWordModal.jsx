import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import Modal from "./ModalComponent/ModalComponent";
import CategorySelect from "../../Words/Dashboard/CategorySelect";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAddWord } from "../../../helpers/redux/modal/modalSlice";
import { selectCurrentCategory } from "../../../helpers/redux/words/wordsSelectors";
import { setCategory } from "../../../helpers/redux/words/wordsSlice";
import {
  AddWordThunk,
  CreateWordThunk,
} from "../../../helpers/redux/words/wordsOperations";

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
  const dispatch = useDispatch();
  const category = useSelector(selectCurrentCategory);
  const handleClose = () => {
    dispatch(closeModalAddWord());
  };
  const handleSubmit = (values) => {
    category === "verb"
      ? console.log({ ...values, category: category, isIrregular: true })
      : dispatch(CreateWordThunk({ ...values, category: category }));
    dispatch(closeModalAddWord());
  };
  return (
    <Modal>
      <h2>Add word</h2>
      <p>
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.
      </p>
      <CategorySelect />
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="en">
            <Field type="text" id="en" name="en" />
          </label>
          <label htmlFor="ua">
            <Field type="text" id="ua" name="ua" />
          </label>
          <button type="submit">Add word</button>
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddWordModal;
