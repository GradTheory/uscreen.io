import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal2 from "../components/modal"
import Comments from './Comments';
import Push from './Push N';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '0%',
    transform             : 'translate(-50%, -50%)',

  }
};
const People = () => {
  const [active, setActive] = useState('people',)
  

  
    return (
        <div>
            <Router>
      <div>
        <div className=" grid grid-flow-col justify-center   pr-34 pt-12  "   style={{ backgroundColor: "#f7fafc" }}>
          <div className="  bg-white  pt-3 sticky pr-3 justify-center top-0 shadow-md overflow-hidden  " style={{width:"100%",height:"130%"}}>
            <div className="flex grid pb-5">
              <ul className="text-sm leading-5 ">
                <h3 className="text-gray-600 text-xs font-medium px-5 mb-3 " >
                  COMMUNITY
                </h3>
                <li  className={active == 'people' ? 'py-2 px-5 hover:bg-blue-50 text-sm cont active ': 'py-2 px-5 hover:bg-blue-50 text-sm'}  onClick={ () =>setActive('people')}>
                  <Link to="/">People</Link>
                </li>
                <li  className={active == 'comments' ? 'py-2 px-5 hover:bg-blue-50 text-sm cont active ': 'py-2 px-5 hover:bg-blue-50 text-sm'}  onClick={ () =>setActive('comments')}>
                  <Link to="/comments">Comments</Link>
                </li>
               
              </ul>
            </div>

            <div className="flex pb-10">
              <ul className="text-sm leading-5 ">
                <h3 className="text-gray-600 text-xs font-medium px-5 mb-3  ">
                NOTIFICATIONS
                </h3>
                <li  className={active == 'push' ? 'py-2 px-5 hover:bg-blue-50 text-sm cont active ': 'py-2 px-5 hover:bg-blue-50 text-sm'}  onClick={ () =>setActive('push')}>
                <Link to="/push">Push Notifications</Link>
                </li>
               
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <Switch>
            <Route path="/comments">
                <Comments />
              </Route>
               <Route path="/push">
                <Push />
              </Route> 
             
              {/*
              <Route path="/collection">
                <Collection />
              </Route>
              <Route path="/extras">
                <Extras />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route> */}
              
              <Route path="/">
              <div>
        <div className=" grid grid-flow-col   pr-60">
          <div className="max-w-8xl mx-auto ">
            <div className=" bg-white shadow-md overflow-hidden py-3 px-20  relative  lg:w-full " style={{width:"160%",height:"130%"}}>
              <div>
                <div>
                  <br/>
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="185" height="90" viewBox="0 0 185 90" className="mx-auto">
    <g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path stroke="#D7DFE2" d="M138.767 11.737l39.36 4.953a5.89 5.89 0 0 1 5.108 6.58l-7.558 60.072a5.89 5.89 0 0 1-6.58 5.109l-32.435-4.081M137.912 61.494l23.414 2.946M137.912 70.408l16.448 1.962"/>
        <path stroke="#D7DFE2" d="M157.428 32.647a6.488 6.488 0 1 1-12.872-1.62 6.488 6.488 0 0 1 12.872 1.62zM158.85 50.383v-.005a5.964 5.964 0 0 0-5.172-6.664l-8.231-1.035a5.967 5.967 0 0 0-6.665 5.174v.005a1.924 1.924 0 0 0 1.669 2.148l16.25 2.046a1.924 1.924 0 0 0 2.15-1.67zM45.515 11.737L6.155 16.69a5.89 5.89 0 0 0-5.108 6.58l7.558 60.072a5.89 5.89 0 0 0 6.58 5.109L47.62 84.37M46.37 61.494L22.955 64.44M46.37 70.408L29.921 72.37"/>
        <path stroke="#D7DFE2" d="M26.854 32.647a6.488 6.488 0 1 0 12.872-1.62 6.488 6.488 0 0 0-12.872 1.62zM25.432 50.383v-.005a5.964 5.964 0 0 1 5.172-6.664l8.231-1.035a5.967 5.967 0 0 1 6.665 5.174v.005a1.924 1.924 0 0 1-1.669 2.148l-16.25 2.046a1.924 1.924 0 0 1-2.15-1.67zM125.022 87.428H59.445a5.891 5.891 0 0 1-5.89-5.89V7.526a5.891 5.891 0 0 1 5.89-5.89h65.577a5.891 5.891 0 0 1 5.89 5.89v74.012a5.891 5.891 0 0 1-5.89 5.89z"/>
        <path stroke="#000" d="M75.243 60.32h33.981"/>
        <path stroke="#006AFF" d="M82.266 70.684H102.2"/>
        <path stroke="#000" d="M99.93 23.482a7.695 7.695 0 0 1-15.39 0 7.695 7.695 0 1 1 15.39 0zM104.23 44.143v-.005a7.075 7.075 0 0 0-7.076-7.075h-9.84a7.074 7.074 0 0 0-7.075 7.075v.005a2.282 2.282 0 0 0 2.28 2.283h19.428a2.283 2.283 0 0 0 2.283-2.283z"/>
    </g>
</svg>

                </div>
                <div className="text-lg text-center text-black font-medium">
                Your users will be shown here
                </div>
                <div className="mt-1 text-sm text-center font-normal text-gray-600">
                You can invite people manually now by clicking the button below.
                </div>
                <br />
                <div className="text-center">
                  <button
                    className="group  rounded text-white   p-2   btn hover-blue"
                    style={{ width: "20%", fontSize: "17px" }}
                  >
                        <div className="grid grid-flow-col auto-cols-auto">
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
                    Invite People
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <br />
            <p>
              <span style={{ paddingLeft: "45%", paddingTop: "5%" }}>
                <span className="icon" style={{ alignItems: "center" }}>
                  <svg
                    className="w-5 h-5 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span className="text text-sm pl-4">
                  Learn more about <b>Live Events</b>
                </span>
              </span>
            </p>

            <div>
              <div
                className="grid grid-flow-col auto-cols-max "
                style={{ paddingLeft: "35%", paddingTop: "3%" }}
              >
                <a href="#" className="pr-3">
                  <span className="icon" style={{ alignItems: "center" }}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#3388FF"
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
                    className="text text-xs pl-3 "
                    style={{ color: "#3388FF" }}
                  >
                    Read the Guide
                  </span>
                </a>
                <a href="#" className="pr-3">
                  <span className="icon" style={{ alignItems: "center" }}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#3388FF"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </span>
                  <span
                        className="text text-sm pl-3 "
                        style={{ color: "#3388FF" }}
                      >
                         <Modal2 
                      
                         msg={['Getting ready to launch?' ,'','Add your existing contacts and clients here in the People section.',]} 
                         msg2={['You can add people individually or in mass, using the customers name and email' ,'address. ']} 
         name="Take a tour"/>  
                      </span>
                </a>
                <a href="#" className="pr-3">
                  <span className="icon" style={{ alignItems: "center" }}>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="#3388FF"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span
                    className="text text-xs pl-3 "
                    style={{ color: "#3388FF" }}
                  >
                    Watch a video
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
               
              </Route>
              
          
   
         
        </Switch>
          </div>
        </div>
      </div>
    </Router>
    </div>
    )
}

export default People;
