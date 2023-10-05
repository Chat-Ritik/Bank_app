import React from "react";
import Credentials from "./Components/Credentials";
import Recipients from "./Components/Recipients";
import FAQs from "./Components/FAQs";
import UserAgreement from "./Components/UserAgreement";

const RightContent = ({ activeTab }) => {
  return (
    <div className="bg-white rounded-b-md p-4">
      {activeTab === "credentials" && <Credentials />}
      {activeTab === "recipients" && <Recipients />}
      {activeTab === "faqs" && <FAQs />}
      {activeTab === "userAgreement" && <UserAgreement />}
    </div>
  );
};

export default RightContent;
