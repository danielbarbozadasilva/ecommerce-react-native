import React from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, Alert} from 'react-native';
import {VStack, ScrollView, Select} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import ufCityFile from '../../util/state-city.json';
import {signUpAction} from '../../store/auth/auth.action';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  CustomButton,
  CustomButtonText,
  ErrorMessage,
  SelectArea,
  Container,
  styles,
} from './styled';
import {schemaSignUp} from '../../util/validations/form-signup';
import Title from '../../components/Title/index';
import {useDispatch} from 'react-redux';

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [uf, setUf] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({resolver: yupResolver(schemaSignUp)});

  React.useEffect(() => {
    const localization = ufCityFile.states.map(({name, uf}) => ({name, uf}));
    setUf(localization);
  }, []);

  React.useEffect(() => {
    const result = ufCityFile.states.find(item => item.uf === watch('uf'));
    if (result) {
      setCity(result.city);
    }
  }, [watch('uf')]);

  const handleSignUp = async form => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      birthDate: form.birthDate,
      password: form.password,
      phones: [form.phone01, form.phone02],
      address: {
        street: form.street,
        number: form.number,
        complement: form.complement,
        district: form.district,
        city: form.city,
        zipCode: form.zipCode,
        state: form.uf,
      },
    };

    dispatch(signUpAction(nform)).then(result => {
      if (result?.data?.token) {
        navigation.navigate('SignIn');
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      }
    });
  };

  return (
    <Container>
      <ScrollView>
        <VStack flex={1} px={10}>
          <Title text="Crie sua conta" />
          <Controller
            control={control}
            name="name"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  placeholder="Digite o seu nome"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.name?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="cpf"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  type={'cpf'}
                  placeholder="Digite o seu cpf"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.cpf?.message || ''}</ErrorMessage>
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
            name="password"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  placeholder="Digite a sua senha"
                  onChangeText={onChange}
                  style={styles.input}
                  secureTextEntry={true}
                />
                <ErrorMessage>{errors.password?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            secureTextEntry
            name="confirmpassword"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  placeholder="Confirme a senha"
                  onChangeText={onChange}
                  style={styles.input}
                  secureTextEntry={true}
                />
                <ErrorMessage>
                  {errors.confirmpassword?.message || ''}
                </ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="phone01"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  placeholder="Digite o seu telefone"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.phone01?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="phone02"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  placeholder="Digite outro telefone (opcional)"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.phone02?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="birthDate"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  placeholder="Digite a sua data de nascimento"
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                  style={styles.input}
                  onChangeText={onChange}
                />
                <ErrorMessage>{errors.birthDate?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="zipCode"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  type={'zip-code'}
                  placeholder="Digite o seu cep"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.zipCode?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="uf"
            render={({field: {onChange}}) => (
              <>
                <SelectArea>
                  <Select
                    placeholder="Selecione a sua uf"
                    _selectedItem={{
                      bg: 'teal.900',
                    }}
                    style={styles.inputSelect}
                    onValueChange={onChange}>
                    {uf?.map(({name, uf}, i) => (
                      <Select.Item key={i} label={uf} value={uf} />
                    ))}
                  </Select>
                  <ErrorMessage>{errors.uf?.message || ''}</ErrorMessage>
                </SelectArea>
              </>
            )}
          />

          <Controller
            control={control}
            name="city"
            render={({field: {onChange}}) => (
              <>
                <Select
                  placeholder="Selecione a sua cidade"
                  style={styles.inputSelect}
                  onValueChange={onChange}>
                  {city?.map((city, i) => (
                    <Select.Item key={i} label={city} value={city} />
                  ))}
                </Select>
                <ErrorMessage>{errors.city?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="district"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  placeholder="Digite o seu bairro"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.district?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="street"
            render={({field: {onChange}}) => (
              <>
                <TextInput
                  placeholder="Digite a sua rua"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.street?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="number"
            render={({field: {onChange}}) => (
              <>
                <TextInputMask
                  type={'only-numbers'}
                  placeholder="Digite o número"
                  onChangeText={onChange}
                  style={styles.input}
                />
                <ErrorMessage>{errors.number?.message || ''}</ErrorMessage>
              </>
            )}
          />

          <Controller
            control={control}
            name="complement"
            render={({field: {onChange}}) => (
              <TextInput
                placeholder="Digite o complemento (opcional)"
                onChangeText={onChange}
                style={styles.input}
              />
            )}
          />

          <CustomButton onPress={handleSubmit(handleSignUp)}>
            <CustomButtonText>Cadastrar</CustomButtonText>
          </CustomButton>
        </VStack>
      </ScrollView>
    </Container>
  );
};
export default SignUp;
