import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {RegisterLink,Title} from './styles'

export default function Register() {
	return(
		<Form>
        <Title>Entre hoje mesmo para o Twitter</Title>
        <Input type='text' text='Email'/>
		<Input type='password' text='Username'/>
        <Input type='password' text='Senha'/>
		<Input type='password' text='Confirme a senha'/>
        <Button>Avançar</Button>
        <RegisterLink>
          <span>Já tem uma conta ? </span>
          <a href="/">Entrar</a>
        </RegisterLink>
      </Form>
	);
}