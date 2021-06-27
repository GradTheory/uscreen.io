import React, { useState } from "react";

import Modal from "react-modal";
import profile from "./images/profile.jpg"

const customStyles = {
  content: {
    top: "50%",
    position: "fixed",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "0%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
  },
};

const Model = ({ head1,head2, name,msg,msg2 }) => {
  const [counter, setCounter] = useState(true);


  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const changer = () => {
    setCounter(false);
  };
  return (
    <div>
      <span onClick={(e) => openModal(e)}>{name}</span>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between">
          <div className="flex justify-start">
            <img src={profile}  alt="profile"    width="30px" style={{borderRadius:"50%"}}/>
            <p className="text-sm pl-6 pt-1">
              <b>Mathew</b> from unscreen
            </p>
          </div>
          <div className="flex">
            <span onClick={closeModal}>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="text-sm pb-3 pt-2">
          {" "}
          <b>{head1} </b> {head2}{" "}
      
        </div>
        
        <div className="text-sm text-gray-500">
          {counter ?   msg.map(m => ( <p>{m}<br/> </p>   ))  :     msg2.map(m => ( <p>{m}<br/> </p>   ))}
      
    
      
      
        </div>


        <div>
       
          <div className="flex justify-between">
         
       
          <div className="text-sm " style={{paddingLeft:"40%",paddingTop:"12px"}}>
     
          {counter ? <div className="pl-22 tex-xs"> 1 of 1 </div> : <div className="pl-22 text-xs"> 2 of  2</div>}
          </div>
            <div className=" " >
         
            <button
              className="group  rounded text-white  text-xs   p-3  mx-auto btn hover-blue"
              style={{ width: "105%", fontSize: "17px" }}
              onClick={changer}
            >
            <a className="text-sm">  Next  </a>
            </button>
            </div>
         
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
