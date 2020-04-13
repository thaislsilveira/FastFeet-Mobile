import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '~/services/api';

import {
  Container,
  Content,
  ContentTitle,
  Card,
  SubmitButton,
  Text,
} from './styles';
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
      setDescription('');
      navigation.navigate('Requests');
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }
  return (
    <Container>
      <Background />
      <Content>
        <ContentTitle>Informar problema</ContentTitle>
        <Card>
          <Text
            multiline
            autoFocus
            autoCorrect={false}
            returnKeyType="send"
            autoCapitalize="none"
            value={description}
            onChangeText={text => setDescription(text)}
            placeholder=" Inclua aqui o problema que ocorreu na entrega."
            onFocus={() => setDescription({ description: '' })}
          />
          <SubmitButton onPress={handleSubmit}>Enviar </SubmitButton>
        </Card>
      </Content>
    </Container>
  );
}
