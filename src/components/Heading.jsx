// Heading.js
import React from 'react';

function Heading({ head }) {
  return (
    <>
     <h2 className="py-10 text-4xl mx-4 sm:text-6xl text-center text-[#00BFFB] font-normal sm:font-semibold">
    {head}
  </h2>
    </>
  );
}

export default Heading;
