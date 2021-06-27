import React from "react";
import custom from "./images/cc.png";
import custom2 from "./images/custom.png";
import Dropdown2 from "./Dropdown2";
import pp from "./images/pp.png";
import pp2 from "./images/pp2.png";
import pp3 from  "./images/pp3.png";
import pp4 from  "./images/pp4.png";
import pp5 from  "./images/pp5.png";
import pp6 from  "./images/pp6.png";
import pp7 from "./images/pp7.png";
import pp8 from "./images/pp8.png";
import pp9 from "./images/pp9.png";
import pp10 from "./images/pp10.png";

const Customization = () => {
  return (
    <div>
      <div className="px-56 py-7">
        <h1 className="text-2xl mb-2 pl-12  ">Customization</h1>
        <p className="text-gray-600 pl-12 ">
          Install a theme for your home page and customize your storefront.
        </p>
      </div>
      <div>
        <div style={{ paddingLeft: "13%" }}>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl h-96 pt-7 pl-8 pb-2">
            <div className="md:flex ">
              <div className="static">
                <div className="p-2">
                  <div>
                    <img
                      className="  object-cover static "
                      src={custom}
                      alt="Man looking at item at a store"
                      width="80%"
                    ></img>
                  </div>
                </div>
                <div
                  className="  absolute bottom-40 left-96"
                  style={{ paddingLeft: "38%", paddingBottom: "55px" }}
                >
                  <div
                    className="max-w-xs   shadow-md overflow-hidden mobile"
                    style={{
                      width: "40%",
                      color: "white",
                      backgroundColor: "#EDF2F7",
                    }}
                  >
                    gg
                  </div>

                  <div>
                    <img
                      className=" object-cover "
                      src={custom2}
                      alt="Man looking at item at a store"
                      width="40%"
                    ></img>
                  </div>
                </div>
              </div>
              <div className="md:flex-shrink-0 pr-12">
                <h3 className="mb-2 text-lg font-medium">Current theme</h3>
                <p className="mb-4 text-sm">
                  Showcase your brand and content
                  <br />
                  with the Summer Triangle Theme.
                </p>
                <div className="grid grid-flow-col auto-cols-max">
                  <div className="pr-7">
                    <button
                      type="button"
                      className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                      style={{
                        backgroundColor: "#006aff",
                        height: "40px",
                        color: "white",
                        width: "120%",
                      }}
                    >
                      Customize
                    </button>{" "}
                  </div>
                  <br />
                  <div className="pl-2">
                    <button
                      type="button"
                      className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                      style={{
                        backgroundColor: "#e5f0ff",
                        height: "40px",
                        color: "#006aff",
                        width: "130%",
                      }}
                    >
                      Backups
                    </button>{" "}
                  </div>
                </div>
                <br />
                <div className="grid grid-flow-col auto-cols-max">
                  <div className="">
                    <button
                      type="button"
                      className="b-button box-border inline-flex items-center text-sm leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                      style={{
                        backgroundColor: "#e5f0ff",
                        height: "30px",
                        color: "#006aff",
                        width: "120%",
                      }}
                    >
                      Navigation
                    </button>{" "}
                  </div>
                  <br />
                  <div className="pl-2">
                    <button
                      type="button"
                      className="b-button box-border inline-flex items-center text-sm leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center pr-3"
                      style={{
                        backgroundColor: "#e5f0ff",
                        height: "30px",
                        color: "#006aff",
                        width: "130%",
                      }}
                    >
                      Pages
                    </button>{" "}
                  </div>
                  <div className="">
                    <button
                      type="button"
                      className="b-button box-border inline-flex items-center text-sm leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                      style={{
                        backgroundColor: "#e5f0ff",
                        height: "30px",
                        color: "#006aff",
                        width: "110%",
                      }}
                    >
                        Advanced
                    </button>{" "}
                    <div className="grid grid-flow-col auto-cols-full">
                    <div style={{backgroundColor:"#e5f0ff",color:"#e5f0ff"}}>
                   <Dropdown2 style={{backgroundColor:"#e5f0ff",color:"#e5f0ff"}}/>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-56 py-7">
        <h1 className="text-2xl mb-2 pl-12  ">Theme Gallery</h1>
        <p className="text-gray-600 pl-12 ">
          Customize your home page with one of our awesome themes
        </p>
      </div>
      <div className="pl-72 pr-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="relative made">
            <img
              src={pp}
              alt="pic"
              width="300px"
              height="300px"
              className="hover:bg-red-700 "
            />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Orion
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp2} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Pheonix
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp3} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Chameleon
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp4} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Pyxis
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="pl-72 pr-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="relative made">
            <img
              src={pp5}
              alt="pic"
              width="300px"
              height="300px"
              className="hover:bg-red-700 "
            />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Vela
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp6} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Summer Triangle
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp7} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Polaris
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp8} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Ara
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="pl-72 pr-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="relative made">
            <img
              src={pp9}
              alt="pic"
              width="300px"
              height="300px"
              className="hover:bg-red-700 "
            />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Musca
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative made">
            <img src={pp10} alt="pic" width="300px" height="300px" />
            <div className="max-w-xs mx-auto bg-white  shadow-md overflow-hidden md:max-w-xs absolute bottom-0 left-50 h-0 short">
              <div>
                <div className="p-7">
                  <div className=" tracking-wide text-sm text-black-300 pb-3 ">
                    Lyra
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#006aff",
                          height: "40px",
                          color: "white",
                          width: "120%",
                        }}
                      >
                        Preview
                      </button>{" "}
                    </div>
                    <br />
                    <div className="pr-2">
                      <button
                        type="button"
                        className="b-button box-border inline-flex items-center text-base leading-normal font-medium rounded cursor-pointer transition 
        duration-200  size-base variant-fill w-full justify-center"
                        style={{
                          backgroundColor: "#e5f0ff",
                          height: "40px",
                          color: "#006aff",
                          width: "130%",
                        }}
                      >
                        Install
                      </button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Customization;
