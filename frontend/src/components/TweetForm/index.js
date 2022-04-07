import React, { useState } from "react";
import axios from 'axios';

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
        <div>
            <div>
                <textarea 
                    required
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="O que você está pensando" rows={4}
                />
            </div>
            <div>
                <button onClick={handleTweet}>Enviar</button>
            </div>
        </div>
    )
}