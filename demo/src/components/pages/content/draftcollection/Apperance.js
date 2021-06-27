import React from "react";

const Apperance = () => {
  return (
    <div>
      <div
        className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
        style={{
          height: "100%",
          width: "90%",
          paddingTop: "10px",
         
        }}
      >
        <div>
          <div>
            <div className="grid grid-cols-3 py-3 pt-8">
              <div>
                <span className="text-base font-medium">Categories</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                  Create a new or pick one or multiple <br />
                  categories to organize your collection
                  <br />
                  in your Catalog page.
                  <br />
                  Tip: To manage your Categories in-
                  <br />
                  depth, go to Content Categories.
                </div>
              </div>
                 <div className="flex inline p-3 pr-3"    style={{width:"160%"}}>
              <div>
                <span
                  className="   p p-1 text-xs  box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                   DRAFT CATEGORY
                </span>
              </div>
              <div>
                <span
                  className="   pr-2 p-1 text-xs  box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  DRAFT CATEGORY
                </span>
              </div>
              <div>
                <span
                  className="   pr-2 p-1 text-xs text-white  box-border bg-blue-100 hover:bg-blue-500"
                  style={{ color: "#006AFF" }}
                >
                  DRAFT CATEGORY
                </span>
              </div>
              </div>
            </div>
          
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5  pt-12">
              <div>
                <span className="text-base font-medium">Catalog Image</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                  This image will appear as a thumbnail
                  <br />
                  in Catalog. Recommended Resolution:
                  <br />
                  1480x840px
                </div>
              </div>

              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                Upload Image
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5  pt-12">
              <div>
                <span className="text-base font-medium">Trailer Video</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                  Choose a video to be used as a trailer <br />
                  for this collection. You may also <br />
                  consider it a preview or a sneak peek.
                </div>
              </div>

              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  Choose Video
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5  pt-16">
              <div>
                <span className="text-base font-medium">Author</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                  Assign an author for this collection.
                  <br />
                  Tip: To manage your authors, go to <br />
                  Content Authors
                </div>
              </div>
              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  Choose Author
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5  pt-16">
              <div>
                <span className="text-base font-medium">Featured Category Image</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                This image will appear for this<br/>
                 collection in a feature category slider <br/>
                 on Catalog page. Recommended<br/>
                  Resolution: 1900x800px
                </div>
              </div>
              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                 Upload Image
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5  pt-16">
              <div>
                <span className="text-base font-medium">Featured Category Video</span>
                <div className="text-gray-700 text-sm font-light wt-64 ">
                Pick a video to appear as a <br/>
                 background video for the Catalog <br/>
                 slider banner. This video should be <br/>
                 max 1:00 minute long - the shorter, the<br/>
                  better. Recommended resolution: 1900x800px

                </div>
              </div>
              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  Choose Video
                </span>
              </div>
            </div>
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

export default Apperance;
