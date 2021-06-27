import React from "react";
import "./Dashboardcard.css";
import Card from "./Card";

const Dashboard = () => {
  return (
    <div
      className=" roadmap justify-center"
      style={{ backgroundColor: "#f7fafc", marginLeft: "200px" }}
    >
      <br />
      <br />

      <div className="px-56">
        <h1 className="text-2xl mb-2 ">Welcome!</h1>
        <p className="text-gray-600 "> What would you like to do today?</p>
      </div>
      <br />

      <Card />
      <br />

      <div className="container flex justify-center  mx-auto bg-white shadow-md overflow-hidden max-w-4xl ">
        <div className=" mx-auto bg-white shadow-md overflow-hidden max-w-4xl   ">
          <div className="card-body">
            <div className="flex">
              <div className="flex-1 p-5">
                <h2>Changelog</h2>
                <div className="board text-sm mr-2">
                  Learn more about recent changes to our platform
                </div>
              </div>
              <div className=" p-4">
                <a href="#" className="flex py-2 ">
                  <span className=" text-blue-600 p-2 text-sm bg-gray-100">
                    <svg
                      className="w-6 h-5 text-blue-600"
                      fill="none"
                      stroke="#006AFF"
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
                    className="  pt-2  pr-3 text-sm bg-gray-100"
                    style={{ color: "#006AFF" }}
                  >
                    See the roadmap
                  </span>
                </a>
              </div>
            </div>

            <div className="flex-auto  font-Helvetica Neue,Arial p-3">
              <span className=" p-2 text-pink-600   bg-pink-100 imp">
                IMPROVEMRNT
              </span>
              <p className=" pt-3 board text-gray ">
                From now on,you can view how many users are returning from your
                free trails when you access our Try Again for free stats.To
                learn how to access it,please read the{" "}
                <span className="text-blue-500">
                  "Try Again For Free Stats"
                </span>{" "}
                guide!
              </p>
              <span className="text-gray-500 text-xs"> May 12, 2021</span>
            </div>
            <hr />
            <div className="flex-auto  font-Helvetica Neue,Arial p-3">
              <span className=" p-2  text-pink-600   bg-pink-100 imp">
                IMPROVEMRNT
              </span>
              <p className=" pt-3  board">
                Your customers can now add your live events to their
                calendars.They will never miss another event!To know how to help
                them,please read the{" "}
                <span className="text-blue-500">
                  "Add Live Events to the Calendar"
                </span>{" "}
                guide!
              </p>
              <span className="text-gray-500 text-xs "> May 4, 2021</span>
            </div>
            <hr />
            <div className="flex-auto  font-Helvetica Neue,Arial p-3">
              <span className=" p-2  text-pink-600  bg-pink-100 imp">
                IMPROVEMRNT
              </span>
              <p className=" pt-3  board">
                Easily seewhich videos have been watched with "Mark as
                Watched".This will help users keep track of all the content they
                already accessed.o enable it and learn more about it, read the{" "}
                <span className="text-blue-500">"Mark Content as Watched"</span>{" "}
                guide!
              </p>
              <span className="text-gray-500 text-xs "> Apr 30 ,2021</span>
            </div>
            <hr />
            <div className="flex-auto  font-Helvetica Neue,Arial p-3">
              <span className=" p-2  text-pink-600  bg-pink-100 imp">
                IMPROVEMRNT
              </span>
              <p className=" pt-3  board">
                {" "}
                Now you can view how many prospecting users are converting into
                paying users from your free trials with our new In Trial
                breakdown! Check our{" "}
                <span className="text-blue-500">
                  "Trail Coversation Analytics"
                </span>{" "}
                guide to make the most out of your free trails!
              </p>
              <span className="text-gray-500 text-xs "> Apr 29, 2021</span>
            </div>
            <hr />
            <div className="flex-auto  font-Helvetica Neue,Arial p-3">
              <span className=" p-2  text-pink-600  bg-pink-100 imp">
                IMPROVEMRNT
              </span>
              <p className=" pt-3  board">
                🎉 You can now easily duplicate your live stream event for easy
                recurring setup! With this release, you can also reuse your
                stream key on future live streams! Read more{" "}
                <span className="text-blue-500">here!</span>
              </p>
              <span className="text-gray-500 text-xs "> Mar 5, 2021</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="max-w-md mx-auto bg-white shadow-md text-center content-center overflow-hidden max-w-4xl">
        <div>
          <div className="md:flex-shrink-0"></div>
          <div className="pl-15 pb-8 pt-8">
            <div className="uppercase tracking-wide  text-sm text-black-500 ">
              Launch Your Native OTT Apps
            </div>

            <a
              href="#"
              className="block mt-1 text-sm leading-tight  font-medium text-grey pt-5 p-6"
            >
              Give your audience more ways to enjoy your content with immaculate
              <br />
              user experience, anytime, anywhere
            </a>

            <div className="text-center">
              <button
                className="group  rounded text-white border-none  p-2 "
                style={{
                  backgroundColor: "#006AFF",
                  width: "180px",
                  fontSize: "14px",
                }}
              >
                Visit distribution tab
              </button>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl h-64">
        <div className="md:flex ">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:w-72 pr-3"
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
              alt="Man looking at item at a store"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-12 ">
            <h1 className="block mt-1  text-black font-bold">
              5 Essential Landing Pages For Your Video Streaming Business
            </h1>
            <p className="mt-2 text-gray-600 font-base  board">
              Landing pages are the cornerstone of a profitable video streaming
              website. Learn about the 5 essential landing pages you need for
              success..
            </p>
            <div className="flex pt-2">
              <button className="group  rounded text-white  p-2 mx-2 btn">
                Read More
              </button>

              <a href="#" className="flex py-2  ">
                <span>
                  <svg
                    className="w-6 h-5"
                    className="w-6 h-6"
                    fill="none"
                    stroke="grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="px-2 text-grey-600 ">7 minutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl h-64">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:w-72 pr-3"
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
              alt="Man looking at item at a store"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-12 font-Helvetica Neue,Arial ">
            <div href="#" className="block mt-1 font-bold ">
              Best Music Licensing Companies For Video Creators
            </div>
            <p className="mt-2 text-gray-600  board">
              Looking for the best music licensing company for your video
              business? Read this to know the 9 top companies and how to pick
              the right one!
            </p>

            <div className="flex pt-2">
              <button className="group  rounded text-white  p-2 mx-2 btn">
                Read More
              </button>

              <a href="#" className="flex py-2  ">
                <span>
                  <svg
                    className="w-6 h-5"
                    className="w-6 h-6"
                    fill="none"
                    stroke="grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="px-2 text-grey-600 ">7 minutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl h-64">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:w-72 pr-3"
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
              alt="Man looking at item at a store"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-12 font-Helvetica Neue,Arial ">
            <div
              href="#"
              className="block mt-1  leading-tight  text-black font-bold "
            >
              3 Email Every Video Business Should Be Sending (According To A
              Professional Email Marketer)
            </div>
            <p className="mt-2 text-gray-600  board">
              Our email marketing specialist Anna gives us the 3 emails every
              video business should send. Read this article to find out what
              they are!
            </p>

            <div className="flex pt-2">
              <button className="group  rounded text-white  p-2 mx-2 btn">
                Read More
              </button>

              <a href="#" className="flex py-2  ">
                <span>
                  <svg
                    className="w-6 h-5"
                    className="w-6 h-6"
                    fill="none"
                    stroke="grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="px-2 text-grey-600 ">7 minutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl h-64">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:w-72 pr-3"
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
              alt="Man looking at item at a store"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-12 font-Helvetica Neue,Arial">
            <div
              href="#"
              className="block mt-1  leading-tight  text-black font-bold"
            >
              5 Interactive Lead Generation Tips for VOD Marketing
            </div>
            <p className="mt-2   text-gray-600  board">
              Learn 5 easy-to-implement ways you can use interactive content to
              generate leads and grow your VOD business.
            </p>

            <div className="flex pt-2">
              <button className="group  rounded text-white  p-2 mx-2 btn">
                Read More
              </button>

              <a href="#" className="flex py-2  ">
                <span>
                  <svg
                    className="w-6 h-5"
                    className="w-6 h-6"
                    fill="none"
                    stroke="grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="px-2 text-grey-600 ">8 minutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl h-64">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:w-72 pr-3"
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg"
              alt="Man looking at item at a store"
              alt="Man looking at item at a store"
            />
          </div>
          <div className="p-12 font-Helvetica Neue,Arial ">
            <div
              href="#"
              className="block mt-1  leading-tight  text-black font-bold"
            >
              6 Online Video Trends You Should Know About in 2021
            </div>
            <p className="mt-2 text-gray-600  board">
              If you’re a marketer or video streaming business owner, check out
              these top 6 online video trends that can help your business grow!
            </p>

            <div className="flex pt-2">
              <button className="group  rounded text-white  p-2 mx-2 btn">
                Read More
              </button>

              <a href="#" className="flex py-2  ">
                <span>
                  <svg
                    className="w-6 h-5"
                    className="w-6 h-6"
                    fill="none"
                    stroke="grey"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                <span className="px-2 text-grey-600 ">8 minutes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="max-w-md mx-auto font-Helvetica Neue,Arial text-center p-6  text-blue-600  text-md bg-gray-100  shadow-md overflow-hidden max-w-4xl h-16 ">
        Visit the blogs
      </div>

      <br />
      <br />
    </div>
  );
};

export default Dashboard;
