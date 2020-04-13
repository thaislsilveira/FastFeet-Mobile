import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${props => (props.isBig ? '137px' : '68px')};
  height: ${props => (props.isBig ? '137px' : '68px')};
  background-color: ${props => props.bgColor};
  border-radius: ${props => (props.isBig ? '137px' : '68px')};
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const Initial = styled.Text`
  color: ${props => props.textColor};
  font-size: ${props => (props.isBig ? '60px' : '31px')};
`;
