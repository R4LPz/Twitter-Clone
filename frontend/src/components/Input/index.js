import React from "react";
import { InputStyle } from "./styles";


export default function Input(props) {
  return (
    <InputStyle type={props.type} placeholder={props.text} />
  );
}