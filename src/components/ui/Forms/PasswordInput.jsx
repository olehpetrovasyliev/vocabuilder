import { Field } from "formik";
import { useState, FC } from "react";

const PasswordInput = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <Field
        type={isShown ? "text" : "password"}
        id="password"
        name="password"
      />
      <button type="button" onClick={() => setIsShown((prew) => !prew)}>
        toggle
      </button>
    </>
  );
};

export default PasswordInput;
