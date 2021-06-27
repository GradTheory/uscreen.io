import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"
import Modal2 from "../../modal"
import "../../Dashboardcard.css"
const Categories = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className=" grid grid-flow-col   pr-60">
        <div className="max-w-8xl mx-auto "style={{width:"200%"}}>
          <div
            className=" bg-white shadow overflow-hidden py-3 px-12  relative   lg:w-full "
            style={{ height: "100%" }}
          >
           
            <br/>
            <div className=" flex justify-between" >
              <div>
              <div className="form-group has-search "style={{width:"100%",height:"100%"}}>
                <span className=" form-control-feedback">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  style={{ height: "80%" }}
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                />
              </div>
              </div>
         
           
             
              <div className="">
              <button
                    className="group  rounded text-white  p-2 mx-auto btn hover-blue "
                    style={{ width: "120%", fontSize: "17px" }}
                  >
                    Add New
                  </button>
              </div>
            
            </div>

            <div>
                <div>
                  <br/>
                  <br/>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="77"
                    height="83"
                    viewBox="0 0 77 83"
                    className="mx-auto"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke="#D7DFE2"
                        d="M34.462 63.311H1V42.945h20.385V25.27h20V4.52h20v12.873"
                      />
                      <path
                        stroke="#006AFF"
                        d="M13.523 1.577l11.695-.272M24.946 12.99l.272-11.684-23.39 23.367M53.161 47.326l4.325 4.32 8.648-8.64"
                      />
                      <g stroke="#000">
                        <path d="M59.648 31.345c8.9 0 16.116 7.208 16.116 16.1 0 8.893-7.215 16.102-16.116 16.102-8.9 0-16.116-7.209-16.116-16.101 0-8.893 7.215-16.101 16.116-16.101z" />
                        <path d="M50.922 60.994l-2.785 20.954 11.51-6.9 11.513 6.9-2.787-20.977" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="text-lg text-center text-black font-medium">
                  Amplify and Enterprise plans only
                </div>
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                  Live events are only available to Amplify and Enterprise
                  <br />
                  plan customers. If you're interested, let us know.
                </div>
                <br />
                <div className="text-center">
                  <button
                    className="group  rounded text-white   p-2   mx-auto btn hover-blue"
                    style={{ width: "15%", fontSize: "17px" }}
                  >
                    Talk to sales
                  </button>
                </div>
              </div>
           
            
        
          </div>
       <br/>
       <br/>
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
                Learn more about <b>Collections</b>
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
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </span>
                <span
                        className="text text-sm pl-3 "
                        style={{ color: "#3388FF" }}
                      >
                         <Modal2 
                         msg={['Your catalog displays content organized by category. Your videos, collections,','and live events must be added to a category for customers to see them.', ]} 
         name="Take a tour"/>  
                      </span>
              </a>
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

export default Categories;
