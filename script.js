function App(){
    const [text,settext] = React.useState(['-']);
    const [power,setPower] = React.useState(false);
   function HandlePower(){
      if(power == false){
        setPower(true);
        settext(['0']);
      }
      else{
        setPower(false);
        settext(["-"]);
      } 
    }
    function decimal(){
        if(power == true){
        let x = 0;
        for(let i = text.length-1; i>0;i--){
            if(text[i] == '.'){x++}//check how many decimals are in the number
            if(text[i] == '+' || text[i] == "*" || text[i] == "/" || text[i] == "-"){//if there exist a +/-/... it means that the number is NOT the same number so break the loop
                break;
            }
        }
        if(x>=1) return;//if there is more than one decimal return empty
       else  settext([...text].concat('.'));//otherwise put decimal in the array
    }
    }


    function add(){
        if(power == true){
        let array = text;
        let x=0;
        if(text[text.length-1] == '+'){
            return
        }else if(text[text.length-1] == "-" || text[text.length-1] == "*" || text[text.length-1] == "/"){ 
            for(let i = text.length-1;i>0;i--){
                if(text[i] == '-' || text[i] =="*" || text[i]=="/"){x++}
            } 
            array.splice(text.length-x,x,"+");
            settext([...array]);
        }
            else settext([...text].concat('+'));
    }
    }
    function subtract(){
        if(power==true){
        let array = text;
        if(text[text.length-1] == '-'){
            return
        }else if(text[text.length-1] == "+"){       
            array.splice(array.length-1,1,"-");
            settext([...array]);
        }
       else settext([...text].concat('-'));
    }
    }
    function multiply(){
        if(power==true){
        let array = text;
        let x = 0;
        if(text[text.length-1] == '*'){
            return
        }else if(text[text.length-1] == "-" || text[text.length-1] == "+" || text[text.length-1] == "/"){ 
            for(let i = text.length-1;i>0;i--){
                if(text[i] == '-' || text[i] =="+" || text[i]=="/"){x++}
            } 
            array.splice(text.length-x,x,"*");
            settext([...array]);
        }
       else settext([...text].concat('*'));
    }
    }
    function divide(){
        if(power == true){
        let x = 0;
        let array = text;
        if(text[text.length-1] == '/'){
            return
        }else if(text[text.length-1] == "-" || text[text.length-1] == "*" || text[text.length-1] == "+"){ 
            for(let i = text.length-1;i>0;i--){
                if(text[i] == '-' || text[i] =="*" || text[i]=="+"){x++}
            } 
            array.splice(text.length-x,x,"/");
            settext([...array]);
        }
        }
        else settext([...text].concat('/'));
    }
    function clear(){
        if(power == true)  settext([0]);
    }
    function equals(){
       if(power==true) settext([eval(text.join(''))]);
    }
    function Digit(num){
        if(power==true){
        return () => {
            if(text.length>=99999999999999999){settext(["Digit Limit Met!! Reset Calculator"])}
           else  if([...text] == '0'){settext([num])}
          else settext([...text].concat(num));
          }
        }
        }
    return (
        <div id="App">
            <div id="wrapper">
            <div id="display">{text}</div>
        <div id="Buttons">
    
        <button id="clear" class="top" onClick={clear}>AC</button>
        <button id="OnOff" class="top" onClick={HandlePower} >On/Off</button>
        <button id="divide"  class="top tool" onClick={divide}>/</button>
       
           
          <div id="Digits">
          <button id="seven"onClick={Digit('7')}>7</button>
               <button id="eight"onClick={Digit('8')}>8</button>
               <button id="nine"onClick={Digit('9')}>9</button>
               <button id="add"class="tool"  onClick={add}>+</button>
               <button id="four"onClick={Digit('4')}>4</button>
               <button id="five"onClick={Digit('5')}>5</button>
               <button id="six"onClick={Digit('6')}>6</button>
               <button id="subtract" class="tool" onClick={subtract}>-</button>
               <button id="one" onClick={Digit('1')}>1</button>
               <button id="two" onClick={Digit('2')} >2</button>
               <button id="three"onClick={Digit('3')}>3</button>
               <button id="multiply" class="tool" onClick={multiply}>x</button>
               <button id="decimal"onClick={decimal}>.</button>
               <button id="zero" onClick={Digit('0')}>0</button>
               <button id="equals" onClick={equals}>=</button>
           
         </div>
        
        </div>
        </div>
        </div>
    )
}
ReactDOM.render(<App />, document.querySelector("#calculator"))