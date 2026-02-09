import { useState } from "react";
import RegistrationInfo from "../components/RegistrationInfo";

function RegistrationPage() {
  return (
    <>
      <h2 className = "registration-page-header">Sign Up To Receive Promotions!</h2>
      <p className = "registration-page-phrase">Enter your name and email below to receive promotions.</p>
      <RegistrationInfo />
    </>
  );
}

export default RegistrationPage;
