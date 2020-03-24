import styled from 'styled-components/native';

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
