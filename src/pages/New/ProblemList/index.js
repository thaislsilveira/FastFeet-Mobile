import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';

import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import {
  Container,
  Content,
  Text,
  ContentTitle,
  Description,
  Card,
  RequestList,
  RequestHeader,
  RequestHeaderContent,
  RequestDate,
} from './styles';

import Background from '~/components/Background';

function ProblemList({ navigation, isFocused }) {
  const orderId = navigation.getParam('order_id');
  const [problemsList, setProblemsList] = useState([]);

  async function getProblemsList() {
    try {
      const response = await api.get(`deliveryproblems/${orderId}/problems`);

      // const data = response.data.map(request => ({
      //   ...request,
      //   created_at: formatRelative(parseISO(request.createdAt), new Date(), {
      //     locale: pt,
      //   }),
      // }));

      setProblemsList(response.data);
    } catch (err) {
      Alert.alert('Ops', `${err.response.data.error}`);
    }
  }

  useEffect(() => {
    if (isFocused) {
      getProblemsList();
    }
  }, [isFocused]); //eslint-disable-line

  return (
    <Container>
      <Background />
      <Content>
        <ContentTitle>Encomenda 0{orderId}</ContentTitle>
        <Card>
          {problemsList === null ? (
            <Text>Não existe problemas para serem listados!</Text>
          ) : (
            <RequestList
              data={problemsList}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <RequestHeader>
                  <RequestHeaderContent />
                  <Description>{item.description}</Description>
                  <RequestDate>
                    {format(parseISO(item.created_at), 'dd/MM/yyyy')}
                  </RequestDate>
                </RequestHeader>
              )}
            />
          )}
        </Card>
      </Content>
    </Container>
  );
}

export default withNavigationFocus(ProblemList);
