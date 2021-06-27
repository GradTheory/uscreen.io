import React,{useState} from "react";
import Dashboard from "./Dashboard";
import Dropdown from "./Dropdown";
import { BrowserRouter as Router, Switch, Route, Link ,useParams,useLocation,} from "react-router-dom";
import Content from "./Content";
import People from "./People";
import Subscription from "./Subscription";
import Sales from "./Sales";
import Marketing from "./Marketing";
import Setting from "./Setting";
import Distrubution from "./Distrubution";
import Bundles from "./Bundles";
import Customization from "./Customization";
import Analytics from "./Analytics";

const Navbar = () => {

const [active, setActive] = useState('dashboard',)

  return (
    <div>
    <Router>
      <div className="sidenav border shadow  "  >
        <div className="flex flex-col  px-4 ">
          <div className="flex  leading-5  py-5" style={{paddingBottom:"16px",paddingLeft:"16px,",paddingRight:"12px",paddingTop:"8px"}}>
            <span>
              <img
                className="h-9 object-cover w-56 "
                src="https://res.cloudinary.com/softwarepundit/image/upload/c_limit,dpr_1.0,f_auto,h_1600,q_auto,w_1600/v1/software/uscreen"
                alt="unscreen logo"
              />
            </span>
          </div>
          <Link to="/dashboard">
          <a href="/" className={active == 'dashboard' ? 'flex active': 'flex'}  onClick={ () =>setActive('dashboard')} >
            <span >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 
        0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </span>
            <span className="px-2  font-Inter,Helvetica text-sm 
         
             " >
              Dashboard
            </span>
          </a>
          </Link>
          <Link to="/content">
         <a href="/"   className={active == 'content' ? 'flex active': 'flex'}  onClick={() => setActive('content')}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Content</span>
          </a>
          </Link>
          <Link to="/people" >
          <a href="#/"  className={active == 'people' ? 'flex active': 'flex'}  onClick={() => setActive('people')}>
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span className="px-2 text-sm font-Inter,Helvetica" >People</span>
          </a>
          </Link>
          <Link to="/subscription">
          <a href="#/"  className={active == 'subscription' ? 'flex active': 'flex'}  onClick={() => setActive('subscription')}>
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
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Subscription</span>
          </a>
          </Link>
          <Link to="/bundles">
          <a href="#/"  className={active == 'bundles' ? 'flex active': 'flex'}  onClick={() => setActive('bundles')}>
            <span>
              <svg
                class="w-6 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Bundles</span>
          </a>
          </Link>
          <Link to="/sales">
          <a href="#/"  className={active == 'sales' ? 'flex active': 'flex'}  onClick={() => setActive('sales')}>
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Sales</span>
          </a>
          </Link>
          <Link to="/marketing">
          <a href="!#"  className={active == 'marketing' ? 'flex active': 'flex'}  onClick={() => setActive('marketing')}>
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
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Marketing</span>
          </a>
          </Link>
          <Link to="/customizatiom">
          <a href="#/"  className={active == 'customizatiom' ? 'flex active': 'flex'}  onClick={() => setActive('customizatiom')}>
            <span>
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
                  stroke-width="1"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Customization</span>
          </a>
          </Link>
          <Link to="/analytics">
          <a href="!#"  className={active == 'analytics' ? 'flex active': 'flex'}  onClick={() => setActive('analytics')}>
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
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Analytics</span>
          </a>
          </Link>
          <Link to="/distribution">
          <a href="/#"  className={active == 'distribution' ? 'flex active': 'flex'}  onClick={() => setActive('distribution')}>
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Distribution</span>
          </a>
          </Link>
          <Link to="/setting">
          <a href="/#"  className={active == 'setting' ? 'flex active': 'flex'}  onClick={() => setActive('setting')}>
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
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica" >Settings</span>
          </a>
          </Link>
          <br/>
          <br/>

          <a href="/#"  className={active == 'storefront' ? 'flex active': 'flex'}  onClick={() => setActive('storefront')}>
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
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </span>
            <span className="px-2  text-sm font-Inter,Helvetica"  >Storefront</span>
          </a>
         
        </div>
         <div >
          <Dropdown />
        </div>
      </div>

      
      <Switch>
             
              <Route exact path="/content">
                  <Content/>
              </Route>
              <Route exact path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/people">
                  <People/>
              </Route>
              <Route path="/subscription">
                  <Subscription/>
              </Route>
              <Route path="/sales">
                  <Sales/>
              </Route>
              <Route path="/marketing">
                  <Marketing/>
              </Route>
              <Route path="/setting">
                  <Setting/>
              </Route>
              <Route path="/distribution">
                  <Distrubution/>
              </Route>
              <Route path="/bundles">
                  <Bundles/>
              </Route>
              <Route path="/customizatiom">
                  <Customization/>
              </Route>
              <Route path="/analytics">
                  <Analytics/>
              </Route>
            </Switch>
    

   
      </Router>
    </div>
  );
};

export default Navbar;
