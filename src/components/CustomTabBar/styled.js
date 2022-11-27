import React from 'react';
import styled from 'styled-components/native';
import {View, TouchableOpacity, Image} from 'react-native';

export const TabArea = styled.View`
  height: 60px;
  background-color: #463f57;
  flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AvatarIcon = styled.Image`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;
