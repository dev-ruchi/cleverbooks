import React from "react";
import { useState } from "react";

const ProblemTargetSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Explore Our Features</h2>
          <div className="flex justify-center mb-10">
            <button
              className={`px-4 py-2 ${
                activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Feature 1
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              Feature 2
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "tab3" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Feature 3
            </button>
          </div>
          {activeTab === "tab1" && (
            <div className="p-6 bg-gray-100 rounded shadow">
              Details about Feature 1...
            </div>
          )}
          {activeTab === "tab2" && (
            <div className="p-6 bg-gray-100 rounded shadow">
              Details about Feature 2...
            </div>
          )}
          {activeTab === "tab3" && (
            <div className="p-6 bg-gray-100 rounded shadow">
              Details about Feature 3...
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProblemTargetSection;
