import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h2>what is the purpose of react router?</h2>
            <h2>
            React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL
            </h2>
            <br>
            </br>
            <h2>How does context API works?</h2>
            <h2>
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </h2>
            <br>
            </br>
            <h2>What do we understand as useRef hook?</h2>
            <h2>
            The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </h2>
        </div>
    );
};

export default Blog;