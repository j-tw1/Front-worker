import React from "react";
import { workers } from "../../data";
import Wrk from "./Wrk";




function Worker() {
  return (
    <section className="job-section pb-70">
    <div className="container">
      <div className="section-title text-center">
        <h2>Workers You May Be Interested In</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices.
        </p>
      </div>
      <div className="row">
        {workers.map((worker) => (
          <Wrk key={worker.id} worker={worker} />
        ))}
        
      </div>
    </div>
  </section>
  );
}
export default Worker;