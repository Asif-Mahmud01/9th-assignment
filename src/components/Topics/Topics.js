import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quixLogo from '../Images/quix-logo.jpeg'
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizes = useLoaderData()
    console.log(quizes)
    return (
