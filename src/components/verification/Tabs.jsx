import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("credentials");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-primary text-white rounded-t-md p-4">
      <ul className="flex">
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "credentials" ? "bg-tertiary" : ""
          }`}
          onClick={() => handleTabClick("credentials")}
        >
          Credentials
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "recipients" ? "bg-tertiary" : ""
          }`}
          onClick={() => handleTabClick("recipients")}
        >
          Recipients
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "faqs" ? "bg-tertiary" : ""
          }`}
          onClick={() => handleTabClick("faqs")}
        >
          FAQs
        </li>
        <li
          className={`cursor-pointer px-4 py-2 ${
            activeTab === "userAgreement" ? "bg-tertiary" : ""
          }`}
          onClick={() => handleTabClick("userAgreement")}
        >
          User Agreement
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
