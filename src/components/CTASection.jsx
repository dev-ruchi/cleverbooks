import React from "react";

const CTASection = () => {
  return (
    <div>
      <section id="cta" className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Grow Faster Than You Think
          </h2>
          <p className="text-xl mb-8">
            Join CleverBooks today and start managing your books smarter.
          </p>
          <a href="#" className="bg-orange-500 text-white py-4 px-12 rounded">
            Sign Up Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default CTASection;
