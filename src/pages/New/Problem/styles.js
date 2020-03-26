import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  top: -90px;
`;

export const Card = styled.View`
  padding: 10px 20px 10px 20px;
  width: 400px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const Text = styled.TextInput.attrs({
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 350px;
  border-radius: 4px;
  margin-top: 15px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #7d40e7;
`;
