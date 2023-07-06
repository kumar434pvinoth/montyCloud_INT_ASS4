import React, { useState, useEffect, createRef, useRef, } from 'react';
import './SearchBox.css';
import PreLoader from '../preLoader/PreLoader';     
import ListOfCoins from '../listOfCoins/ListOfCoins';

import Axios from 'axios';
let getBitCoinsList = 'https://content.guardianapis.com/search?api-key=test&q=bitcoin&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10';


export default function SearchBox(props) {
  // bitcoin
  const [itemList, setItemList] = useState([]);   
  const [searchText, setSearchText] = useState('');
  const [newsList, setNewsList] = useState([]);                     
  const [loader, setLoader] = useState(false);
  const [textNull, setTextNull] = useState(false);
  const [itemListShow, setItemListShow] = useState(false);                     

  const inputVal = createRef();   
  const getTextVal = (e) => {
    let item = e.target.value;
    setSearchText(item);
  };
  const resetFilter = (e) => {
    setItemListShow(false);
    setLoader(false);
    setSearchText('');
  };
  const handleClickTodos = () => {
    if(searchText !== '') {
      setLoader(true);
      Axios.get(`https://content.guardianapis.com/search?api-key=test&q=${searchText}&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10`).then((res) => {
        console.log(res.data.response.results);
        setItemList(res.data.response.results);
        setItemListShow(true);
    }).catch((err) => {
      console.log(err);
      setItemListShow(false);
    });
    }                                                                            
    else {                                           
      setTextNull(true);                      
      setTextNull(true);
    }
    
  };
  useEffect(() => {
   
  }, []);
  return (
    <>
    {!itemListShow ? 
    <div className='todoWrapperMain'>
      {loader && <PreLoader  message={'Loading..'}/> }
      <div className="todoWrapper">
        <div className="todosInnerWrapper">
        <h1> News Lister</h1>
          <div className="todosInnerWrappercenrwer">
          <h4> Enter Search Text </h4>
          <div className="todoListText">
            <div className='textbox'>
              <input ref={inputVal} type="text" placeholder="Type Here! " onChange={getTextVal} />
              {textNull && <div className='errorText'>               
                <span>You must enter a search text</span>
              </div>}
            </div>
            <button  onClick={handleClickTodos}> Submit </button>
          </div>
          </div>
        </div>
      </div>
    </div>
    : <ListOfCoins searchText={searchText} itemList={itemList} resetFilter={resetFilter}/> } 
    </>
  );
}
