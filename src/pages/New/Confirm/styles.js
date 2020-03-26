import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  top: -90px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 13px 25px 13px 14px;
  width: 335px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const TakePicture = styled.View`
  width: 335px;
  height: 445px;
  max-height: 445px;
  min-height: 445px;
  margin-bottom: 11px;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 100%;
  max-height: 445px;
  min-height: 445px;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 12px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
