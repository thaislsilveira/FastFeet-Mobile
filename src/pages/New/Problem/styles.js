import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Card = styled.View`
  top: -60px;
  padding: 10px 20px 10px 20px;
  width: 400px;
  border-radius: 4px;
`;

export const Text = styled.TextInput.attrs({
  numberOfLines: 10,
  textAlignVertical: 'top',
})`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #fff;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #7d40e7;
`;
