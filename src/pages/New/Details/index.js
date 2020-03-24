import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardLabel,
} from './styles';
import Background from '~/components/Background';

export default function Details() {
  return (
    <Container>
      <Background />
      <Content>
        <Card>
          <CardHeader>
            <Icon name="local-shipping" size={22} color="#7D40E7" />
            <CardTitle>Informações da entrega</CardTitle>
          </CardHeader>
          <CardBody>
            <CardLabel>Destinatário</CardLabel>
          </CardBody>
        </Card>
      </Content>
    </Container>
  );
}
