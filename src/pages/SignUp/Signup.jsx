import React from "react";
import SignUpForm from "../../components/ui/Forms/SignUpForm";

const SignUpPage = () => {
  return (
    <main>
      <section>
        <div className="wrapper">
          <div>
            {" "}
            <h1>Register</h1>
            <p>
              To start using our services, please fill out the registration form
              below. All fields are mandatory:
            </p>
            <SignUpForm />
          </div>
          <img src="" alt="" />
          <span>Word · Translation · Grammar · Progress</span>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
