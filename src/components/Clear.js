import React from 'react';
import styled from "styled-components";

const Clear = ({clearHandler}) => {
    return (
    <Clr onClick={()=>clearHandler()}>
        <h2>Clear</h2>
    </Clr>
    );
}

const Clr=styled.div`
 display:flex;
 outline: 1px solid #888888;
 justify-content:center;
 align-items:center;
 width:20rem;
 height:5rem;
 background-color:#e0e1e6;
 color:#888888;
 &:hover {
       cursor: pointer;
   }
`

export default Clear;