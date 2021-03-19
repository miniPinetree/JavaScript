import React from 'react';
import logo from './logo.svg';
import './style.css';

const Week1 = (props) => {
   
    return(
        <div className="container">  
            <div className="outter">
            <img className="img" src={logo} alt="react"/>
            <h1>나는 <span>{props.name}</span>에 대해 얼마나 알고 있을까?</h1>
            <input className="input"placeholder="내 이름" type="text" ></input>
            <button className="btn">시작하기</button>
        </div>
        </div>
    );
}
export default Week1;