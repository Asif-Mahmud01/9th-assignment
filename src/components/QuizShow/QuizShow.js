import React from 'react';
import QuizDisplay from '../QuizDisplay/QuizDisplay';

const QuizShow = ({data}) => {
    const store = data.questions
    return (
        <div>
            <h3>Quiz of JavaScript</h3>
            {
                store.map(data => <QuizDisplay key={data.id} data={data}></QuizDisplay>)
            }
        </div>
    );
};

export default QuizShow;