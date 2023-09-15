import React from 'react';
import './Courses.css'
import { BsCurrencyDollar, BsBook } from "react-icons/bs";

const Courses = ({ course, handleCard }) => {
    const { id, image, name, credit, price, details } = course
    return (
        <>
            <div className='card p-4 rounded bg-white space-y-3 text-start'>
                <div className=' w-full h-32 mx-auto rounded'>
                    <img src={image} alt="" className='w-full h-full' />
                </div>
                <h2 className='text-[17px] font-semibold'>{name}</h2>
                <p className='text-sm font-normal text-[rgba(28,27,27,0.60)]'>{details}</p>
                <div className='flex space-x-2 items-center'>
                    <p className='text-lg text-[rgba(28,27,27,0.60)]'>
                    <BsCurrencyDollar/></p>
                    <p className='text-base font-medium text-[rgba(28,27,27,0.60)]'>Price : {price}</p>
                    <p className='text-lg text-[rgba(28,27,27,0.60)]'><BsBook /></p>
                    <p className='text-base font-medium text-[rgba(28,27,27,0.60)]'>Credit : {credit}hr</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={() => handleCard(course)} className='bg-[#2F80ED] px-24 py-1 text-lg font-semibold text-white rounded-md'>Select</button>
                </div>
            </div>
        </>
    );
};

export default Courses;