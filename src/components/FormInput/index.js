import React from 'react';
import {InputArea, Input} from './styled';

const SFormInput = ({IconSvg, placeholder, value, onChangeText, password, type}) => {
  return (
    <InputArea>
      <IconSvg width="24" heigth="24" fill="#fff" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#F6F7FC"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        type={type}
      />
    </InputArea>
  );
};

export default SFormInput;
