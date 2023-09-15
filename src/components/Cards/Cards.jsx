import React, { useEffect, useState } from 'react';
import './Card.css'
import Courses from '../Courses/Courses';
import PurchasedCourses from '../PurchasedCourses/PurchasedCourses';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [courses, setCourses] = useState([])
    const [names, setNames] = useState([])
    const [remainingHour, setRemainingHour] = useState(20)
    const [totalPrice, setTotalPrice] = useState(0)
    // console.log(remainingHour);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleCard = (course) => {
        const totalRemainingHour = remainingHour - course.credit
        const isTrue = names.find(item => item.id === course.id)
        if (isTrue || totalRemainingHour < 0) {
            toast('The course is already selected')
        }
        else {
            setRemainingHour(totalRemainingHour)
            const newNames = [...names, course]
            setNames(newNames)
            const price = totalPrice + course.price
            setTotalPrice(price)
        }
    }


    return (
        <div className=' flex gap-4'>
            <div className='w-3/4 grid grid-cols-3 gap-4'>
                {
                    courses.map(course => <Courses
                        handleCard={handleCard}
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
                <ToastContainer></ToastContainer>
            </div>
            <PurchasedCourses
                names={names}
                remainingHour={remainingHour}
                totalPrice={totalPrice}
            ></PurchasedCourses>
        </div>
    );
};

export default Cards;