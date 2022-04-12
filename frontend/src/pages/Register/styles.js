import styled from "styled-components";

export const Container = styled.div`
  background: #aaa;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  max-width: 460px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background: white;
  border-radius: 15px;

    >div{   
        display: flex;
        flex-direction: column;
        width: 60%
    }

    a {
        text-decoration: none;
        color: #1da1f2;
        cursor: pointer;
    }
`;


export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 15px 20px;
  margin: 10px 0;
  font-size: 14px;
  &:active,
  &:focus {
    border: 1px solid #1da1f2;
    outline: none;
  }
`;

export const Button = styled.button`
background: #000;
padding: 15px 20px;
border: none;
border-radius: 50px;
color: #fff;
font-weight: 600;
cursor: pointer;
font-size: 14px;
margin: 20px 0;
&:hover {
  background: #222;
  border: none;
  outline: none;
}
`;

export const ErrorWarning = styled.div`
  color: red;
  border-radius: 20px;
  padding: 0.5rem;
`;