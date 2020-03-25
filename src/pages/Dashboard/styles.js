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

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 20px 0 40px 0;
`;

export const Card = styled.View`
  background: #fff;
  margin: 0 20px;
  margin-bottom: 10px;
  padding: 15px 20px 10px 5px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const CardHeader = styled.View`
  padding: 10px 10px 10px 10px;
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;

export const CardBody = styled.View`
  padding: 0 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.View`
  margin-left: 50px;
  position: absolute;
  top: 4px;
  width: 180px;
  height: 2px;
  background: #7d40e7;
`;

export const Point = styled.View`
  margin-left: 40px;
  width: 10px;
  height: 10px;
  background: ${props => (props.complete ? '#7d40e7' : '#fff')};
  border: 1px solid #7d40e7;
  border-radius: 9px;
  align-items: center;
`;

export const Points = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const PointsText = styled.Text`
  margin: auto;
  margin-top: 20px;
  margin-right: 15px;
  height: 30px;
  text-align: center;
  font-size: 10px;
  color: #999;
  align-items: center;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardFooters = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
`;

export const LabelFooter = styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;

export const TextFooter = styled.Text`
  margin: auto;
  margin-top: 25px;
  margin-right: 2px;
  width: 35%;
  height: 40px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const LinkFooter = styled.Text`
  margin-top: 20px;
  color: #7d40e7;
`;
