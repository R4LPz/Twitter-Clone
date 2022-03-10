import React from "react";
import { Container } from "./styles";

export default function MainContainer({children}) {
  return (
    <Container>
      {children}
    </Container>
  );
}