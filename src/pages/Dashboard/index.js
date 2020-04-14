import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View } from 'react-native';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Header,
  Avatar,
  Image,
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
  PointsText,
  Points,
  CardFooter,
  CardFooters,
  LabelFooter,
  TextFooter,
  LinkFooter,
} from './styles';

import AvatarInitial from '~/components/AvatarInitial';

export default function Dashboard({ navigation }) {
  const [orders, setOrders] = useState([]);
  const [typeDeliveries, setTypeDeliveries] = useState('PENDENTES');

  const dispatch = useDispatch();

  const profile = useSelector(state => state?.user?.profile);
  const auth = useSelector(state => state.auth);

  // function handleShowDetail(order) {
  //   navigation.navigate('Details');
  // }

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

    const focusListener = navigation.addListener('didFocus', () => {
      loadDeliveries();
    });

    return () => {
      focusListener.remove();
    };
  }, [auth.id, navigation, typeDeliveries]);

  return (
    <Container>
      <Header>
        {profile?.avatar ? (
          <Avatar>
            <Image
              source={{
                uri: __DEV__
                  ? `http://10.0.2.2:3333/files/${profile?.avatar?.path}`
                  : profile?.avatar?.url,
              }}
            />
          </Avatar>
        ) : (
          <AvatarInitial>{initial}</AvatarInitial>
        )}
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
              <CardTitle>Encomenda {item.id}</CardTitle>
            </CardHeader>
            <CardBody>
              <Line />
              <Points>
                <Point
                  complete={
                    (item.start_date === null && item.end_date === null) ||
                    (item.start_date !== null && item.end_date === null) ||
                    (item.start_date !== null && item.end_date !== null)
                  }
                />

                <PointsText>Aguardando Retirada</PointsText>
              </Points>
              <Points>
                <Point
                  complete={
                    (item.start_date !== null && item.end_date === null) ||
                    (item.start_date !== null && item.end_date !== null)
                  }
                />
                <PointsText>Retirada</PointsText>
              </Points>
              <Points>
                <Point
                  complete={item.start_date !== null && item.end_date !== null}
                />
                <PointsText>Entregue</PointsText>
              </Points>
            </CardBody>
            <CardFooter>
              <CardFooters>
                <LabelFooter>Data</LabelFooter>
                <TextFooter>
                  {item.start_date === null
                    ? '- - / - - / - -'
                    : format(parseISO(item.start_date), 'dd/MM/yyyy')}
                </TextFooter>
                <LabelFooter>Cidade</LabelFooter>
                <TextFooter>{item.recipient.city}</TextFooter>
                <View>
                  <LinkFooter
                    onPress={() => {
                      navigation.navigate('Details', {
                        item,
                        auth,
                      });
                    }}
                  >
                    Ver detalhes
                  </LinkFooter>
                </View>
              </CardFooters>
            </CardFooter>
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
