import React from 'react';

import { Container, Initial } from './styles';

const backgroundArray = [
  'rgb(244,239,252)',
  'rgb(252,244,238)',
  'rgb(235,251,250)',
  'rgb(255,238,241)',
  'rgb(244,249,239)',
  'rgb(252,252,239)',
];

const colorArray = [
  'rgb(162,143,208)',
  'rgb(203,148,108)',
  'rgb(131,206,201)',
  'rgb(204,117,132)',
  'rgb(168,208,128)',
  'rgb(204,204,139)',
];

export default function AvatarInitial({ children, big }) {
  const randomColorPosition =
    Math.floor(Math.random() * backgroundArray.length) + 1 - 1;
  return (
    <Container
      isBig={big}
      textColor={colorArray[randomColorPosition]}
      bgColor={backgroundArray[randomColorPosition]}
    >
      <Initial
        isBig={big}
        textColor={colorArray[randomColorPosition]}
        bgColor={backgroundArray[randomColorPosition]}
      >
        {children}
      </Initial>
    </Container>
  );
}
