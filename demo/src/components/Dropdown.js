import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  const openDropdown = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const closeDropdown = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="dropdown ">
        {!open && (
          <div>
            <div
              className="flex px-8 font-Inter,Helvetica pt-2"
              onClick={openDropdown}
              style={{ paddingLeft: "18px" }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </span>
              <span className="text-gray-800 text-base pl-2 ">Help</span>
            </div>
            <br />

            <div className="button text-sm bg-gray-100" onClick={openDropdown}>
              {" "}
              Sai Teja
              <br />
              <span className="text-xs pl-1 text-gray-400 bg-gray-100">
                S21
              </span>
            </div>
            {/* <span className="text-xs pl-6 text-gray-300">Unscreen.v.10</span> */}
          </div>
        )}

        <br />

        {open ? (
          <ul className="font-Inter,Helvetica text-sm py-2">
            <li onClick={closeDropdown}>
              <a href="#Create Page ">Manage Team</a>
            </li>
            <li onClick={closeDropdown} className="py-2">
              <a href="#Manage Pages">Billing</a>
            </li>
            <li onClick={closeDropdown}>
              <a href="#Create Ads " className="flex ">
                <span> Sign out</span>
                <span className="px-2 text-gray-800 text-sm">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
              </a>
            </li>
            {/* <li onClick={closeDropdown}>
              <a href="#Manage Ads">Manage Ads</a>
            </li> */}

            <br />
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Dropdown;
