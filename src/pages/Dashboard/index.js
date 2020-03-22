import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  Image,
  Initial,
  ContentHeader,
  ContentHeaderText,
  Welcome,
  Name,
  Logout,
  Menu,
  MenuTitle,
  Options,
  Option,
  List,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Line,
  Point,
  PointsSubtitle,
  PointsText,
  Points,
} from './styles';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [typeDeliveries, setTypeDeliveries] = useState('PENDENTES');

  const dispatch = useDispatch();

  const profile = useSelector(state => state?.user?.profile);
  const auth = useSelector(state => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  function handlePending() {
    setTypeDeliveries('PENDENTES');
  }

  function handleDelivered() {
    setTypeDeliveries('ENTREGUES');
  }

  const initial = useMemo(
    () =>
      profile?.name
        .split(' ')
        .map(n => n[0])
        .join(''),
    [profile]
  );

  useEffect(() => {
    async function loadDeliveries() {
      if (!auth.id) return;

      const response =
        typeDeliveries === 'PENDENTES'
          ? await api.get(`/schedule/${auth.id}`)
          : await api.get(`/schedule/${auth.id}/deliveries`);

      const data = response.data.map(delivery => ({
        ...delivery,
        start_date_formated: delivery.start_date
          ? format(parseISO(delivery?.start_date), 'dd/MM/yyyy')
          : '- - / - - / - -',
        end_date_formated: delivery.end_date
          ? format(parseISO(delivery?.end_date), 'dd/MM/yyyy')
          : '- - / - - / - -',
      }));

      setOrders(data);
    }

    loadDeliveries();
  }, [auth.id, typeDeliveries]);

  return (
    <Container>
      <Header>
        <Avatar>
          {profile?.avatar ? (
            <Image
              source={{
                uri: __DEV__
                  ? `http://10.0.2.2:3333/files/${profile?.avatar?.path}`
                  : profile?.avatar?.url,
              }}
            />
          ) : (
            <Initial>{initial}</Initial>
          )}
        </Avatar>
        <ContentHeader>
          <ContentHeaderText>
            <Welcome>Bem vindo de volta,</Welcome>
            <Name>{profile?.name}</Name>
          </ContentHeaderText>
          <Logout onPress={handleLogout}>
            <Icon name="exit-to-app" size={22} color="#E74040" />
          </Logout>
        </ContentHeader>
      </Header>
      <Menu>
        <MenuTitle>Entregas</MenuTitle>
        <Options>
          <Option
            style={{
              marginRight: 15,
            }}
            onPress={handlePending}
            selected={typeDeliveries === 'PENDENTES'}
          >
            Pendentes
          </Option>
          <Option
            selected={typeDeliveries === 'ENTREGUES'}
            onPress={handleDelivered}
          >
            Entregues
          </Option>
        </Options>
      </Menu>
      <List
        data={orders}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card>
            <CardHeader>
              <Icon name="local-shipping" size={22} color="#7D40E7" />
              <CardTitle>Encomenda 0{item.id}</CardTitle>
            </CardHeader>
            <CardBody>
              <Line />
              <Points>
                <Point
                  complete={item.start_date === null && item.end_date === null}
                />
              </Points>
              <Points>
                <Point
                  complete={item.start_date !== null && item.end_date === null}
                />
              </Points>
              <Points>
                <Point
                  complete={item.start_date !== null && item.end_date !== null}
                />
              </Points>
              <PointsSubtitle>
                <PointsText>Aguardando Retirada</PointsText>
              </PointsSubtitle>
              <PointsSubtitle>
                <PointsText>Retirada</PointsText>
              </PointsSubtitle>
              <PointsSubtitle>
                <PointsText>Entregue</PointsText>
              </PointsSubtitle>
            </CardBody>
          </Card>
        )}
      />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-align-justify" size={20} color={tintColor} />
  ),
};
