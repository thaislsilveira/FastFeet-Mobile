import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px 35px 0 35px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.View`
  width: 68px;
  height: 68px;
  background: #f4effc;
  border-radius: 68px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Image = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 68px;
`;

export const Initial = styled.Text`
  color: #a28fd0;
  font-size: 31px;
`;

export const ContentHeader = styled.View`
  padding: 0 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentHeaderText = styled.View`
  flex-direction: column;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const Logout = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.View`
  margin-top: 22.5px;
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const MenuTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const Option = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => (props.selected ? '#7D40E7' : '#999999')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`;
