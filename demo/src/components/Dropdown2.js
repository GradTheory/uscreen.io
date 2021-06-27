import React, { useState } from "react";
import Dropdown from 'react-dropdown';
import './Calendar.css';


const options = [
    'All videos', 'published', 'scheduled','unpublished','transcoding'
  ];

 const defaultOption = options[0];


const Dropdown2 = () => {

  return (
    
   <div>

       <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
       
   </div>
  );
};

export default Dropdown2;
