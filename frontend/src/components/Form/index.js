import React from "react";
import { FormContainer, TopMenuForm, FormContent } from "./styles";

export default function Form({children}) {
  return (
    <FormContainer>
      <TopMenuForm>
            <span>X</span>
            <img src="" alt="alt img" />
            <span></span>
        </TopMenuForm>
      <FormContent>
        {children}
      </FormContent>
    </FormContainer>
  );
}