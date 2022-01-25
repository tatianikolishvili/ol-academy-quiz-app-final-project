import React from 'react';

const Button = ({ answer }) => (
    <button className='bg-white p-4 text-purple-800 font-semibold rounded shadow'>
        {answer}
    </button>
);
const Result = ({
    handleAnswer,
    data: { question, correct_answer, incorrect_answers},
 }) => {
    const checkAnswer = [correct_answer, ...incorrect_answers];
    return (
        <div>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className="text2-3xl" dangerouslySetInnerHTML={{ _html: question }}/>
            </div>
                <div className='grid cols-2 gap-6 mt-4'>
                    <Button onClick ={() => handleAnswer(checkAnswer[0])} answer={checkAnswer[0]}/>
                    <Button onClick ={() => handleAnswer(checkAnswer[1])} answer={checkAnswer[1]}/>
                    <Button onClick ={() => handleAnswer(checkAnswer[2])} answer={checkAnswer[2]}/>
                    <Button onClick ={() => handleAnswer(checkAnswer[3])} answer={checkAnswer[3]}/>
                </div>
        </div>
    );
 };


export default Result;