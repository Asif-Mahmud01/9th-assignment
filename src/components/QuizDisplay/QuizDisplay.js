import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './QuizDisplay.css'

const QuizDisplay = (param) => {
    const { question } = param.data
    let opt = param.data.options.map(param => param)
    let cAnswer = param.data.correctAnswer;

    let checker = (params) => {

        if (params === cAnswer) {
            toast.success('Correct Answer')
        }
        else {
            toast.error("Wrong Answer")
        }
    }

    let correctAnswer = () => {
        toast(() => (
            <div>
                <span className='font-bold'>Correct Answer: </span> {param.data.correctAnswer}
            </div>
        ));
    }
    return (
        <div>
            <div><ToastContainer /></div>
            <div className="card ">
                <div className="card-body">
                    <p className='card-question'>Question: {question.slice(3, -4)}</p>
                    <div className="card-options">
                        <button onClick={(e) => checker(e.target.value)}  value={opt[0]} >{opt[0]}</button>
                        <button onClick={(e) => checker(e.target.value)}  value={opt[1]} >{opt[1]}</button>
                        <button onClick={(e) => checker(e.target.value)}  value={opt[2]} >{opt[2]}</button>
                        <button onClick={(e) => checker(e.target.value)}  value={opt[3]} >{opt[3]}</button>
                        <br></br>
                        <button onClick={() => correctAnswer()} className="eye-btn">
                            <img src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizDisplay;