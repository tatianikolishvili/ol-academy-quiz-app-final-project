import React, {useEffect, useState} from 'react';
import Result from '../Result/Result';
import "./Quiz.css";
const API_URL= 'http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then((res) =>res.json())
        .then((data) => {
            setQuestions(data.results);
        });
    }, []);
    return questions.length > 0  ?( 
        <div className="questions">
            <Result data={Result[0]}/>
        </div>
    ) : (
        <h2 className='text-white'></h2>
    ); 
};

export default Quiz;