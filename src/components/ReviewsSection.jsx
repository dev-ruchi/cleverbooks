import React from "react";

const ReviewsSection = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded shadow">
              <p>"CleverBooks has transformed our book management process!"</p>
              <h4 className="mt-4 font-semibold">John Doe</h4>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <p>"An amazing tool for managing our library."</p>
              <h4 className="mt-4 font-semibold">Jane Smith</h4>
            </div>
            <div className="p-6 bg-white rounded shadow">
              <p>"Highly recommend CleverBooks for all book lovers."</p>
              <h4 className="mt-4 font-semibold">Emily Johnson</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
