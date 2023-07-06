import React from 'react';
import './NotFound.css';

export default function NotFound(props) {
    return (
        <div className="NotFound">
           <button onClick={props.resetFilter}><i className='fa fa-arrow-left'></i> Go Back  </button>
           <h2>Data Not Found!</h2>
        </div>
    )
}
