import React from "react";
import Tweet from "../Tweet";

export default function TweetList(props) {    

    return (
        <div>
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
        </div>
    )
} 