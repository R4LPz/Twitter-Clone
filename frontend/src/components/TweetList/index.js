import React from "react";
import Tweet from "../Tweet";
import { Container } from "./styles";

export default function TweetList(props) {    

    return (
        <Container>
            <ul>
                {
                    props.tweets.map((tweet)=>(
                        
                        <Tweet 
                            key={tweet._id}
                            tweetId={tweet._id}
                            author={tweet.author}
                            text={tweet.text} 
                            likes={tweet.likes} 
                            onLike={props.onLike}
                        />
                    ))
                }                
            </ul>
        </Container>
    )
} 