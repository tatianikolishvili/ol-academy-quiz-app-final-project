import React, {useEffect, useState} from 'react';
import Result from '../Result/Result';
import "./Quiz.css";


const API_URL= 'http://my-json-server.typicode.com/DanielBarbakadze/Advanced-JS-and-React-Basics/db';

const Quiz = () => {
    const [quest, setQuest] = useState([]);
    useEffect(() => {
        fetch(API_URL)
        .then((res) =>res.json())
        .then((data) => {
            setQuest(data.questions);
        });
    }, []);
    return quest.length > 0  ?( 
        <div className="questions">
            <Result data={quest[0]}/>
        </div>
    ) : (
        <h2 className='text-white'></h2>
    ); 
};

export default Quiz;