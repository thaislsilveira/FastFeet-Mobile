import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
  flex-grow: 0;
  padding-top: 140px;
  align-items: flex-start;
  align-content: flex-start;
`;
