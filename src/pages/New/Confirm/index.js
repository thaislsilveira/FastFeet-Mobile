import React, { useState, useRef } from 'react';
import { Alert, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import {
  Container,
  Content,
  ContentTitle,
  Card,
  TakePicture,
  CameraBackground,
  Camera,
  ButtonPicture,
  SubmitButton,
} from './styles';
import Background from '~/components/Background';
import ImageBacground from '~/assets/delivery.png';

export default function Confirm() {
  const camera = useRef(null);
  const [pictureUri, setPictureUri] = useState('');

  async function takePicture() {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.current.takePictureAsync(options);
      await setPictureUri(data.uri);
    }
  }

  async function handleSubmit() {}

  return (
    <Container>
      <Background />
      <Content>
        <ContentTitle>Confirmar Entrega</ContentTitle>
        <Card>
          <TakePicture>
            {pictureUri ? (
              <CameraBackground>
                <Image
                  source={{ uri: pictureUri }}
                  style={{ height: '100%' }}
                />
              </CameraBackground>
            ) : (
              <Camera
                ref={camera}
                type={Camera.Constants.Type.back}
                autoFocus={Camera.Constants.AutoFocus.on}
                flashMode={Camera.Constants.FlashMode.off}
                captureAudio={false}
              />
            )}
          </TakePicture>

          <ButtonPicture onPress={() => takePicture()}>
            <Icon name="photo-camera" color="#fff" size={30} />
          </ButtonPicture>
          <SubmitButton disabled={!pictureUri} onPress={handleSubmit}>
            <Text>Enviar</Text>
          </SubmitButton>
        </Card>
      </Content>
    </Container>
  );
}
