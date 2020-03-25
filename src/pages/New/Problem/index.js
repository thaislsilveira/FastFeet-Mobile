import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import api from '~/services/api';

import { Container, Content, SubmitButton, Text } from './styles';
import Background from '~/components/Background';

export default function Problem({ navigation }) {
  const orderId = navigation.getParam('order_id');
  const [description, setDescription] = useState('');

  async function handleSubmit() {
    try {
      await api.post(`deliveryproblems/${orderId}/problems`, {
        description,
      });
      Alert.alert('Sucesso', 'O Problema foi registrado com sucesso!');
      navigation.navigate('Requests');
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  return (
    <Background>
      <Container>
        <Content>
          <Text
            multiline
            autoFocus
            value={description}
            onChangeText={setDescription}
            placeholder=" Inclua aqui o problema que ocorreu na entrega."
          />

          <SubmitButton onPress={handleSubmit}>Enviar </SubmitButton>
        </Content>
      </Container>
    </Background>
  );
}

Problem.navigationOptions = ({ navigation }) => ({
  title: 'Informar problema',
  headerTitleStyle: { textAlign: 'center' },
});
