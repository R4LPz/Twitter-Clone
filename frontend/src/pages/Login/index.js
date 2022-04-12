import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Form, Input, Button, ErrorWarning } from "./styles";
import logo from "../../assets/logo.svg"

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleLogin = async event => {
        event.preventDefault();

        if (!email || !password) {
            setError("Preencha todos os campos.");
            return;
        }

        try{
            const response = await axios.post("http://localhost:5000/session", { email, password })
            console.log(response);
            localStorage.setItem("SESSION_TOKEN", response.data.token);
            navigate("/home");
        }catch(err){
            console.log(err);
            if (err.response.status !== 200) {
                setError("Usuário ou senha incorretos.");
            }
        }
    }

    return(
        <Container>
            <Form >
                <img src={logo} alt="Pássaro azul representado na logo do site" />
                <h1>Entrar no Twitter</h1>
                <div>
                {error && <ErrorWarning>{error}</ErrorWarning>}
                    <Input 
                        type="text"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                    />    
                    <Input 
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Senha"
                    />                    
                </div>
                <div>
                    <Button type="submit" onClick={handleLogin}>Entrar</Button>
                    <span>Não tem uma conta ? <a href="/register">Inscreva-se</a></span>
                </div>
            </Form>
        </Container>
    )
}