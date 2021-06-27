import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Apperance from "./Apperance";
import Playlist from "./Playlist";
import Extras from "./Extras";
import Pricing from "./Pricing";
import Seo from "./Seo";
import  Dripsetting from "./Dripsetting"
import Customfilter from "./Cfilter"
const Details = () => {
  const [active, setActive] = useState("content");
  return (
    <div>
      <Router>
        <div>
          <div
            className=" grid grid-flow-col justify-center   pr-34 pt-12  "
            style={{ backgroundColor: "#f7fafc",paddingLeft:"10%" }}
          >
            <div
              className="  bg-white  pt-3 sticky pr-3 justify-center top-0 shadow-md overflow-hidden  "
              style={{ width: "100%" }}
            >
              <div className="flex grid pb-5">
                <ul className="text-sm leading-5 ">
                  <h3 className="text-gray-500 text-xs pt-3 font-medium px-5 mb-3 ">
                    CONTENT
                  </h3>
                  <li
                    className={
                      active == "content"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("content")}
                  >
                    <Link to="/content">Details</Link>
                  </li>
                  <li
                    className={
                      active == "apperance"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("liveevent")}
                  >
                    <Link to="/apperance">Apperance</Link>
                  </li>
                  <li
                    className={
                      active == "playlist"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("playlist")}
                  >
                    <Link to="/playlist">Playlist</Link>
                  </li>
                  <li
                    className={
                      active == "pricing"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("pricing")}
                  >
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li
                    className={
                      active == "publication"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("pricing")}
                  >
                    <Link to="/publication">Publication</Link>
                  </li>
                </ul>
              </div>

              <div className="flex pb-10">
                <ul className="text-sm leading-5 ">
                  <h3 className="text-gray-500 text-xs font-medium px-5 mb-3  ">
                    ADVANCED
                  </h3>
                  <li
                    className={
                      active == "extras"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("extras")}
                  >
                    <Link to="/extras">Extras</Link>
                  </li>
                  <li
                    className={
                      active == "seo"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("seo")}
                  >
                    <Link to="/seo">SEO</Link>
                  </li>
                  <li
                    className={
                      active == "cfilter"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("cfilter")}
                  >
                    <Link to="/cfilter">Custom Filters</Link>
                  </li>
                  <li
                    className={
                      active == "geoblocking"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("geoblocking")}
                  >
                    <Link to="/geoblocking">Geo-Blocking</Link>
                  </li>
                  <li
                    className={
                      active == "dripsetting"
                        ? "py-2 px-5  text-sm  hover:bg-blue-50 cont active "
                        : "py-2 px-5  text-sm  hover:bg-blue-50"
                    }
                    onClick={() => setActive("dripsetting")}
                  >
                    <Link to="/dripsetting">Drip Settings</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <Switch>
              <Route path="/apperance">
                <Apperance />
              </Route>
              <Route path="/playlist">
                <Playlist />
              </Route>
              <Route path="/extras">
                <Extras />
              </Route>
              <Route path="/seo">
                <Seo />
              </Route>
              <Route path="/dripsetting">
                <Dripsetting />
              </Route>
              <Route path="/cfilter">
                <Customfilter />
              </Route>
              <Route path="/pricing">
                <Pricing />
              </Route>
                {/* 
             
            
              <Route path="/categories">
                <Categories />
              </Route>
            
              <Route path="/author">
                <Author />
              </Route> */}

                <Route path="/">
                  <div
                    className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
                    style={{
                      height: "100%",
                      width: "120%",
                      paddingTop: "10px",
                    }}
                  >
                    <div >
                      <div>
                        <div className="grid grid-cols-3 gap-5 py-3 pt-8">
                          <div>
                            <span className="text-base font-medium">
                              Collection Title
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                              This is the title of your new collection
                              <br />
                              and will be visible to your customers in <br />
                              the Catalog.
                            </div>
                          </div>

                          <div
                            className="form-group has-search "
                            style={{ width: "200%", height: "0%",border:"black 22px" }}
                          >
                            <input
                              style={{ height: "60%" }}
                              type="text"
                              className="form-control border-2 border-red-500"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-5  pt-12">
                          <div>
                            <span className="text-base font-medium">
                              Full Description
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                              This description will appear on your
                              <br />
                              collection playlist page. Use it to
                              <br />
                              explain to the viewer what to expect <br />
                              from this collection.
                            </div>
                          </div>

                          <div
                            className="form-group has-search "
                            style={{ width: "200%", height: "80%" }}
                          >
                            <input
                              style={{ height: "60%" }}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-5  pt-12">
                          <div>
                            <span className="text-base font-medium">
                              Short Description
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            The short description will be used for
                              <br />
                              the Featured Slider on the catalog
                              <br />
                           page.
                            </div>
                          </div>

                          <div
                            className="form-group has-search "
                            style={{ width: "200%", height: "80%",borderRadius:"50%",borderRadius:"100%" }}
                          >
                            <input
                              style={{ height: "90%", }}
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="grid grid-cols-3 gap-5  pt-16">
                          <div>
                            <span className="text-base font-medium">
                            Delete Collection
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            By clicking on this delete button, you
                              <br />
                              will permanently delete this collection
                              <br />
                              and all associated data.

                            </div>
                          </div>
                          <div>
                          <span
                    className=" p-3  bg-yellow-100  text-base color-danger"
                    style={{ color: "#ED0B0B",}}
                  >
                   Delete Collection
                  </span>
                            </div>





           
                          
                        
                        </div>
                        <br/>
                        <br/>
                        <button
              className="group  rounded text-white  text-xs p-2  mx-auto btn hover-blue"
              style={{ width: "70px", fontSize: "17px" }}
             
            >
            <a className="text-sm"> Save </a>
            </button>
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

export default Details;
