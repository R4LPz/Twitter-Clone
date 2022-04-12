import styled from 'styled-components';

export const Container = styled.div`
border: 1px solid #ccc;
display: flex;
flex-direction: column;
width: 30%;
margin: 0 auto;
`

export const TweetText = styled.textarea`
background: transparent;
border: none;
resize: none;
width: 90%;
font-size: 16px;
padding: 0 1.5em;
&:active,
&:focus {
    outline: none;
}
`

export const Button = styled.div`
width: 95%;
display: flex;
justify-content: end;
padding: .5em;

>button{
    border: none;
    border-radius: 50px;
    padding: .5em 1.5em;
    background: #00acee;
    font-weight: 600;
    font-size: 16px;
    color: white;
    cursor: pointer;
}
`

export const Title = styled.a`
display: flex;
align-items: center;
margin: .5em 1em;
font-size: 18px;
font-weight: 600;
text-decoration: none;
color: #000;

>img{
    width: 22px;
    margin: .5em 0;
    margin-right: 1em;
}
`