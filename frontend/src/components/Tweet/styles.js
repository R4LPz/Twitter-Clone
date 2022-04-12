import styled from "styled-components";

export const Container = styled.div`
border-bottom: 1px solid #ccc;
display: flex;
flex-direction: column;
padding: 1em;
`

export const Author = styled.span`
font-size 18px;
font-weight: 600;
`

export const Actions = styled.div`
display: flex;
align-items: center;
justify-content: end;

>button{
    background: transparent;
    display: flex;
    align-items: center;
    width: 4em;
    justify-content: space-around;
    font-weight: 600;
    margin-right: .5em;
    border: none;
    cursor: pointer;
}
`