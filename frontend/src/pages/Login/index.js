import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {RegisterLink,Title} from './styles'

export default function Login() {
  return (
      <Form>
        <Title>Entrar no Twitter</Title>
        <Input type='text' text='Email'/>
        <Input type='password' text='Senha'/>
        <Button>Avançar</Button>
        <RegisterLink>
          <span>Não tem uma conta ? </span>
          <a href="/Register">Inscreva-se</a>
        </RegisterLink>
      </Form>
  );
}
