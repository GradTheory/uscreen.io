import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown2 from "../../Dropdown2";
import Modal2 from "../../modal"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../Dashboardcard.css"
const Collection = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div className=" grid grid-flow-col   pr-68">
        <div className="max-w-8xl mx-auto "style={{width:"130%"}}>
          <div
            className=" bg-white shadow overflow-hidden py-3 px-8  relative   lg:w-full "
            style={{ height: "100%" }}
          >
            <br/>
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
         
           
              <div className="pl-24">
                <Dropdown2 />
              </div>
              <div className="">
              <button
                    className="group  rounded text-white   p-2   btn hover-blue"
                    style={{ width:"170px", fontSize: "17px" }}
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
                  <Modal2 
                         msg={['Collections allow you to group and sell videos that are meant to be viewed ','together or in a specific order.','' ,'Within a collection you can add sections to further segment your content that ','we call dividers.']} 
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
                    className="checked:bg-blue-600 w-6 h-6 checked:border-transparent ... rounded "
                  />
                </div>
                <div className="text-gray-600  col-start-2 col-span-4 pr-28  px-3">
                  <tr className=" text-gray-600 text-xs">
                    <span>1 SELECTED</span>
                  </tr>
                </div>
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
              <div className="grid grid-flow-col ">
                  <div className="grid grid-flow-col auto-cols-max">
                <div className="py-4 ">
                  <input
                    type="checkbox"
                    className="checked:bg-blue-600 w-6 h-6 checked:border-transparent ... rounded "
                  />
                </div>
                <div className="px-4 ">
                  <svg
                    width="80"
                    height="49"
                    viewBox="0 0 80 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.500122 5C0.500122 2.51472 2.51484 0.5 5.00012 0.5H75.0001C77.4854 0.5 79.5001 2.51472 79.5001 5V44C79.5001 46.4853 77.4854 48.5 75.0001 48.5H5.00012C2.51484 48.5 0.500122 46.4853 0.500122 44V5Z"
                      fill="white"
                      stroke="#E2E8F0"
                    />
                    <path
                      d="M56.6667 11H23.3333C21.4933 11.0022 20.0022 12.4933 20 14.3333V35.6667C20.0022 37.5067 21.4933 38.9978 23.3333 39H56.6667C56.8537 39.0007 57.0405 38.9844 57.2247 38.9513C58.8288 38.6828 60.0031 37.2931 60 35.6667V14.3333C59.9978 12.4932 58.5067 11.0022 56.6667 11ZM23.3333 37.6667C22.2971 37.6665 21.4325 36.8749 21.3413 35.8427L34.6333 27.152L48.1507 37.6667H23.3333ZM58.6667 35.6667C58.6677 36.6452 57.959 37.4801 56.9933 37.638C56.8855 37.6574 56.7762 37.667 56.6667 37.6667H50.322L41.4893 30.7927L49.388 24.4767L58.6667 30.044V35.6667ZM58.6667 28.4893L49.6767 23.0953C49.4377 22.9516 49.1345 22.9718 48.9167 23.146L40.4053 29.9527L35.0753 25.8073C34.8507 25.6328 34.5402 25.6199 34.302 25.7753L21.3333 34.2547V14.3333C21.3333 13.2287 22.2287 12.3333 23.3333 12.3333H56.6667C57.7712 12.3333 58.6667 13.2287 58.6667 14.3333V28.4893Z"
                      fill="#E2E8F0"
                    />
                    <path
                      d="M40 15C37.7908 15 36 16.7908 36 19C36.0022 21.2083 37.7917 22.9978 40 23C42.2092 23 44 21.2092 44 19C44 16.7908 42.2092 15 40 15ZM40 21.6667C38.5273 21.6667 37.3333 20.4728 37.3333 19C37.3333 17.5273 38.5273 16.3333 40 16.3333C41.4728 16.3333 42.6667 17.5273 42.6667 19C42.6667 20.4728 41.4728 21.6667 40 21.6667Z"
                      fill="#E2E8F0"
                    />
                  </svg>
                </div>

                <div className="text-gray-600 py-4  ">
                  <tr className=" text-gray-600 text-sm">
                    <span>Draft Collection</span>
                  </tr>
                </div>
                </div>


                <div className="text-gray-600 py-4 ">
                  <tr className=" text-gray-600 text-sm "  >
                    <span> June 1 2021</span>
                  </tr>
                </div>
                <div className="grid grid-flow-col auto-cols-min  "style={{paddingLeft:"47%"}} >
                    <div className="pr-3 ">
                  <a href="#" className="flex py-2   ">
                      
                    <span className=" text-blue-600 p-2 text-sm bg-blue-100">
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
                <div className="  ">
                  <a href="#" className="flex py-2 ">
                    <span className=" text-blue-600 p-1 text-sm bg-blue-100">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </span>
                  
                  </a>

                </div>
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
                         msg={['Collections allow you to group and sell videos that are meant to be viewed ','together or in a specific order.','' ,'Within a collection you can add sections to further segment your content that ','we call dividers.']} 
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

export default Collection;
