import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown2 from "./Dropdown2";
import Modal2 from "./modal";
import Videos from "./pages/analytics/Videos"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Analytics = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <Router>
        <div>
          <div
            className=" grid grid-flow-col justify-center   pr-34 pt-12  "
            style={{ backgroundColor: "#f7fafc" }}
          >
            <div
              className="  bg-white  pt-3 sticky pr-3 justify-center top-0 shadow-md overflow-hidden  "
              style={{ width: "100%" }}
            >
              <div className="flex grid pb-5">
                <ul className="text-sm leading-5 ">
                  <h3 className="text-gray-500 text-xs pt-3 font-medium px-5 mb-3 ">
                    REPORTS
                  </h3>
                  <li className="py-2 px-5 hover:bg-blue-50 text-sm ">
                    <span>Watch Time</span>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50 text-sm  ">
                    <Link to="/liveevent">Views</Link>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50 text-sm  ">
                    <Link to="/videos">Videos</Link>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50  text-sm ">
                    <Link to="/extras">Collections</Link>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50  text-sm ">
                    <Link to="/extras">Authors</Link>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50  text-sm ">
                    <Link to="/extras">Countries</Link>
                  </li>
                  <li className="py-2 px-5 hover:bg-blue-50  text-sm ">
                    <Link to="/extras">Devices</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <Switch>
              <Route path="/videos">
                <Videos />
              </Route>
                {/*
              <Route path="/collection">
                <Collection />
              </Route>
              <Route path="/extras">
                <Extras />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="/custom">
                <Custom />
              </Route>
              <Route path="/author">
                <Author />
              </Route> */}

                <Route path="/">
                  <div
                    className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
                    style={{
                      height: "100%",
                      width: "140%",
                      paddingTop: "10px",
                    }}
                  >
                    <div>
                      <div >
                        <div className="">
                          <h1 className="text-2xl mb-2  ">Watch Time</h1>
                          <p className="text-gray-600  ">
                            Cumulative watch time for your web and mobile apps.
                            Live events not <br />
                            included. All dates are in UTC.
                          </p>
                        </div>
                        <br />
                        <br />

                        <div className="grid grid-flow-col auto-cols-full">
                          <div className=" flex justify-end">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                          <br />

                          {/* <div>
                            <div className="mt-4">
                              <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                  <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                  <div className=""></div>
                                </div>
                              </div>
                              <canvas
                                height="446"
                                style="display: block; height: 357px; width: 894px;"
                                width="1117"
                                className="chartjs-render-monitor"
                              ></canvas>
                            </div>
                          </div> */}
                        </div>

                        <div>
                          <br />
                          <br />
                          <div className="grid grid-flow-col  ">
                            <div className="grid grid-flow-col auto-cols-max">
                              <div className="text-gray-600  col-start-2 col-span-4 pr-28  px-3">
                                <tr className=" text-gray-500 text-xs p-2">
                                  <span>DATE</span>
                                </tr>
                              </div>
                            </div>
                            <div
                              className="text-gray-600"
                              style={{ paddingLeft: "50%" }}
                            >
                              <tr className=" text-gray-500 text-xs ">
                                <span> WATCH TIME </span>
                              </tr>
                            </div>
                          </div>
                          <hr />
                        </div>
                        <br />

                        <div className="grid grid-cols-3 gap-4 ">
                          <tr className="text-sm">
                            <td className="py-4 px-6 border-b">
                              <div className="flex items-center">
                                <div>
                                  <div>May 21, 2021</div>
                                </div>
                              </div>
                            </td>

                            <td
                              className="py-4 px-3  border-b   text-right text-gray-700"
                              style={{ paddingLeft: "270%" }}
                            >
                              0min
                            </td>
                          </tr>
                        </div>
                        <hr />
                      </div>
                    </div>
                  </div>
                  <br />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Analytics;
