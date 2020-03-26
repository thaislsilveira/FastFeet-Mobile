import styled from 'styled-components/native';

export const Container = styled.View`
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
  padding: 13px 25px 13px 14px;
  width: 335px;
  border-radius: 4px;
  margin-bottom: 9px;
`;
export const RequestList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 40px 0;
`;
export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 40px;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;

export const Request = styled.TouchableOpacity`
  margin-top: 15px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px;
`;

export const RequestHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RequestHeaderContent = styled.View``;

export const RequestInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RequestDate = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
