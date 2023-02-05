import React from 'react';
import {signUpAction} from '../../store/auth/auth.action';
import {useDispatch} from 'react-redux';
import FormSignUp from '../../components/auth/SignUp/index';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submitForm = async form => {
    dispatch(signUpAction(form)).then(result => {
      if (result?.data?.token) {
        navigation.navigate('MainTab');
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      }
    });
  };

  return (
    <>
      <FormSignUp submit={submitForm} />
    </>
  );
};

export default SignUp;
