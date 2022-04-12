import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Form, Input, Button, ErrorWarning } from "./styles";
import logo from '../../assets/logo.svg'


export default function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleRegister = async event => {
        event.preventDefault();

        if (!username || !password || !email) {
            setError("Preencha todos os campos.");
            return;
        }

        try{
            const response = await axios.post("http://localhost:5000/user", { email, username, password})
            console.log(response);
            navigate("/");
        }catch(err){
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
                        value={email}  
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    
                    <Input 
                        type="text" 
                        value={username}  
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Nome de usuário"
                    />
                    
                    <Input 
                        type="password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder="Senha"
                    />
                </div>
                <div>
                    <Button type="submit" onClick={handleRegister}>Registrar</Button>
                    <span>Já tem uma conta ? <a href="/">Entrar</a></span>
                </div>
            </Form>
        </Container>
    )
}