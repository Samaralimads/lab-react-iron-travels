import travelPlansData from "../assets/travel-plans.json";
import React, { useState } from "react";
import "../App.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (currentId) => {
    setTravelPlans(travelPlans.filter((plan) => plan.id !== currentId));
  };

  return (
    <div className="listCtn">
      {travelPlans.map((plan) => (
        <div key={plan.id} className="container">
          <div className="imageCtn">
            <img src={plan.image} alt="image" />
          </div>
          <div className="textCtn">
            <h3>
              {plan.destination} ({plan.days} Days)
            </h3>
            <p>{plan.description}</p>
            <p>
              <strong>Price:</strong> {plan.totalCost}
            </p>

            <div className="coloredCtn">
              {plan.totalCost < 350 && (
                <span className="GDLabel">
                  <p>Great Deal</p>
                </span>
              )}
              {plan.totalCost > 1500 && (
                <span className="PLabel">
                  <p>Premium</p>
                </span>
              )}
              {plan.allInclusive && (
                <span className="AILabel">
                  <p>All-Inclusive</p>
                </span>
              )}
            </div>
            <button type="button" onClick={() => handleDelete(plan.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TravelList;
