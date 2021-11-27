import React from "react";

const ColorCard = ({ item }) => {
  return (
    <>
      <div class="col-lg-6 mb-4">
        {item.title !== "Light" ? (
          <div class={`card bg-${item.classColor} text-white shadow`}>
            <div class="card-body">
              {item.title}
              <div class="text-white-50 small">{item.hexaColor}</div>
            </div>
          </div>
        ) : (
          <div class={`card bg-${item.classColor} text-black shadow`}>
            <div class="card-body">
              {item.title}
              <div class="text-black-50 small">{item.hexaColor}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorCard;
