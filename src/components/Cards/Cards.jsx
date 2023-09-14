import React from 'react';
import './Card.css'
import Courses from '../Courses/Courses';
import PurchasedCourses from '../PurchasedCourses/PurchasedCourses';

const Cards = () => {
    return (
        <div className=' flex gap-4'>
            <Courses></Courses>
            <PurchasedCourses></PurchasedCourses>
        </div>
    );
};

export default Cards;