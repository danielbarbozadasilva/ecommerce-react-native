import React from 'react';
import {Container} from './styled';
import {Image} from 'react-native';
import Logo from '../../assets/image/1.png';

const Preload = () => {
  return (
    <Container>
      <Image
        source={require('../../assets/image/1.png')}
        style={{width: 350, height: 350}}
      />
    </Container>
  );
};
export default Preload;

