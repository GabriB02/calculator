import Monitor from "./Monitor.js";
import Pulsanti from "./Pulsanti.js";
import React from "react";
import "./App.css";
import { useState } from "react";

export default function App(props) {

  const [monitor, setMonitor] = useState("");
  const [operator, setOperator] = useState("");
  
  const operation = (number1, number2) => {
    let result;
    console.log ('operator is ' + operator);
    console.log('number1 = ' + parseInt(number1));
    console.log('number2 = ' + parseInt(number2));
    // eslint-disable-next-line default-case
    switch (operator) {
      case "+":
        result = (parseInt(number1) + parseInt(number2));
        break;

      case "-":
        result = (parseInt(number1) - parseInt(number2));
        break;

      case "x":
        result = (parseInt(number1) * parseInt(number2));
        break;

      case "/":
        result = (parseInt(number1) / parseInt(number2));
        break;
      
    }
    console.log(result);
    setMonitor(result);
    
  };


  
  const clicFunc = (value) => {

    if (typeof value === "number") {
        
      if(!props.sOp){   //decide which number you are typing (first or second)
        props.set1([...props.n1, value]); //push number to n1
      } else {
        props.set2([...props.n2, value]); 
      }   
      
    } else if (value !== "c") {//set operator

      props.setOp(true);
      console.log(value);
      setOperator(value);

      if (value === "="){  //do operation
        operation(props.n1.join(''),props.n2.join(''));
      }
      
    } else { //clear monitor and arrays
      setMonitor("");
      props.set1(new Array());
      props.set2(new Array());
      props.setOp(false);
      setOperator("");
    }

    

  };

  
  React.useEffect(() => {
    if (props.sOp) { //write number on monitor (first or second) depending on if operator was inserted
      setMonitor(props.n2.join(''));
    } else 
      setMonitor(props.n1.join(''));

  }, [props.sOp, props.n1, props.n2]);

  return (
    <div className="board">
      <Monitor value={monitor} />
      <table>
        <tbody>
          <tr>
            <td>
              {" "}
              <Pulsanti value={1} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={2} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={3} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value="+" click={clicFunc} />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Pulsanti value={4} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={5} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={6} click={clicFunc} />
            </td>
            <td>
              {" "}
              <Pulsanti value="-" click={clicFunc} />{" "}
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Pulsanti value={7} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={8} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={9} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value="x" click={clicFunc} />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <Pulsanti id="canc" value="c" click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value={0} click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti id="uguale" value="=" click={clicFunc} />{" "}
            </td>
            <td>
              {" "}
              <Pulsanti value="/" click={clicFunc} />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
