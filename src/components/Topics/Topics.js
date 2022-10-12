import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quixLogo from '../Images/quix-logo.jpeg'
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
        <div>
            <div className='quiz-logo'>
            <img src={quixLogo} alt="" />
            </div>
            <div  className='topics'>
            {
                quizes?.data?.map(quiz => <Quiz
                key={quiz.id}
                quiz={quiz}
                ></Quiz>)
            }
            </div>
        </div>
    );
};

export default Topics;