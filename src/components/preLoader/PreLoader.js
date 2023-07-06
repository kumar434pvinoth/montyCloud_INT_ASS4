import React from 'react';
import './PreLoader.css';

export default function PreLoader(props) {
    return (
        <div className="preLoader">
            <div className="loader"></div>
            <h6>{props.message}</h6>
        </div>
    )
}
