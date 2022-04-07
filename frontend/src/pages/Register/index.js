import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleRegister = async event => {
        event.preventDefault();

        if (!username || !password || !email) return;

        try{
            const response = await axios.post("http://localhost:5000/user", { email, username, password})
            console.log(response);
            navigate("/");
        }catch(err){
            console.log(err);
        }

    }

    return(
        <div>
            <form >
                <div>
                    <label>Email</label>
                    <input type="text" value={email}  onChange={e => setEmail(e.target.value)}/>
                </div>            
                <div>
                    <label>Nome de Usuário</label>
                    <input type="text" value={username}  onChange={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <a href="/">Fazer Login</a>
                    <button type="submit" onClick={handleRegister}>Registrar</button>
                </div>
            </form>
        </div>
    )
}