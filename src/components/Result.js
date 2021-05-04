import React from 'react';
import styled from "styled-components";

const Result = ({ sum }) => {
    return(
        <Res>
            <h1>{sum}</h1>
        </Res>
    )
}

const Res=styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:20rem;
    height:5rem;
    background-color:black;
    color:wheat;
    outline: 1px solid #888888;
`

export default Result;