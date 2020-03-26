import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Content,
  Form,
  Label,
  Initial,
  Avatar,
  Image,
  FormInput,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state?.user?.profile);
  console.log(profile.avatar.path);
  function handleLogout() {
    dispatch(signOut());
  }

  const initial = useMemo(
    () =>
      profile?.name
        .split(' ')
        .map(n => n[0])
        .join(''),
    [profile]
  );

  return (
    <Container>
      <Content>
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

        <Form>
          <Label>Nome completo</Label>
          <FormInput>{profile?.name}</FormInput>
          <Label>Email</Label>
          <FormInput>{profile?.email}</FormInput>
          <Label>Data de cadastro</Label>
          <FormInput>
            {format(parseISO(profile?.created_at), 'dd/MM/yyyy')}
          </FormInput>
        </Form>

        <LogoutButton onPress={handleLogout} loading={false}>
          Logout
        </LogoutButton>
      </Content>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
