import React, {useState} from "react";
import LoginRegisterForm from "../components/organisms/LoginRegisterForm";

const Index = () => {
  const [loginRegister, setLoginRegister] = useState("login");

  return (
    <div>
      <LoginRegisterForm />
    </div>
  );
};

export default Index;
