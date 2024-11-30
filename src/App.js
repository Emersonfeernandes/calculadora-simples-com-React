import React, { useState } from "react";
import * as math from 'mathjs';
import ResultContainer from './result/index';
import Input from './Input/index';
import Button from './Button/index';
import "./App.css";

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  let resultComponent = null;
  //const handleInputChange = (event) => {
    //setExpression(event.target.value);
  //};

  const handleSubmit = () =>{
    try{
      var r = eval(expression)
      setResult(r); 
    } catch {
      setResult("Erro");
    }
    resultComponent = <ResultContainer expression={expression} result={result} />;
  };
  if (handleSubmit) {
    console.log("App Renderizado");  
  }
  

  const handleClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const clearInput = () => {
    setExpression("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculadora</h1>
        <Input expression={expression} />
        <div className="buttons">
          {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"].map((num) => (
            <button key={num} onClick={() => handleClick(num)}>
              {num}
            </button>
          ))}
          {["+", "-", "*", "/", "**"].map((op) => (
            <button key={op} onClick={() => handleClick(op)}>
              {op}
            </button>
          ))}
          <button onClick={clearInput}>C</button>
          <button onClick={handleSubmit}>=</button>
        </div>
      </div>
      <div className="space"></div>
      {<ResultContainer expression={expression} result={result} />}
    </div>
  );
}

export default App;