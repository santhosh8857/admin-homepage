import React from "react";

const Card = (props) => {
  return (
    <>
      <div class="col-xl-3 col-md-6 mb-4">
        <div class={`card border-left-${props.item.color} shadow h-100 py-2`}>
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class={`text-xs font-weight-bold text-${props.item.color} text-uppercase mb-1`}
                >
                  {props.item.title}
                </div>
                {props.item.title === "Tasks" ? (
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                        {props.item.value}
                      </div>
                    </div>
                    {/* // start of prgress bar */}
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div class="h5 mb-0 font-weight-bold text-gray-800">
                    {props.item.value}
                  </div>
                )}
              </div>
              <div class="col-auto">
                <i class={`${props.item.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
