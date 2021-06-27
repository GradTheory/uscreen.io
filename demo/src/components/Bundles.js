import React from 'react'

const Bundles = () => {
    return (
        <div    style={{ backgroundColor: "#f7fafc" }}>
                <div className="px-56">
          <h1 className="text-2xl mb-2 pl-12 pt-12 ">Bundles</h1>
          <p className="text-gray-600 pl-12 ">
          Create and manage bundles for special promotions or offers.


          </p>
        </div>
        <br/>
        <div style={{paddingLeft:"13%"}}>
        <div
              className=" bg-white shadow-md overflow-hidden py-10 p-6  border border-red  mx-auto "
              style={{ height: "150%",width:"90%", }}
            >
              <div>
                <div>
                  <br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="67" height="105" viewBox="0 0 67 105" className="mx-auto">
    <g fill="none" fill-rule="evenodd">
        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.331 62.581l24.62-13.996 24.62 13.996v25.497c0 1.544-.836 2.97-2.194 3.741l-20.232 11.502a4.445 4.445 0 0 1-4.388 0L12.525 91.82a4.306 4.306 0 0 1-2.194-3.74V75.622"/>
        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.331 62.581l-8.688 1.05c-.7.084-.885.998-.272 1.34l22.03 12.283a2.97 2.97 0 0 0 2.017.317l9.844-1.948"/>
        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M59.571 62.581l-24.31 13.042-24.93-13.042"/>
        <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34.951 48.586l5.418-6.068a1.476 1.476 0 0 1 1.829-.296l22.81 12.966c.399.227.487.757.183 1.099l-5.62 6.295"/>
        <path stroke="#D7DFE2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32.728 59.974c0-.67-.022-1.337-.065-2"/>
        <path stroke="#D7DFE2" stroke-dasharray="3.912,3.912" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M32.158 54.096c-1.806-9.212-7.797-17.249-16.452-21.656-4.172-2.123-9.3-.46-11.376 3.688-2.171 4.341.286 9.546 5.056 10.71 4.375 1.068 8.743-1.777 9.457-6.16l2.718-16.709"/>
        <path stroke="#D7DFE2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.874 22.048l.321-1.975"/>
        <path stroke="#006AFF" stroke-linecap="round" stroke-width="2" d="M49 89.071L54.15 86"/>
        <path stroke="#006AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.224 8.137c.027 1.473-1.163 2.688-2.659 2.715-1.495.026-2.73-1.146-2.756-2.618-.028-1.473 1.163-2.688 2.658-2.715 1.496-.027 2.73 1.145 2.757 2.618z"/>
        <path stroke="#006AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27.49 4.845C27.45 2.682 25.638.961 23.441 1c-2.197.04-3.945 1.825-3.905 3.987.04 2.163 1.852 3.884 4.05 3.845 2.196-.039 3.944-1.824 3.904-3.987z"/>
        <path fill="#006AFF" d="M25.112 11.083c.031 1.689-1.335 3.083-3.05 3.114-1.716.03-3.132-1.314-3.163-3.003-.032-1.69 1.334-3.083 3.05-3.114 1.715-.031 3.131 1.314 3.163 3.003"/>
    </g>
</svg>

                </div>
                <div className="text-lg text-center text-black font-medium">
                Your bundles will be shown here
                </div>
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                Add a new bundle by clicking the button below
                </div>
                <br />
                <div className="text-center">
                    
                <button
                    className="group  rounded text-white   p-2   btn hover-blue"
                    style={{ width:"170px", fontSize: "17px" }}
                  >
                        <div className="grid grid-flow-col auto-cols-max ">
                     <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <div >
                  Add New Bundle
                    </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            </div>

        <br/>
    
      
       
      
       
        </div>
    )
}

export default Bundles
