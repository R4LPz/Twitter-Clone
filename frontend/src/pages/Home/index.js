import axios from "axios";
import React, { useEffect, useState } from "react";

import TweetForm from "../../components/TweetForm";
import TweetList from "../../components/TweetList";

export default function Home(){

    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        const fetchTweets = async () =>{
            const token = localStorage.getItem("SESSION_TOKEN");

            const tweetResponse = await axios.get("http://localhost:5000/tweet", {headers: { "authorization": `Bearer ${token}`}})
                        
            
                const tweetUsers = tweetResponse.data.map(tweet =>{
                    return tweet 
                })
                setTweets(tweetUsers);
        }

        fetchTweets()

    }, []);

    const handleLike = async (tweetId) =>{
        const token = localStorage.getItem("SESSION_TOKEN");
        const tweetLiked = await axios.patch(`http://localhost:5000/tweet/${tweetId}/like`,{}, {headers: {"authorization": `Bearer ${token}`}})
        
        const newTweets = tweets.map(tweet => {
            if(tweet._id === tweetId){
                return tweetLiked.data
            }else{
                return tweet
            }
        })
        setTweets(newTweets)
        
    }

    return(
        <div>
          <TweetForm/>
          <TweetList tweets={tweets}  onLike={handleLike}/>
        </div>
    )
}