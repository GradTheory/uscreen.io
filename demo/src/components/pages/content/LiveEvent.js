import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal2 from "../../modal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../Dashboardcard.css"
const Content = () => {

  const [startDate, setStartDate] = useState(new Date());
  
  return (
    <Router>
      <div>
      <div className=" bg-white shadow  py-8 px-10  relative   lg:w-full "style={{height:"100%",width:"140%",paddingTop:"10px"}}>
                  <div>
                    <div className="">
                      <div className="  bg-white  shadow max-w-9xl py-16 px-36 ">
                        <div className="flex-center">
                          <div>
                            <a
                              href="#"
                              className="block mt-1 text-lg leading-tight font-medium text-black   "
                            >
                              <svg
                                className="w-6 h-6 mx-auto"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                                />
                              </svg>
                            </a>
                            <p className="mt-2  text-center">
                              <span className="text-black font-medium text-lg">
                                {" "}
                                Drag & Drop to Upload
                              </span>
                              <br />
                              or{" "}
                              <span
                                className="text-base "
                                style={{ color: "#006AFF" }}
                              >
                                {" "}
                                Browse{" "}
                              </span>
                            </p>
                            <br/>
                            <div className=" pl-52">
                              <a href="#" className="flex py-2 ">
                                <span className=" text-blue-600 p-2 text-sm bg-blue-100">
                                  <svg
                                    data-v-c882134c=""
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="15"
                                    viewBox="0 0 19 16"
                                  >
                                    <path
                                      data-v-c882134c=""
                                      fill="#0061FF"
                                      fill-rule="nonzero"
                                      d="M9.426 3.007L4.713 6.013 9.426 9.02l-4.713 3.006L0 9.004l4.713-3.007L0 3.007 4.713 0l4.713 3.007zM4.69 12.993l4.713-3.006 4.713 3.006L9.402 16l-4.713-3.007zm4.737-3.99l4.713-3.006-4.713-2.99L14.115 0l4.713 3.007-4.713 3.006 4.713 3.007-4.713 3.006-4.689-3.022z"
                                    ></path>
                                  </svg>
                                </span>
                                <span
                                  className="  pt-1 pr-2 text-md bg-blue-100"
                                  style={{ color: "#006AFF" }}
                                >
                                  Dropbox
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />

                      <div className="grid grid-flow-col auto-cols-full">
                        <div className="form-group has-search"style={{width:"80%",height:"100%"}}>
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
                        <div>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>

                      
                      </div>

                      <div>
                        <br />
                        <br />
                        <div className="grid grid-flow-col  ">
                  <div className="grid grid-flow-col auto-cols-max">
                <div>
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 w-6 h-6 checked:border-transparent ... rounded pb-5"
                  />
                </div>
                <div className="text-gray-600  col-start-2 col-span-4 pr-28  px-3">
                  <tr className=" text-gray-500 text-xs p-2">
                    <span>0 VIDEOS</span>
                  </tr>
                </div>
                </div>
                <div className="text-gray-600" style={{paddingLeft:"50%"}}>
                  <tr className=" text-gray-500 text-xs ">
                    <span> UPLOADED ON </span>
                  </tr>
                </div>
              </div>
                        <hr />
                      </div>
                      <br />
                      <div>
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
                      <div className="text-lg text-center text-black font-medium">
                        Nothing is here yet
                      </div>
                      <div className="mt-1 text-sm text-center font-normal text-gray-600">
                        What better way to start a story than from a blank
                        canvas.
                      </div>
                    </div>
                  </div>
                </div>
                <br/>

                <p>

                  <span className="cardSpan">
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
                      Learn more about <b>Videos</b>
                    </span>
                  </span>
                </p>

                <div>
                  <div className="grid grid-flow-col auto-cols-max cardspan">
                    <a href="#" className="pr-3">
                      <span className="icon" style={{ alignItems: "center" }}>
                        <svg
                          className="w-5 h-5"
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
                         Take a tour
                      </span>
                    </a>
                     <div>
                     
                     <a  href="" className="pr-3">
                      <span className="icon" style={{ alignItems: "center" }}>
                        <svg
                          className="w-5 h-5"
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
                         msg={['Drag and drop them on this page (or log in to your Dropbox account) to unlock all' ,'the possibilities you now have with Uscreen!']} 
         name="Read the Guide"/>  
                      </span>
                      
                    </a>
                 
              
                    
                    </div> 
                  
                    <a href="#" className="pr-3">
                      <span className="icon" style={{ alignItems: "center" }}>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="#3388FF"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664`z`"
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
    </Router>
  );
};

export default Content;
