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

    return(
        <div>
          <TweetForm/>
          <TweetList tweets={tweets} />
        </div>
    )
}