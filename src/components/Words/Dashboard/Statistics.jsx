import React, { useEffect } from "react";
import { selectStats } from "../../../helpers/redux/words/wordsSelectors";
import { useDispatch, useSelector } from "react-redux";
import { GetStatsThunk } from "../../../helpers/redux/words/wordsOperations";
import { useLocation } from "react-router";
import AddWordBtn from "../../ui/Buttons/AddWordBtn";
import { Link } from "react-router-dom";

const Statistics = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const stats = useSelector(selectStats);
  useEffect(() => {
    dispatch(GetStatsThunk());
  }, [dispatch]);
  return (
    <div>
      <p>ToStudy:{stats.totalCount}</p>
      <AddWordBtn />
      {location.pathname === "/dictionary" && <Link to="/training"></Link>}
    </div>
  );
};

export default Statistics;
