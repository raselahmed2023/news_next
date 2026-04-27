import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";


const RightSideBar = () => {
    return (
        <div className='space-y-3 mt-4'>
             <span className=" flex flex-col items-center border p-2 border-green-300 rounded-md"> Facebook <FaFacebook /></span>
        <span className=" flex flex-col items-center border p-2 border-gray-300 rounded-md"> Instagram <BsInstagram /></span>
        <span className=" flex flex-col items-center border p-2 border-gray-300 rounded-md">Google <FaGoogle /> </span>
            
        </div>
    );
};

export default RightSideBar;