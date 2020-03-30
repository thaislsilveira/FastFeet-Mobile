import styled from 'styled-components/native';

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
  margin-bottom: 11px;
`;

export const Card = styled.View`
  background: #fff;
  padding: 13px 25px 13px 14px;
  width: 360px;
  border-radius: 4px;
  margin-bottom: 9px;
`;

export const Text = styled.Text`
  margin-left: 5px;
  color: #7d40e7;
  font-size: 14px;
  font-weight: bold;
`;

export const RequestList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const RequestHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequestHeaderContent = styled.View``;

export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
  padding: 20px 5px;
  margin-right: 90px;
`;

export const RequestDate = styled.Text`
  padding: 20px 5px;
  color: #c1c1c1;
  font-size: 12px;
`;
