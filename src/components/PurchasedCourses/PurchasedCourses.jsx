import React from 'react';
import './PurchasedCourses'

const PurchasedCourses = () => {
    return (
        <div className='w-1/4 p-4 rounded bg-white space-y-4 text-start'>
            <h3 className='text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining 7 hr</h3>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h2 className='text-xl font-bold'>Course Name</h2>
            <div>
                <li className='text-base font-normal'>1 Introduction to c programming</li>
                <li>1 Introduction to c programming</li>
                <li>1 Introduction to c programming</li>
            </div>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h3 className='text-base font-medium'>Total Credit Hour : 13</h3>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h2 className='text-base font-semibold'>Total Price : 48000 USD</h2>
        </div>
    );
};

export default PurchasedCourses;