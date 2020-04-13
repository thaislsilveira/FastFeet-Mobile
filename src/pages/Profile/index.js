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
  Avatar,
  Image,
  FormInput,
  LogoutButton,
} from './styles';

import AvatarInitial from '~/components/AvatarInitial';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state?.user?.profile);
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
          <AvatarInitial big>{initial}</AvatarInitial>
        )}

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
