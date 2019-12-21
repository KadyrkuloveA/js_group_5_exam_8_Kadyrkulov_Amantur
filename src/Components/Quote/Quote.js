import React from 'react';
import './Quote.css';

const Quote = props => {
    return (
        <blockquote className="otro-blockquote">
            {props.text}
            <span>{props.author}</span>
            <button className='mbtn del' onClick={props.delQuote}>delete</button>
            <button className='mbtn edit' onClick={props.editQuote}>edit</button>
        </blockquote>
    );
};

export default Quote;