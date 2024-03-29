import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogInPage from "./pages/LogIn/Login";
import SignUpPage from "./pages/SignUp/Signup";
import Header from "./components/Header/header";
import Filters from "./components/Words/Dashboard/Filters";
import { Route, Routes } from "react-router";
import { PublicRoute } from "./hoc/PublicRoute";
import { PrivateRoute } from "./hoc/PrivateRoute";
import Dictionary from "./pages/Dictionary/dictionary";
import Recommend from "./pages/Recommend/Recommend";
import Training from "./pages/Training/Training";
import {
  selectIsModalAddOpen,
  selectIsModalEditOpen,
  selectIsModalWellDoneOpen,
} from "./helpers/redux/modal/modalSelectors";
import { createPortal } from "react-dom";
import AddWordModal from "./components/ui/Modals/AddWordModal";
import { useSelector } from "react-redux";
import EditWordModal from "./components/ui/Modals/EditWordModal";
import WellDoneModal from "./components/ui/Modals/WellDoneModal";

function App() {
  const isModalAddOpen = useSelector(selectIsModalAddOpen);
  const isModalEditOpen = useSelector(selectIsModalEditOpen);
  const isModalWellDoneOpen = useSelector(selectIsModalWellDoneOpen);

  return (
    <>
      <Routes>
        <Route path="/" Component={Header}>
          {/* <Route index /> */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route
            path="/dictionary"
            element={
              <PrivateRoute>
                <Dictionary />
              </PrivateRoute>
            }
          />
          <Route
            path="/recommend"
            element={
              <PrivateRoute>
                <Recommend />
              </PrivateRoute>
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute>
                <Training />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>

      {isModalAddOpen && createPortal(<AddWordModal />, document.body)}
      {isModalEditOpen && createPortal(<EditWordModal />, document.body)}
      {isModalWellDoneOpen && createPortal(<WellDoneModal />, document.body)}
    </>
  );
}

export default App;
