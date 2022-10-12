import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'

const Quiz = ({quiz}) => {
    const {logo, name, id} = quiz;
    // const [quizes, setQuizes] = useState([])
    // useEffect()
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-details'>
                <h2>{name}</h2>
                <div className="card-actions ">
                        <Link to={`/quizdetails/${id}`}><button className="btn btn-primary">Start Practice</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz; 