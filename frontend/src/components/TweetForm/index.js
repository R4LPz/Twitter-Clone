import React, { useState } from "react";
import axios from 'axios';
import { Button, Container, TweetText, Title } from "./styles";
import twitterLogo from "../../assets/logo.svg"

export default function TweetForm() {

    const [text, setText] = useState("");

    const handleTweet = async event => {
        event.preventDefault();

        try{
            const token = localStorage.getItem("SESSION_TOKEN");

            await axios.post("http://localhost:5000/tweet", { text } , { headers: { "authorization": `Bearer ${token}`}})

            setText("");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <Container>
            <Title href="/home">
                <img src={twitterLogo} alt="" />
                Página inicial
            </Title>
            <TweetText 
                required
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="O que você está pensando" 
                rows={4}
            />
            <Button>
                <button onClick={handleTweet}>Tweetar</button>
            </Button>
        </Container>
    )
}