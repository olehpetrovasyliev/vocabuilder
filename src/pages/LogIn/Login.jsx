import React from "react";
import LoginForm from "../../components/ui/Forms/LoginForm";

const LogInPage = () => {
  return (
    <main>
      <section>
        <div>
          <div className="wrapper">
            <h1>Login</h1>
            <p>
              Please enter your login details to continue using our service:
            </p>
            <LoginForm />
          </div>
          <img src="" alt="" />
          <span>Word · Translation · Grammar · Progress</span>
        </div>
      </section>
    </main>
  );
};

export default LogInPage;
