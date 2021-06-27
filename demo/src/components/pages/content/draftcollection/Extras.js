import React from 'react'

const Extras = () => {
    return (
        <div >
            <div
                    className=" bg-white shadow  py-8 px-10  relative   lg:w-full  "
                    style={{
                     
                      width: "100%",
                      paddingTop: "10px",
                    }}
                  >
                    <div >
                      <div>
                        <div className="grid grid-cols-3 gap-5 py-3 pt-8">
                          <div>
                            <span className="text-base font-medium">
                            Extra Resources
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            You can offer viewers of this collection<br/>
                             additional files and resources for<br/>
                              download. They will appear under the<br/>
                               Resources tab on the collection player.
                               <br/>
                               <br/>
                               For example: nutrition guides and<br/>
                                templates.
                                <br/>
                                <br/>
                              <strong>  Note:</strong> if you are offering this collection<br/>
                                 for free, the files you add here will also<br/>
                                  be free.

                            </div>
                          </div>
                          <div>
                <span
                  className="   pr-2 p-3 text-base font-medium box-border bg-blue-100"
                  style={{ color: "#006AFF" }}
                >
                  Choose File
                </span>
              </div>

                        </div>
                        <div className="pb-32">
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
    )
}

export default Extras
