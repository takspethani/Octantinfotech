import React from "react";
import ServiceCard from "./ServiceCard";
import Button from "./Button";

function Section1() {
  return (
    <div>
      <section className="py-8 px-4 sm:px-0 ">
        <ServiceCard />
        <Button />
      </section>
    </div>
  );
}

export default Section1;
