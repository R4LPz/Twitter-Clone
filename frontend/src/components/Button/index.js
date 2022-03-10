import React from "react";
import { ButtonStylized } from "./styles";


export default function Button(props) {
  return (
    <ButtonStylized>{props.children}</ButtonStylized>
  );
}