import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Button from '~/components/Button';
import Background from '~/components/Background';
import { SignInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  async function handleSubmit() {
    dispatch(SignInRequest(id));
    setId('');
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            name="id"
            keyboardType="number-pad"
            autoCorrect={false}
            returnKeyType="send"
            autoCapitalize="none"
            placeholder="Informe seu ID de Cadastro"
            value={id}
            onChangeText={setId}
          />

          <SubmitButton onPress={handleSubmit}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
