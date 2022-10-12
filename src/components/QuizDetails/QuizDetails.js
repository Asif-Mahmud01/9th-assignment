import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShow from '../QuizShow/QuizShow';

const QuizDetails = () => {
    const loader = useLoaderData()
    const dataStore = loader.data
    return (
        <div>
            {
                <QuizShow data={dataStore}></QuizShow>
            }            
        </div>
    );
};

export default QuizDetails;