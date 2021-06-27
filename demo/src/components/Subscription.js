import React from "react";
import Modal2 from "../components/modal"
const Subscription = () => {
  return (
    <div>
      <div>
        <br />
        <br />

        <div className="px-56">
          <h1 className="text-2xl mb-2 pl-12 ">Subscription plans</h1>
          <p className="text-gray-600 pl-12 ">
            Here you can manage your subscription plans and also see the number
            of active subscribers, trials, and monthly recurring revenue (MRR)
          </p>
        </div>
        <br/>
        <br/>
           <div className="flex pl-60" style={{width:"93%"}}>
        <div class="max-w-xs mx-auto bg-white  shadow-md overflow-hidden max-w-sm ">
          <div className="flex">
            <div className="p-3">
              <div className="grid grid-flow-col">
                <div>
                  <a
                    href="#"
                    className=" mt-1 text-sm leading-tight p  text-gray-600 "
                  >
                    In Trail{" "}
                  </a>

                  <p className="text-black pt-3"> 0 </p>
                </div>
                <div className="flex-end">
                  <p className="text-blue-600 pl-36 pt-5">
                    <div className="grid grid-flow-col">
                      <div className="text-blue-600 ">See Breakdown</div>
                      <div>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-xs mx-auto bg-white  shadow-md overflow-hidden max-w-sm">
          <div className="md:flex">
            <div className="p-3">
              <div className="grid grid-flow-col">
                <div>
                  <a
                    href="#"
                    className=" mt-1 text-sm leading-tight p  text-gray-600 "
                  >
                    In Trail{" "}
                  </a>

                  <p className="text-black pt-3"> 0 </p>
                </div>
                <div className="flex-end">
                  <p className="text-blue-600 pl-36 pt-5">
                    <div className="grid grid-flow-col">
                      <div className="text-blue-600 ">See Breakdown</div>
                      <div>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-xs mx-auto bg-white  shadow-md overflow-hidden max-w-sm">
          <div className="md:flex">
            <div className="p-3">
              <div className="grid grid-flow-col">
                <div>
                  <a
                    href="#"
                    className=" mt-1 text-sm leading-tight p  text-gray-600 "
                  >
                    In Trail{" "}
                  </a>

                  <p className="text-black pt-3"> 0 </p>
                </div>
                <div className="flex-end">
                  <p className="text-blue-600 pl-36 pt-5">
                    <div className="grid grid-flow-col">
                      <div className="text-blue-600 ">See Breakdown</div>
                      <div>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <br />
        <br />
        <div className=" grid grid-flow-col pl-32">
          <div className=" mx-auto " style={{ width: "80%", height: "100%" }}>
            <div
              className=" bg-white shadow-md overflow-hidden py-3 relative   mx-auto "
              style={{ height: "90%" }}
            >
              <div>
                <div>
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="59"
                    height="64"
                    viewBox="0 0 59 64"
                    className="mx-auto"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path stroke="#006AFF" d="M57.358 61.02h-6.284" />
                      <path stroke="#000" d="M39.579 40.373h-6.284" />
                      <path
                        stroke="#006AFF"
                        d="M44.77 39.298c6.54 0 11.84 5.267 11.84 11.763 0 4.193-2.21 7.876-5.535 9.958"
                      />
                      <path
                        stroke="#000"
                        d="M44.703 62.094c-6.54 0-11.841-5.114-11.841-11.423 0-4.536 2.742-8.455 6.715-10.297"
                      />
                      <path
                        stroke="#D7DFE2"
                        d="M25.71 54.417H7.017A6.017 6.017 0 0 1 1 48.4V12.358a6.017 6.017 0 0 1 6.017-6.017H43.06a6.017 6.017 0 0 1 6.017 6.017v19.737M35.721 1v10.683M14.354 1v10.683"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-lg text-center text-black font-medium">
                  Your plans will be shown here
                </div>
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                  Add a new subscription plan by clicking the button below
                </div>
                <br />
                <div className="text-center">
                  <button
                    className="group  rounded text-white   p-2   mx-auto btn hover-blue"
                    style={{ width: "15%", fontSize: "17px" }}
                  >
                    Create a plan
                  </button>
                </div>
              </div>
            </div>
            <br />
            <p>
              <span style={{ paddingLeft: "40%", paddingTop: "5%" }}>
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
                  Learn more about <b>Subscription</b>
                </span>
              </span>
            </p>

            <div>
              <div
                className="grid grid-flow-col auto-cols-max "
                style={{ paddingLeft: "35%", paddingTop: "2%" }}
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
                      
                         msg={['Subscriptions are the primary way to sell content on your storefront. ' ,'','When setting up subscriptions for the first time, its best to add a couple options -','at least a yearly and a monthly subscription.',]} 
                         msg2={['We suggest a trial period of 3-10 days to give customers a taste of what theyll' ,'have access to. ']} 
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
    </div>
  );
};

export default Subscription;
