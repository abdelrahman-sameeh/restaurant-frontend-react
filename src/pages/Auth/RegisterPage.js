import React from "react";
import RegisterContainer from "../../components/Auth/RegisterContainer";
import CurrentLocation from "../../components/Utility/CurrentLocation";

const RegisterPage = () => {
  return (
    <div className="container">
      <CurrentLocation current={'تسجيل حساب جديد'} />
      <RegisterContainer />
    </div>
  );
};

export default RegisterPage;
