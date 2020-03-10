import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Button from '~/components/Button';
import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
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
          />

          <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
