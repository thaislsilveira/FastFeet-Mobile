import React from 'react';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardLabel,
  CardText,
  CardDelivery,
  HeaderDelivery,
  CardDates,
  CardDate,
  CardDateLabel,
  CardDateText,
  Menu,
  MenuBlock,
  Button,
  ButtonTitle,
} from './styles';
import Background from '~/components/Background';

export default function Details({ navigation }) {
  const order = navigation.getParam('item');

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
            <CardText>{order.recipient.name}</CardText>
            <CardLabel>Endereço de Entrega</CardLabel>
            <CardText>
              {order.recipient.street}, {order.recipient.number},{' '}
              {order.recipient.city} {'-'} {order.recipient.state},{' '}
              {order.recipient.cep}
            </CardText>
            <CardLabel>Produto</CardLabel>
            <CardText>{order.product}</CardText>
            <CardDelivery>
              <HeaderDelivery>
                <Icon name="event" size={22} color="#7D40E7" />
                <CardTitle>Situação da entrega</CardTitle>
              </HeaderDelivery>
              <CardBody>
                <CardLabel>Status</CardLabel>
                <CardText>
                  {order.end_date !== null ? 'Entregue' : 'Pendente'}
                </CardText>
                <CardDates>
                  <CardDate>
                    <CardDateLabel>Data de retirada</CardDateLabel>
                    <CardDateText>
                      {order.start_date !== null
                        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
                        : ' - - / - - / - -'}
                    </CardDateText>
                  </CardDate>
                  <CardDate>
                    <CardDateLabel>Data de Entrega</CardDateLabel>
                    <CardDateText>
                      {order.end_date !== null
                        ? format(parseISO(order.end_date), 'dd/MM/yyyy')
                        : ' - - / - - / - -'}
                    </CardDateText>
                  </CardDate>
                </CardDates>
              </CardBody>
            </CardDelivery>
            <Menu>
              <MenuBlock>
                <Button
                  onPress={() =>
                    navigation.navigate('Problem', { order_id: order.id })
                  }
                >
                  <Icon name="highlight-off" color="#E74040" size={20} />
                  <ButtonTitle>Informar{`\n`}Problema</ButtonTitle>
                </Button>
              </MenuBlock>
            </Menu>
          </CardBody>
        </Card>
      </Content>
    </Container>
  );
}
