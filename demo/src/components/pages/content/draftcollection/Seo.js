import React from 'react'

const Seo = () => {
    return (
        <div>
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
                              SEO Title
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            The title you set here will appear in <br/>
                             search engine results, like Google <br/>
                              Search. It will not be visible on your <br/>
                               website or in the apps.

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
                            URL Handle
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            Set the permalink to your collection <br/>
                                                          page.

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
                            SEO Description
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            This description will appear in the <br/>
                             search engine results and will not be <br/>
                              visible on your website or in the apps.

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
                        Tags
                            </span>
                            <div className="text-gray-700 text-sm font-light wt-64 ">
                            Your users will use tags to search for <br/>
                             relevant content in your catalog.


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
        </div>
    )
}

export default Seo;
