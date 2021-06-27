import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Card = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="max-w-md mx-auto bg-white  shadow-md overflow-hidden md:max-w-4xl ">
          <div className="pt-5  pr-20 ">
            <h2 className="  text-black-500  pl-5">Getting Started</h2>

            <p className="mt-1 text-sm text-gray-500 pl-5">
              You're doing well! 0 of 4 steps are completed
            </p>
            <br />
            <hr />
            <div className="grid grid-rows-1 grid-flow-col pt-2 ">
              <div className="col-span-1  " style={{ width: "440px" }}>
                <TabList className="list " style={{ width: "440px" }}>
                  <Tab
                    className={
                      tabIndex === 0
                        ? " text-base text-black-500  p-6"
                        : " text-base text-black-500  pt-6 pb-6 storefront "
                    }
                  >
                    Add Videos
                  </Tab>

                  <Tab
                    className={
                      tabIndex === 1
                        ? " text-base text-black-500  p-6"
                        : " bg-gray-200 text-base text-black-500 pt-6 pb-6 storefront"
                    }
                  >
                    Customize your storefront
                  </Tab>
                  <Tab
                    className={
                      tabIndex === 2
                        ? " text-base text-black-500  p-6"
                        : " bg-gray-200 text-base text-black-500  p-6 storefront"
                    }
                  >
                    Connect payments
                  </Tab>
                  <Tab
                    className={
                      tabIndex === 3
                        ? " text-base text-black-500  p-6"
                        : "bg-gray-200 text-base text-black-500  p-6 storefront"
                    }
                  >
                    Distribute Everywhere
                  </Tab>
                </TabList>
              </div>
              <div className=" ">
                <TabPanel class=" p-4 pr-7">
                  <h3 className=" text-base font-medium text-black-300 text-center pt-16 ">
                    First things first, you need video!
                    <br />
                  </h3>
                  <div className="text-sm text-gray-700 my-2 text-center">
                    Upload your first video to get started.
                  </div>
                  <div className="text-center pt-2">
                    <button
                      className="group bg-blue-500 rounded text-white  px-4 h-10 "
                      style={{ backgroundColor: "#006AFF", fontSize: "14px" }}
                    >
                      Add first video
                    </button>
                    <div className="text-xs text-blue-500 p-2">
                      Learn more about videos
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="pl-16">
                  <div className=" text-base font-medium text-black-300 text-center pt-16 ">
                    Customize your look and feel
                    <br />
                  </div>
                  <div className="text-sm text-gray-700 my-2 text-center ">
                    Design your storefront the way that suites your business.
                  </div>
                  <div className="text-center pt-2 ">
                    <button
                      className="group bg-blue-500 rounded text-white px-4 h-10"
                      style={{ backgroundColor: "#006AFF", fontSize: "14px" }}
                    >
                      Start Customizing
                    </button>
                    <div className="text-xs text-blue-500 p-2">
                      Learn more about Customization
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className=" pl-16">
                  <div className="text-base font-medium text-center text-black-300 text-center pt-16 ">
                    You have connected your payment <br /> gateways
                    <br />
                  </div>
                  <div className="text-sm text-gray-700 my-2 text-center ">
                    Connect to Paypal ,Stripe,or Unscreen gateway.
                  </div>
                  <div className="text-center pt-2">
                    <button
                      className="group bg-blue-500 rounded text-white px-4 h-10 fomt-Inter"
                      style={{ backgroundColor: "#006AFF", fontSize: "14px" }}
                    >
                      Take me to last step
                    </button>
                    <div className="text-xs text-blue-500 p-2">
                      Learn more about payments
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="pl-14 ">
                  <div className="text-base font-medium text-center text-black-300 text-center pt-16">
                    Ready to elevate your game?
                    <br />
                    <div className="text-sm text-gray-700 my-2 text-center  pt-2">
                      Get your own native OTT apps and distribute your content
                      on all major mobile and TV devices.
                    </div>
                  </div>

                  <div className="text-center pt-2">
                    <button
                      className="group bg-blue-500 rounded text-white px-4 h-10"
                      style={{ backgroundColor: "#006AFF", fontSize: "14px" }}
                    >
                      Get started with OTT
                    </button>
                    <div className="text-xs text-blue-500 p-2">
                      Learn more about distribution
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Card;
