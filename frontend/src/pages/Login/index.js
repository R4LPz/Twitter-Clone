import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async event => {
        event.preventDefault();

        if (!email || !password) return;

        try{
            const response = await axios.post("http://localhost:5000/session", { email, password })
            console.log(response);
            localStorage.setItem("SESSION_TOKEN", response.data.token);
            navigate("/home");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div>
            <form >
                <div>
                    <label>Nome de Usuário</label>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </div>

                <div>
                    <a href="/register">Criar conta</a>
                    <button type="submit" onClick={handleLogin} >Entrar</button>
                </div>
            </form>
        </div>
    )
}