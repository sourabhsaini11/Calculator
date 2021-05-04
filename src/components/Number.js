import React from 'react';
import styled from "styled-components";

const Number = ({ val, inputHandler }) => {
    const numHandler = () => {
        return (!isNaN(val) || val==="." || val==='=')
    }
    return(
        <Button onClick={()=>inputHandler(val)} correct={numHandler()}>
        <h1>{val}</h1>
        </Button>
    );
}

const Button=styled.div`
    height:5rem;
    width:5rem;
    display:flex;
    justify-content:center;
    align-items:center;
   // background-color:#e0e1e6;
   background: ${prop => prop.correct ? '#e0e1e6' : '#fe9241'};
   color: ${prop => prop.correct ? '#888888' : '#ffffff'};
    //border:1px solid  #888888;
   outline: 1px solid #888888;
   &:hover {
       cursor: pointer;
   }
`;

export default Number;