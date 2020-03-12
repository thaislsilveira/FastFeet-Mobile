import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn({ navigation }) {
  const [id, setId] = useState('');
  const dispatch = useDispatch();

  // const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    dispatch(signInRequest(id));
    navigation.navigate('Dashboard');
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

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
