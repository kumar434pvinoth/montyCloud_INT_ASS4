import React, { useState, useEffect, createRef, useRef, } from 'react';
import './ListOfCoins.css';
import Axios from 'axios';
import NotFound from '../notFound/NotFound';        
import DefaultThumb from '../../images/default-image.jpg';


export default function ListOfCoins(props) {           
  return (
    <>
      <div className='listOfBitCoins'>
        <h2> Results for <i>{props.searchText}</i> {props.itemList.length > 0 &&  <button onClick={props.resetFilter}><i className='fa fa-arrow-left'></i> Go Back  </button>  }</h2>
        <div className="listOfBitCoinsWrapper">
          {props.itemList.length > 0 ? props.itemList.map((item, index) => {
            return (
              <div key={item.id} className="listOfBitCoinsItems">
                  <div className="listOfBitCoinsImg">
                      <img src={item.fields.thumbnail ? item.fields.thumbnail : DefaultThumb} />
                  </div>
                  <div className="listOfBitCoinsTitle">
                    <h5> {item.fields.headline} </h5>
                    <div className='keyworsLink'>
                      {item.tags.map((item, index) => {
                        return (
                          <a target="_blank" href={item.webUrl} >
                                <button key={item.id}>
                                      {item.webTitle}
                                </button>
                          </a>
                        )
                      })}
                    </div>
                  </div>
              </div>
            )
          }) : <NotFound resetFilter={props.resetFilter} />}
        </div>
      </div>
    </>
  );
}
