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
