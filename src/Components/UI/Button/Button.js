import React from 'react';

const Button = props => (
    <button type={props.type} className="btn btn-secondary" onClick={props.onClick}>
        {props.children}
    </button>
);

export default Button;