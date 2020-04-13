import React, { useMemo, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

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
  const [order, setOrder] = useState(null);
  const [deliveryman, setDeliveryman] = useState(null);

  useEffect(() => {
    setOrder(navigation.state.params.item);
    setDeliveryman(navigation.state.params.auth);
  }, [navigation]);

  // const profile = useSelector(state => state?.user?.profile);
  // const [start_date, setStart_date] = useState('');

  const withdrawalDate = useMemo(
    () =>
      order && order.start_date !== null
        ? format(parseISO(order.start_date), 'dd/MM/yyyy')
        : ' - - / - - / - -',
    [order]
  );

  async function withdrawalDelivery(orderId, deliverymanId) {
    const hourStart = new Date();

    try {
      await api.put(`schedule/${deliverymanId}/${orderId}`, {
        start_date: hourStart,
      });

      setOrder({ ...order, start_date: hourStart.toISOString() });

      Alert.alert('Sucesso', 'A data de retirada foi registrado com sucesso!');
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  return (
    <Container>
      <Background />
      {order && (
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
                      <CardDateText>{withdrawalDate}</CardDateText>
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
                <MenuBlock>
                  <Button
                    onPress={() =>
                      navigation.navigate('ProblemList', { order_id: order.id })
                    }
                  >
                    <Icon name="info-outline" color="#E7BA40" size={20} />
                    <ButtonTitle>Visualizar{`\n`}Problema</ButtonTitle>
                  </Button>
                </MenuBlock>
                <MenuBlock>
                  {order.start_date === null ? (
                    <Button
                      onPress={() =>
                        withdrawalDelivery(order.id, deliveryman.id)
                      }
                      loading
                    >
                      <Icon name="check-circle" size={22} color="#7D40E7" />
                      <ButtonTitle>Confirmar Retirada</ButtonTitle>
                    </Button>
                  ) : (
                    <Button
                      onPress={() =>
                        navigation.navigate('Confirm', {
                          order,
                          deliveryman,
                        })
                      }
                      loading
                    >
                      <Icon name="check-circle" size={22} color="#7D40E7" />
                      <ButtonTitle>Confirmar Entrega</ButtonTitle>
                    </Button>
                  )}
                </MenuBlock>
              </Menu>
            </CardBody>
          </Card>
        </Content>
      )}
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  headerTitleStyle: { textAlign: 'center' },
});
