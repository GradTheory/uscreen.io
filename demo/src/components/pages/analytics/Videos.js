import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Videos = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>
        <div className=" grid grid-flow-col  ">
          <div className="max-w-8xl mx-auto ">
            <div
              className=" bg-white shadow-md overflow-hidden py-3 px-5 p-5 relative  lg:w-full "
              style={{ width: "130%" }}
            >
              <div>
                <div>
                  <div className="">
                    <h1 className="text-2xl mb-2 pt-5 ">Videos</h1>
                    <p className="text-gray-600  ">
                      The total watch time and total unique views per video.
                      Live events not included. All dates are in UTC.
                    </p>
                  </div>
                  <div >
                          <div className=" flex justify-end pt-16">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                          </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="119"
                    height="88"
                    viewBox="0 0 119 88"
                    className="mx-auto mt-20  "
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        stroke="#D7DFE2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M113.704 75.439H5a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h108.704a4 4 0 0 1 4 4v66.439a4 4 0 0 1-4 4zM94.012 86.926h-69.32a3 3 0 0 1-3-3V75.44h75.32v8.487a3 3 0 0 1-3 3zM12.76 61.807h91.374"
                      />
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M104.133 56.944v9.725"
                      />
                      <path
                        fill="#006AFF"
                        d="M16.833 13.465a2.714 2.714 0 1 1-5.428 0 2.714 2.714 0 0 1 5.428 0"
                      />
                      <path
                        stroke="#006AFF"
                        stroke-linecap="round"
                        stroke-width="2"
                        d="M21.243 13.465h9.838"
                      />
                      <path
                        stroke="#000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M70.704 36.386c0 6.27-5.082 11.352-11.352 11.352-6.27 0-11.352-5.083-11.352-11.352s5.083-11.352 11.352-11.352c6.27 0 11.352 5.083 11.352 11.352zM56.751 39.367v-5.961M61.953 33.406v5.96"
                      />
                    </g>
                  </svg>
                </div>
                <div className="text-lg text-center text-black font-medium">
                  Nothing is here yet
                </div>
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                  No analytics data for given period.
                </div>
                <br />
                <div className="pb-20"></div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
