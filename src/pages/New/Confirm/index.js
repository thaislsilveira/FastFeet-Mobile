import React, { useState, useRef, useEffect } from 'react';
import { Alert, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
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
import ImageBackground from '~/assets/delivery.png';

export default function Confirm({ navigation }) {
  const camera = useRef(null);

  const [pictureUri, setPictureUri] = useState('');

  const [order, setOrder] = useState(null);
  const [deliveryman, setDeliveryman] = useState(null);

  useEffect(() => {
    setOrder(navigation.state.params.order);
    setDeliveryman(navigation.state.params.deliveryman);
  }, [navigation]);

  async function takePicture() {
    const data = await camera.current.takePictureAsync({
      quality: 0.5,
      base64: true,
    });

    setPictureUri(data.uri);
  }

  async function handleSubmit() {
    try {
      const data = new FormData();
      const hourStart = new Date();

      data.append('file', {
        uri: pictureUri,
        name: 'signature.jpg',
        type: 'image/jpeg',
      });
      const response = await api.post('files', data);

      await api.put(`schedule/${deliveryman.id}/${order.id}`, {
        signature_id: response.data.id,
        end_date: hourStart,
      });

      setOrder({ ...order, end_date: hourStart.toISOString() });

      Alert.alert(
        'Sucesso',
        'A Imagem da assinatura foi registrada com sucesso!'
      );
    } catch (error) {
      Alert.alert(
        'Erro inesperado',
        'Ocorreu um erro inesperado para concluir a entrega do produto'
      );
    }
  }

  return (
    <Container>
      <Background />
      <Content>
        <ContentTitle>Confirmar Entrega</ContentTitle>
        <Card>
          <TakePicture>
            <CameraBackground>
              {pictureUri ? (
                <Image
                  source={{ uri: pictureUri }}
                  style={{ height: '100%', resizeMode: 'cover' }}
                />
              ) : (
                <Camera
                  ref={camera}
                  type={Camera.Constants.Type.back}
                  captureAudio={false}
                />
              )}
            </CameraBackground>
          </TakePicture>

          <ButtonPicture onPress={() => takePicture()}>
            <Icon name="photo-camera" color="#fff" size={30} />
          </ButtonPicture>
          <SubmitButton onPress={handleSubmit}>
            <Text>Enviar</Text>
          </SubmitButton>
        </Card>
      </Content>
    </Container>
  );
}

PropTypes.oneOfType([PropTypes.object, PropTypes.string]);
