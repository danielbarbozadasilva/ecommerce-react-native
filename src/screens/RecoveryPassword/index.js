import React from 'react';
import {TextInput, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {ErrorMessage, Container, InputArea, styles} from './styled';
import {schemaRecovery} from '../../util/validations/form-recovery-password';
import {recoveryPasswordAction} from '../../store/auth/auth.action';
import Title from '../../components/Title/index';
import {useDispatch} from 'react-redux';
import CustomButtonComponent from '../../components/Button';

const RecoveryPassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaRecovery)});

  const handlerRecovery = async form => {
    const nform = {
      email: form.email,
      token: form.token,
      newPassword: form.newPassword,
    };
    dispatch(recoveryPasswordAction(nform)).then(result => {
      if (result) {
        navigation.navigate('SignIn');
        Alert.alert('Sucesso', 'Senha alterada com sucesso!');
      } else {
        Alert.alert(
          'Erro',
          'Ocorreu um erro ao realizar a operação!\nCertifique-se que você digitou os dados corretamente.',
        );
      }
    });
  };

  const handleBackButtonClick = () => {
    navigation.navigate('SignIn');
  };

  return (
    <Container>
      <InputArea>
        <Title text="Recuperar senha" />
        <Controller
          control={control}
          name="token"
          render={({field: {onChange}}) => (
            <>
              <TextInput
                placeholder="Digite o token recebido"
                onChangeText={onChange}
                style={styles.input}
              />
              <ErrorMessage>{errors.token?.message || ''}</ErrorMessage>
            </>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange}}) => (
            <>
              <TextInput
                placeholder="Digite o seu e-mail"
                onChangeText={onChange}
                style={styles.input}
              />
              <ErrorMessage>{errors.email?.message || ''}</ErrorMessage>
            </>
          )}
        />
        <Controller
          control={control}
          secureTextEntry
          name="newPassword"
          render={({field: {onChange}}) => (
            <>
              <TextInput
                placeholder="Digite uma nova senha"
                onChangeText={onChange}
                style={styles.input}
                secureTextEntry={true}
              />
              <ErrorMessage>{errors.newPassword?.message || ''}</ErrorMessage>
            </>
          )}
        />
        <Controller
          control={control}
          secureTextEntry
          name="confirmPassword"
          render={({field: {onChange}}) => (
            <>
              <TextInput
                placeholder="Confirme a senha"
                onChangeText={onChange}
                style={styles.input}
                secureTextEntry={true}
              />
              <ErrorMessage>
                {errors.confirmPassword?.message || ''}
              </ErrorMessage>
            </>
          )}
        />

        <CustomButtonComponent
          text="RECUPERAR"
          onPress={handleSubmit(handlerRecovery)}
        />
        <CustomButtonComponent
          text="CANCELAR"
          onPress={handleBackButtonClick}
        />
      </InputArea>
    </Container>
  );
};
export default RecoveryPassword;
