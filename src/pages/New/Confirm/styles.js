import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  top: -130px;
`;

export const ContentTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.View`
  margin-top: 40px;
  background: #fff;
  width: 360px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const TakePicture = styled.View`
  width: 360px;
  height: 395px;
`;
export const CameraBackground = styled.View`
  flex: 1;
  flex-direction: column;
  width: 360px;
  height: 315px;
  border-radius: 4px;
  overflow: hidden;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  flex-grow: 1;
  align-items: flex-start;
  align-content: flex-start;
`;

export const ButtonPicture = styled(RectButton)`
  background: rgba(0, 0, 0, 0.3);
  width: 61px;
  height: 61px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 33px;
  position: absolute;
  bottom: 40px;
  left: 40%;
`;

export const SubmitButton = styled(Button)`
  margin-top: 40px;
  background: #7d40e7;
`;
