import React, { useState } from "react";
import Tabs from "../components/verification/Tabs";
import RightContent from "../components/verification/RightContent";

const VerificationPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/5 bg-primary text-white p-6">
        <Tabs activeTab={activeTab} handleTabClick={handleTabClick} />
      </div>
      <div className="w-4/5 p-6">
        <RightContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default VerificationPage;
