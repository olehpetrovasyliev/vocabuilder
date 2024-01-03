import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentWordProgress } from "../../../helpers/redux/words/wordsSelectors";

const ProgressBar = () => {
  const progress = useSelector(selectCurrentWordProgress);
  return <progress value={progress} />;
};

export default ProgressBar;
