import React from 'react'

const Playlist = () => {
    return (
        <div>
            <div
                    className=" bg-white shadow  py-8 px-10  relative   lg:w-full "
                    style={{
                      height: "100%",
                      width: "100%",
                      paddingTop: "10px",
                    }}
                  >
                    <div >
                      <div>
                        <div >
                          <div className="pt-5">
                            <span className="text-base font-medium">
                              Collection Title
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            Add videos you want included in this collection. You can use dividers to separate your content into titled sub-groups. <strong> Note: </strong> if your
                              <br />
                              collection is free, all your resources will be free, as well.
                            
                            </div>
                          </div>
                          <div className="flex inline justify-end pt-7">
                          <div className="pr-4">
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  Add Video
                </span>
              </div>
              <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                 Add divider
                </span>
              </div>
              </div>
              <div className="pb-48">
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
                  </div>
        </div>
    )
}

export default Playlist
