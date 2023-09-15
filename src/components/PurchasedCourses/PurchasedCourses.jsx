import React from 'react';
import './PurchasedCourses'

const PurchasedCourses = ({ names,remainingHour,totalPrice,totalHour }) => {
    // console.log(names);
    let count = 1
    return (
        <div className='w-1/4 p-4 rounded bg-white space-y-4 text-start'>
            <h3 className='text-[#2F80ED] text-lg font-bold'>Credit Hour Remaining {remainingHour} hr</h3>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h2 className='text-xl font-bold'>Course Name</h2>
            <div>
                {
                    names.map(name => <p>{count++} {name.name}</p>)
                }
            </div>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h3 className='text-base font-medium'>Total Credit Hour : {totalHour}</h3>
            <hr className='bg-[rgba(28,27,27,0.20)]' />
            <h2 className='text-base font-semibold'>Total Price : {totalPrice} USD</h2>
        </div>
    );
};

export default PurchasedCourses;