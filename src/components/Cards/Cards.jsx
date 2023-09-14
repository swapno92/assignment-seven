import React, { useEffect, useState } from 'react';
import './Card.css'
import Courses from '../Courses/Courses';
import PurchasedCourses from '../PurchasedCourses/PurchasedCourses';

const Cards = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    // console.log(courses);

    return (
        <div className=' flex gap-4'>
            <div className='w-3/4 grid grid-cols-3 gap-4'>
                {
                    courses.map(course => <Courses key={course.id} course={course}></Courses>)
                }
            </div>

            {/* <Courses></Courses> */}
            <PurchasedCourses></PurchasedCourses>
        </div>
    );
};

export default Cards;