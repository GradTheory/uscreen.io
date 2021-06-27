import React from 'react'

const Dripsetting = () => {
    return (
        <div>
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
                            Drip Playlist
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            Drip settings allow you to delay the release of videos for a set number of days after a customer first accesses the collection. You can
                              <br />
                              also set up email notifications to be sent when the next video is available.

                            
                            </div>
                          </div>
                          <br/>
                        
                          <br/>
              <div className="pb-64">
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
        </div>
    )
}

export default Dripsetting
