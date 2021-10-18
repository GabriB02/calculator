import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { useState } from "react";

export default function Parent() {
  const [ar1, setAr1] = useState(new Array());
  const [ar2, setAr2] = useState(new Array());
  const [selezione, setSelezione] = useState(false);

  return(
  <App n1={ar1} set1={setAr1} n2={ar2} set2={setAr2} sOp = {selezione} setOp = {setSelezione}/>);
}
