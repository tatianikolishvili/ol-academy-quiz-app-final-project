import React from 'react';
const Result = ({
    data: { question, options, answers },
}) => (
    <div>
        <div className='p-10 text-purple-800 rounded-lg shadow-md mb-5 title1'>
                <h2 dangerouslySetInnerHTML={{ __html: question}}></h2>
            </div>
            <div className='btns'>
                <button className='btn shadow-md text-purple-800 rounded-lg p-5'>{options[0]}</button>
                <button className='btn shadow-md text-purple-800 rounded-lg p-5'>{options[1]}</button>
                <button className='btn shadow-md text-purple-800 rounded-lg p-5'>{options[2]}</button>
                <button className='btn shadow-md text-purple-800 rounded-lg p-5'>{options[3]}</button>
            </div>
    </div> 
)

export default Result;