import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const AvatarInput = styled.Image`
  flex: 1;
  background: #fff;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
  padding-top: 40px;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #666;
  font-family: 'Roboto-Regular';
`;

export const FormInput = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444;
  margin-bottom: 15px;
  font-family: 'Roboto-Regular';
`;

export const LogoutButton = styled(Button)`
  background: #e74040;
  height: 40px;
  margin-top: 15px;
  width: 100%;
`;
