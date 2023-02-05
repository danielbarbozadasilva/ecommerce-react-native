import React from 'react'
import {CustomButton, CustomButtonText} from './styled';

const CustomButtonComponent = ({text, onPress}) => {
  return (
    <CustomButton onPress={onPress}>
      <CustomButtonText>{text}</CustomButtonText>
    </CustomButton>
  );
};

export default CustomButtonComponent;
