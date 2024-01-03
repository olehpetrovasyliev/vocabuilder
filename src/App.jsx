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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" Component={Header}>
        <Route index />
        <PublicRoute path="/login" Component={LogInPage} />
        <PublicRoute path="/signup" Component={SignUpPage} />
        <PrivateRoute path="/dictionary" Component={Dictionary} />
        <PrivateRoute path="/recommend" Component={Recommend} />
        <PrivateRoute path="/training" Component={Training} />
      </Route>
    </Routes>
  );
}

export default App;
