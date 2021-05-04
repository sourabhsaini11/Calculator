import './App.css';
import React,{ useState } from 'react';
//Components
import Number from "./components/Number";
import Result from "./components/Result";
import Clear from "./components/Clear";
//GlobalStyled
import GlobalStyle from './components/GlobalStyle';
import styled from "styled-components";
//Math Library
import * as math from "mathjs";

function App() {
  const [sum,setSum]=useState("");

  const inputHandler = (value) => {
    setSum(sum+value);
  }
  const evalHandler = () => {
    setSum(math.evaluate(sum));
  }
  return (
    <div className="App">
      <GlobalStyle />
      <Calc>
        <Result sum={sum}/>
        <Numbers>
            <Number inputHandler={inputHandler} val={7}/>
            <Number inputHandler={inputHandler} val={8}/>
            <Number inputHandler={inputHandler} val={9}/>
            <Number inputHandler={inputHandler} val={"/"}/>
        </Numbers>
        <Numbers>
            <Number inputHandler={inputHandler} val={4}/>
            <Number inputHandler={inputHandler} val={5}/>
            <Number inputHandler={inputHandler} val={6}/>
            <Number inputHandler={inputHandler} val={"*"}/>
        </Numbers>
        <Numbers>
            <Number inputHandler={inputHandler} val={1}/>
            <Number inputHandler={inputHandler} val={2}/>
            <Number inputHandler={inputHandler} val={3}/>
            <Number inputHandler={inputHandler} val={"+"}/>
        </Numbers>
        <Numbers>
            <Number inputHandler={inputHandler} val={"."}/>
            <Number inputHandler={inputHandler} val={0}/>
            <Number inputHandler={()=>evalHandler()} val={"="}/>
            <Number inputHandler={inputHandler} val={"-"}/>
        </Numbers>
        <Clear clearHandler={ ()=> setSum("")}/>
      </Calc>
    </div>
  );
}
const Calc=styled.div`
  
`;
const Numbers = styled.div`
  display:flex;
`;

export default App;
