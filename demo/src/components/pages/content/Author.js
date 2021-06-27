import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Modal2 from "../../modal"
import "../../Dashboardcard.css"
const Author = () => {
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
                <div>
                  <br/>
                  <br/>
                  <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="92"
                          className="mx-auto"
                          height="82"
                          viewBox="0 0 92 82"
                        >
                          <g fill="none" fill-rule="evenodd">
                            <path
                              fill="#FFF"
                              d="M70.916 46.365H20.13a5.162 5.162 0 0 1-5.161-5.161V6.16A5.162 5.162 0 0 1 20.13 1h50.786a5.162 5.162 0 0 1 5.162 5.161v35.043c0 2.85-2.31 5.16-5.162 5.16"
                            />
                            <path
                              stroke="#D7DFE2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M70.916 46.365H20.13a5.162 5.162 0 0 1-5.161-5.161V6.16A5.162 5.162 0 0 1 20.13 1h50.786a5.162 5.162 0 0 1 5.162 5.161v35.043c0 2.85-2.31 5.16-5.162 5.16zM36.52 39.81l34.384.03"
                            />
                            <path
                              stroke="#006AFF"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M20.163 39.798l16.357.012M36.938 37.77v3.44"
                            />
                            <path
                              stroke="#D7DFE2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M44.385 26.456l7.355-4.495a1.057 1.057 0 0 0 0-1.805l-7.355-4.482a1.057 1.057 0 0 0-1.607.903v8.977c0 .825.903 1.332 1.607.902z"
                            />
                            <path
                              fill="#FFF"
                              d="M79 65.269H12.047a5.161 5.161 0 0 1-5.161-5.161V13.064c0-2.85 2.31-5.161 5.161-5.161H79c2.85 0 5.16 2.31 5.16 5.161v47.044c0 2.85-2.31 5.16-5.16 5.16"
                            />
                            <path
                              stroke="#D7DFE2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M79 65.269H12.047a5.161 5.161 0 0 1-5.161-5.161V13.064c0-2.85 2.31-5.161 5.161-5.161H79c2.85 0 5.16 2.31 5.16 5.161v47.044c0 2.85-2.31 5.16-5.16 5.16zM34.138 56.98l43.48.038"
                            />
                            <path
                              stroke="#006AFF"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M13.453 56.965l20.685.015M34.357 54.113v5.162"
                            />
                            <path
                              stroke="#D7DFE2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M44.084 40.092l9.301-5.683a1.337 1.337 0 0 0-.002-2.282l-9.3-5.668a1.336 1.336 0 0 0-2.032 1.14v11.353a1.336 1.336 0 0 0 2.033 1.14z"
                            />
                            <path
                              fill="#FFF"
                              d="M84.885 80.821H6.161A5.162 5.162 0 0 1 1 75.66V19.877a5.162 5.162 0 0 1 5.161-5.16h78.724c2.851 0 5.162 2.31 5.162 5.16V75.66c0 2.85-2.31 5.161-5.162 5.161"
                            />
                            <path
                              stroke="#D7DFE2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M84.885 80.821H6.161A5.162 5.162 0 0 1 1 75.66V19.877a5.162 5.162 0 0 1 5.161-5.16h78.724c2.851 0 5.162 2.31 5.162 5.16V75.66c0 2.85-2.31 5.161-5.162 5.161zM32.404 71.27l50.103.044"
                            />
                            <path
                              stroke="#006AFF"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M8.568 71.252l23.836.018M32.637 67.877v6.021M43.865 51.81l10.718-6.55a1.54 1.54 0 0 0-.002-2.63l-10.718-6.532a1.54 1.54 0 0 0-2.341 1.316v13.081a1.54 1.54 0 0 0 2.343 1.314z"
                            />
                          </g>
                        </svg>
                </div>
                <br/>
                <div className="text-lg text-center text-black font-medium">
              Nothing is here yet
                </div>
           
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                What better way to start a story than from a blank canvas.
                 
                </div>
                <br />
               
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
                  className="text text-xs pl-3 "
                  style={{ color: "#3388FF" }}
                >
                 <Modal2 
                         msg={['Add Authors to allow customers to search content by their favorite author and','for you to track the viewership of each author in our Analytics feature..', ]} 
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

export default Author;
