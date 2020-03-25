import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  align-items: center;
  top: -70px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 13px 25px 13px 14px;
  width: 335px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  margin-left: 5px;
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 5px;
`;

export const CardLabel = styled.Text`
  color: #999999;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;

export const CardText = styled.Text`
  color: #666666;
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: none;
  font-weight: normal;
`;

export const CardDelivery = styled.View`
  margin-top: 20px;
`;

export const HeaderDelivery = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CardDates = styled.View`
  margin: auto;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const CardDate = styled.View`
  padding: 15px 20px 10px 5px;
`;

export const CardDateLabel = styled.Text`
  color: #999999;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;

export const CardDateText = styled.Text`
  color: #666666;
  text-transform: none;
  font-weight: normal;
`;
export const Menu = styled.View`
  margin-top: 80px;
`;

export const MenuBlock = styled.View`
  padding: 0 20px;
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
