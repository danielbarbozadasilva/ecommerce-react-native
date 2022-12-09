import React from 'react';
import {signInAction} from '../../store/auth/auth.action';
import {useDispatch} from 'react-redux';
import FormSignIn from '../../components/auth/SignIn/index';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const submitForm = async form => {
    dispatch(signInAction(form)).then(result => {
      if (result) {
        navigation.navigate('MainTab');
      }
    });
  };

  return (
    <>
      <FormSignIn submit={submitForm} />
    </>
  );
};

export default SignUp;
