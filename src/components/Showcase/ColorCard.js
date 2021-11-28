import React from "react";

const ColorCard = ({ item }) => {
  return (
    <>
      <div className="col-lg-6 mb-4">
        {item.title !== "Light" ? (
          <div className={`card bg-${item.classColor} text-white shadow`}>
            <div className="card-body">
              {item.title}
              <div className="text-white-50 small">{item.hexaColor}</div>
            </div>
          </div>
        ) : (
          <div className={`card bg-${item.classColor} text-black shadow`}>
            <div className="card-body">
              {item.title}
              <div className="text-black-50 small">{item.hexaColor}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorCard;
