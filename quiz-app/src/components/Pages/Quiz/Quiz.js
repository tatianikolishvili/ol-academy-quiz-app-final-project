import React, {useEffect, useState} from 'react';
import { Result } from '../..';

import "./Quiz.css";
const API_URL= 'https://opentdb.com/api.php?amount=4&category=26&difficulty=easy';

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
        <h2 className='text-white'>hjhkjhkj</h2>
    ); 
};

export default Quiz;