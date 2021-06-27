import React from "react";

const Pricing = () => {
  return (
    <div>
      <div>
        <div
          className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
          style={{
            height: "150%",
            width: "110%",
            paddingTop: "10px",
          }}
        >
          <div>
            <div>
              <div className="grid grid-cols-3 gap-4 py-3 pt-8">
                <div>
                  <span className="text-base font-medium">Content Access</span>
                  <div className="text-gray-700 text-sm font-light wt-64 ">
                    Choose to offer this collection for free
                    <br />
                    or require access
                  </div>
                </div>
                <div>
                  <div className="relative cursor-pointer hover:bg-gray-100 w-64 border rounded mx-1 flex flex-col justify-center items-center py-10 border-primary">
                    <div className="absolute w-7 h-7 border flex justify-center items-center rounded-full top-0 right-0 m-2 border-white-200">
                      <div
                        className="w-3 h-3 rounded-full bg-blue-500"
                        type="radio"
                      ></div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="37"
                      viewBox="0 0 38 37"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path stroke="#006AFF" d="M19 17.971v18" />
                        <path
                          stroke="#060606"
                          d="M33.727 17.971v13.091a4.909 4.909 0 0 1-4.909 4.91H9.182a4.909 4.909 0 0 1-4.91-4.91v-13.09"
                        />
                        <path
                          stroke="#006AFF"
                          d="M14.602 9.795a4.399 4.399 0 1 1 4.399-4.398M23.398 9.795a4.399 4.399 0 1 0-4.399-4.398v4.398"
                        />
                        <path
                          stroke="#060606"
                          d="M3.127 9.79h31.746c1.175 0 2.127.952 2.127 2.127v3.927a2.127 2.127 0 0 1-2.127 2.127H3.127A2.127 2.127 0 0 1 1 15.844v-3.927c0-1.175.952-2.128 2.127-2.128z"
                        />
                      </g>
                    </svg>

                    <div className="text-black">Free for everyone</div>
                  </div>
                </div>
                <div>
                  <div className="relative cursor-pointer hover:bg-gray-100 w-64 border rounded mx-1 flex flex-col justify-center items-center py-10 border-primary">
                    <div className="absolute w-7 h-7 border flex justify-center items-center rounded-full top-0 right-0 m-2 border-primary">
                      <div
                        className="w-3 h-3 rounded-full bg-blue-500"
                        type="radio"
                      ></div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="35"
                      viewBox="0 0 30 35"
                    >
                      <g
                        fill="none"
                        fill-rule="evenodd"
                        stroke-width="1.8"
                        transform="translate(1 1)"
                      >
                        <path
                          stroke="#060606"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M23.026 32.765H4.692c-2.59 0-4.692-2.1-4.692-4.692V17.14a4.693 4.693 0 0 1 4.692-4.692h18.334a4.692 4.692 0 0 1 4.692 4.692v10.933c0 2.592-2.1 4.692-4.692 4.692z"
                        />
                        <circle
                          cx="13.895"
                          cy="20.842"
                          r="2.605"
                          stroke="#006AFF"
                        />
                        <path
                          stroke="#006AFF"
                          stroke-linecap="square"
                          d="M13.895 23.447v3.474"
                        />
                        <path
                          stroke="#060606"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5.006 12.448V8.853A8.852 8.852 0 0 1 13.86 0a8.852 8.852 0 0 1 8.853 8.853v3.595"
                        />
                      </g>
                    </svg>

                    <div className="text-black">Free for everyone</div>
                  </div>
                </div>
              
                <div >
                <span className="text-base font-medium">
                Subscription plan
                </span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
               
                </div>
              </div>
              <div className="pl-10 pt-5 " style={{height:"200%"}}>
             
                <select className="dfilter  ">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3"> </option>
                </select>
              </div>
             
              
              </div>
              <div  className="grid grid-cols-3 gap-4 py-3 pt-8">
              <div >
                <span className="text-base font-medium">
                One-time purchase price
                </span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                Set a price for access to this <br/>
                 collection. Minimum amount is 0.50.
                </div>
              </div>
              <div className="pl-10 pt-5 ">
             
              <input type="checkbox" class=" checked:bg-black-600 checked:border-transparent ..."/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
