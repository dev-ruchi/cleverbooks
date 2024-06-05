import React from "react";

const KeyProblemsSection = () => {
  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Key Problems Solved by CleverBooks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Problem 1</h3>
              <p>Description of how CleverBooks solves Problem 1.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Problem 2</h3>
              <p>Description of how CleverBooks solves Problem 2.</p>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Problem 3</h3>
              <p>Description of how CleverBooks solves Problem 3.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyProblemsSection;
