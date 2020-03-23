import React, { useState, useEffect, useMemo } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
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

  function handleActiveStep(start_date, end_date) {
    if (start_date === null && end_date === null) {
      return 0;
    }
    if (start_date !== null && end_date === null) {
      return 1;
    }
    return 2;
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
              <ProgressSteps
                borderWidth={3}
                activeStepIconBorderColor="#7d40e7"
                activeLabelColor="#444444"
                labelColor="#999999"
                progressBarColor="#7d40e7"
                completedStepIconColor="#7d40e7"
                completedProgressBarColor="#7d40e7"
                activeStepNumColor="#7d40e7"
                activeStepIconColor="#7d40e7"
                activeStep={handleActiveStep(item.start_date, item.end_date)}
              >
                <ProgressStep
                  nextBtnDisabled
                  previousBtnDisabled
                  nextBtnText=""
                  previousBtnText=""
                  label="Aguardando Retirada"
                >
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep
                  nextBtnDisabled
                  previousBtnDisabled
                  nextBtnText=""
                  previousBtnText=""
                  label="Retirada"
                >
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
                <ProgressStep
                  nextBtnDisabled
                  previousBtnDisabled
                  nextBtnText=""
                  previousBtnText=""
                  label="Entregue"
                >
                  <View style={{ alignItems: 'center' }} />
                </ProgressStep>
              </ProgressSteps>
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
