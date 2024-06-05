import React from "react";
import { FaCheckCircle, FaChartLine, FaUserCheck } from 'react-icons/fa';

const KeyMatricsSection = () => {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose CleverBooks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow">
              <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p>Ensuring accurate and reliable book management.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p>Helping your collection grow efficiently.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow">
              <FaUserCheck className="text-4xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Friendly</h3>
              <p>Easy to use interface for all users.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyMatricsSection;
