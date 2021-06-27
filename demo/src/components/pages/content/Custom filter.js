import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal2 from "../../modal"
import "../../Dashboardcard.css"
const Custom = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className=" grid grid-flow-col   pr-60">
        <div className="max-w-8xl mx-auto " style={{ width: "165%" }}>
          <div
            className=" bg-white shadow overflow-hidden py-3 px-12  relative   lg:w-full "
            style={{ height: "100%" }}
          >
            <br />
            <br />
            <div className=" flex justify-end">
              <div className="">
              <button
                    className="group  rounded text-white   p-2   btn hover-blue"
                    style={{ width:"130px", fontSize: "17px" }}
                  >
                        <div className="grid grid-flow-col auto-cols-max ">
                     <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <div >
                  Add New 
                    </div>
                    </div>
                  </button>
              </div>
            </div>

            <div>
              <br />
              <br />
              <div className="grid grid-flow-col auto-cols-auto ">
                <div className="text-gray-600  pr-28  px-3">
                  <tr className=" text-gray-600 text-xs">
                    <span>NAME</span>
                  </tr>
                </div>
                <div className="text-gray-600   pr-28  px-3">
                  <tr className=" text-gray-600 text-xs">
                    <span>POSITION</span>
                  </tr>
                </div>

                <div className="text-gray-600">
                  <tr className=" text-gray-600 text-xs ">
                    <span> ADDED </span>
                  </tr>
                </div>
              </div>
              <hr />
            </div>
            <br />

            <div>
              <br />
              <br />
              <div className="grid grid-flow-col auto-cols-auto ">
                <div className="text-gray-600 py-4  pr-28">
                  <tr className=" text-gray-600 text-sm">
                    <span>Draft filter</span>
                  </tr>
                </div>

                <div className="text-gray-600 py-4 pr-28 ">
                  <tr className=" text-gray-600 text-sm ">
                    <span> June 1 2021</span>
                  </tr>
                </div>

                <div>
                  <a href="#" className="flex py-2   ">
                    <span className=" text-blue-600 p-2 text-sm bg-blue-100 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="17"
                        viewBox="0 0 19 17"
                      >
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          stroke="#006AFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.2"
                        >
                          <path d="M4.911 15.438H2.875A1.875 1.875 0 0 1 1 13.562V2.876C1 1.839 1.84 1 2.875 1h9.187c1.036 0 1.875.84 1.875 1.875v1.286M4.844 5.219h5.25M4.844 8.219h3.75M4.844 11.219H6.53M10.319 15.585l-1.861.318.317-1.861a2.733 2.733 0 0 1 .761-1.472l5.6-5.6a1.593 1.593 0 1 1 2.254 2.254l-5.6 5.6c-.4.4-.914.666-1.471.761z" />
                        </g>
                      </svg>
                    </span>
                    <span
                      className="  pt-2  pr-3 text-sm bg-blue-100"
                      style={{ color: "#006AFF" }}
                    >
                      Edit
                    </span>
                  </a>
                </div>
              </div>
              <hr />
            </div>
            <br />
          </div>
          <br />
          <p>
            <span style={{ paddingLeft: "35%", paddingTop: "5%" }}>
              <span className="icon" style={{ alignItems: "center" }}>
                <svg
                  className="w-5 h-5 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </span>
              <span className="text text-sm pl-4">
                Learn more about <b>Custom filters</b>
              </span>
            </span>
          </p>

          <div>
            <div
              className="grid grid-flow-col auto-cols-max "
              style={{ paddingLeft: "29%", paddingTop: "1%" }}
            >
              <a href="#" className="pr-3">
                <span className="icon" style={{ alignItems: "center" }}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#3388FF"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                <span
                  className="text text-xs pl-3 "
                  style={{ color: "#3388FF" }}
                >
                  Read the Guide
                </span>
              </a>
              <span
                        className="text text-sm pl-3 "
                        style={{ color: "#3388FF" }}
                      >
                         <Modal2 
                         msg={['Custom filters are another way to guide your customers toward the content','they"re interested in.','We suggest using difficulty, video length, or levels (beginner, intermediate,','advanced).', ]} 
         name="Take a tour"/>  
                      </span>
              <a href="#" className="pr-3">
                <span className="icon" style={{ alignItems: "center" }}>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="#3388FF"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span
                  className="text text-xs pl-3 "
                  style={{ color: "#3388FF" }}
                >
                  Watch a video
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom;
