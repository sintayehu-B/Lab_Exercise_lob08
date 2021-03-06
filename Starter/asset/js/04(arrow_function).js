//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;



})

//1. Replace the empty string with arrow function 

//2. An arrow function with full syntax
const arrowFun1 = (a, b) => {  let result = a + b;  return result;  };

//3. A minimized arrow function [No return statement , no curly brace]
const arrowFun2 = (a, b) => a + b ;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]
//5. The function will return the sqrt , use Math.sqrt(var);
const arrowFun3 = (b) => Math.sqrt(b);

const Ess5_issue ={
    color: 'blue',
    clickMe: function(){
        var self = this;
        E5_issue.addEventListener('click', function(){
            Es5_issue.innerHTML = self.color;
        })
    }
}
Ess5_issue.clickMe();

const Ess6_issue ={
    color: 'yellow',
    clickMe: function(){
        E6_issue.addEventListener('click', ()=>{
            Es6_issue.innerHTML = this.color;
        })
    }
}
Ess6_issue.clickMe();