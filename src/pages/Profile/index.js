import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  AvatarInput,
  Form,
  Label,
  FormInput,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state?.user?.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <AvatarInput source={{ uri: profile?.avatar?.url }} />
      <Form>
        <Label>Nome completo</Label>
        <FormInput>{profile?.name}</FormInput>
        <Label>Email</Label>
        <FormInput>{profile?.email}</FormInput>
        <Label>Data de cadastro</Label>
        <FormInput>{profile?.created_at}</FormInput>
      </Form>

      <LogoutButton onPress={handleLogout} loading={false}>
        Logout
      </LogoutButton>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person-pin-circle" size={20} color={tintColor} />
  ),
};
