import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  top: -90px;
`;

export const ContentTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Card = styled.View`
  background: #fff;
  width: 360px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const TakePicture = styled.View`
  width: 360px;
  height: 385px;
`;
export const CameraBackground = styled.View`
  width: 100%;
  border-radius: 4px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

export const Camera = styled(RNCamera)`
  width: 100%;
  height: 100%;
  align-items: center;
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
  margin-top: 10px;
  background: #7d40e7;
`;
