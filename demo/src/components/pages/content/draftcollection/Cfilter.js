import React from "react";

const Cfilter = () => {
  return (
    <div>
      <div
        className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
        style={{
          height: "70%",
          width: "100%",
          paddingTop: "10px",
        }}
      >
        <div>
          <div>
            <div className="grid grid-cols-3 gap-5  pt-8">
              <div>
                <span className="text-base font-medium">
                  Assign Custom Filters
                </span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                  Assign custom filter values for this
                  <br />
                  collection to help your users find and <br />
                  sort through your content based on <br />
                  your customs filters in the catalog. <br />
                  Draft Filter
                </div>
              </div>
              <div className="pl-10">
                <label className="text-sm font-medium">Draft Filter </label>
                <select className="dfilter  ">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3"> </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5  ">
              <div></div>

              <div className="pl-10" style={{height:"   200%"}}>
                <label className="text-sm font-medium">Draft Filter </label>
                <select className="dfilter  ">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3"> </option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5  pt-12 flex justify-left ">
              <div></div>
              <div className="pl-10 " style={{height:"   200%"}}>
                <label className="text-sm font-medium">Draft Filter </label>
                <select className="dfilter  ">
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3"> </option>
                </select>
              </div>
            </div>
          </div>
          <div className="pb-24">
            <br />
            <br />
            <button
              className="group  rounded text-white  text-xs p-2  mx-auto btn hover-blue"
              style={{ width: "70px", fontSize: "17px" }}
            >
              <a className="text-sm"> Save </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cfilter;
