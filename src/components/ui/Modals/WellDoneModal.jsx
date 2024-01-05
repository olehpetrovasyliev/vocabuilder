import { Field, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const WellDoneModal = () => {
  const arr = [1, 2, 3];
  return (
    <Modal>
      <h2>Well done</h2>
      <div>
        <p>Correct answers</p>
        <ul>
          {array.map((el) => (
            <li>{el + 1}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Mistakes</p>
        <ul>
          {array.map((el) => (
            <li>{el + 1} </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

export default WellDoneModal;
