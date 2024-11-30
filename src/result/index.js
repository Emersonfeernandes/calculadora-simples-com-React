import MathJax from 'mathjax/es5/tex-chtml';
import { useEffect } from "react";
import { divContainer } from './style';

function ResultContainer ({ expression, result }) {
  const data = opResult(expression, result)//"When \\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\) as \\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]";
  useEffect(()=>{
    if(typeof window?.MathJax !== "undefined"){
      window.MathJax.typeset()
    }
  }, [expression, result]); 

  return (
    <divContainer>
      
        <div>
          <h1>{data}</h1>
        </div>
      
    </divContainer>
  )
};

function opResult(expression, result){
  //\\(a \\ne 0\\), there exists two solutions for\\(ax^2 + bx + c = 0\\)
  if (expression.indexOf("**") != -1){
    expression = expression.replace("**", "^");
  } else if  (expression.indexOf("/") != -1){
    expression = expression.replace("/", "\\");
  }
  
  return '\\(' + expression.replace("/", "\\ne") + '\\)' + ' = ' + result
  
}

export default ResultContainer;