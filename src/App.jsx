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
import { selectIsModalAddOpen } from "./helpers/redux/modal/modalSelectors";
import { createPortal } from "react-dom";
import AddWordModal from "./components/ui/Modals/AddWordModal";
import { useSelector } from "react-redux";

function App() {
  const isModalAddOpen = useSelector(selectIsModalAddOpen);

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
            index
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
    </>
  );
}

export default App;
