import React from "react";

const NewArrivalsSection = () => {
  return (
    <section className="w-full bg-[#f5f0e8] py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl font-serif font-semibold mb-4">New Arrivals</h2>
          <p className="text-gray-600 mb-6 text-base max-w-md mx-auto lg:mx-0">
            A new curation of pieces that will add a breath of fresh air to your space
          </p>
          <button className="bg-black text-white px-6 py-2 text-sm font-medium">
            EXPLORE NEW ARRIVALS
          </button>
        </div>

        {/* Images */}
        <div className="flex-1 flex gap-4 justify-center lg:justify-end">
          <img
            src="/images/arrival1.jpg"
            alt="New Arrival 1"
            className="w-60 h-auto rounded-lg object-cover"
          />
          <img
            src="/images/arrival2.jpg"
            alt="New Arrival 2"
            className="w-60 h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;