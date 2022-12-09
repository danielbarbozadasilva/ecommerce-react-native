import React from 'react';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput} from 'react-native';
import {VStack, ScrollView, Select} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import ufCityFile from '../../util/state-city.json';
import {searchZipCode} from '../../store/auth/auth.action';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  CustomButton,
  CustomButtonText,
  ErrorMessage,
  SelectArea,
  Container,
  styles,
} from './styled';
import {schemaUpdateClient} from '../../util/validations/form-updateClient';
import Title from '../../components/Title/index';
import {useSelector} from 'react-redux';

const ClientUpdate = ({submit}) => {
  const clientById = useSelector(state => state.client.clientById);
  const [uf, setUf] = React.useState([]);
  const [city, setCity] = React.useState([]);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: clientById?.user?.name,
      email: clientById?.user?.email,
      cpf: clientById?.client?.cpf,
      birthDate: clientById?.client?.birthDate,
      phone01: clientById?.client?.phones[0],
      phone02: clientById?.client?.phones[1],
      street: clientById?.address?.street,
      number: clientById?.address?.number,
      district: clientById?.address?.district,
      city: clientById?.address?.city,
      zipCode: clientById?.address?.zipCode,
      uf: clientById?.address?.state,
      complement: clientById?.address?.complement,
    },
    resolver: yupResolver(schemaUpdateClient),
  });

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

  const handleUpdate = async form => {
    const nform = {
      name: form.name,
      email: form.email,
      cpf: form.cpf,
      birthDate: form.birthDate,
      phones: [form.phone01, form.phone01],
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
    submit(nform);
  };

  const checkCEP = async () => {
    const cep = watch('zipCode')?.replace(/\D/g, '');
    const data = await searchZipCode(cep);
    if (data) {
      setValue('street', data.logradouro);
      setValue('city', data.localidade?.toUpperCase());
      setValue('district', data.bairro);
      setValue('uf', data.uf);
    }
  };

  return (
    <Container>
      <ScrollView>
        <VStack flex={1} px={10}>
          <Title text="Atualizar dados" />
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, value}}) => (
              <>
                <TextInput
                  placeholder="Digite o seu nome"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.name?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="cpf"
            render={({field: {onChange, value}}) => (
              <>
                <TextInputMask
                  type={'cpf'}
                  placeholder="Digite o seu cpf"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.cpf?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value}}) => (
              <>
                <TextInput
                  placeholder="Digite o seu e-mail"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.email?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="phone01"
            render={({field: {onChange, value}}) => (
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
                  value={value}
                />
                <ErrorMessage>{errors.phone01?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="phone02"
            render={({field: {onChange, value}}) => (
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
                  value={value}
                />
                <ErrorMessage>{errors.phone02?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="birthDate"
            render={({field: {onChange, value}}) => (
              <>
                <TextInputMask
                  placeholder="Digite a sua data de nascimento"
                  type={'datetime'}
                  options={{
                    format: 'DD/MM/YYYY',
                  }}
                  style={styles.input}
                  onChangeText={onChange}
                  value={value}
                />
                <ErrorMessage>{errors.birthDate?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="zipCode"
            render={({field: {onChange, value}}) => (
              <>
                <TextInputMask
                  type={'zip-code'}
                  placeholder="Digite o seu cep"
                  onChangeText={onChange}
                  onBlur={checkCEP}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.zipCode?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="uf"
            render={({field: {onChange, value}}) => (
              <>
                <SelectArea>
                  <Select
                    placeholder="Selecione a sua uf"
                    _selectedItem={{
                      bg: 'teal.900',
                    }}
                    style={styles.inputSelect}
                    onValueChange={onChange}
                    selectedValue={value}>
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
            render={({field: {onChange, value}}) => (
              <>
                <SelectArea>
                  <Select
                    placeholder="Selecione a sua cidade"
                    _selectedItem={{
                      bg: 'teal.900',
                    }}
                    style={styles.inputSelect}
                    onValueChange={onChange}
                    selectedValue={value}>
                    {city.length ? (
                      city.map((city, i) => (
                        <Select.Item key={i} label={city} value={city} />
                      ))
                    ) : (
                      <Select.Item
                        label={clientById?.address?.city}
                        value={clientById?.address?.city}
                      />
                    )}
                  </Select>
                  <ErrorMessage>{errors.city?.message || ''}</ErrorMessage>
                </SelectArea>
              </>
            )}
          />
          <Controller
            control={control}
            name="district"
            render={({field: {onChange, value}}) => (
              <>
                <TextInput
                  placeholder="Digite o seu bairro"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.district?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="street"
            render={({field: {onChange, value}}) => (
              <>
                <TextInput
                  placeholder="Digite a sua rua"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.street?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="number"
            render={({field: {onChange, value}}) => (
              <>
                <TextInputMask
                  type={'only-numbers'}
                  placeholder="Digite o número"
                  onChangeText={onChange}
                  style={styles.input}
                  value={value}
                />
                <ErrorMessage>{errors.number?.message || ''}</ErrorMessage>
              </>
            )}
          />
          <Controller
            control={control}
            name="complement"
            render={({field: {onChange, value}}) => (
              <TextInput
                placeholder="Digite o complemento (opcional)"
                onChangeText={onChange}
                style={styles.input}
                value={value}
              />
            )}
          />

          <CustomButton onPress={handleSubmit(handleUpdate)}>
            <CustomButtonText>Atualizar</CustomButtonText>
          </CustomButton>
        </VStack>
      </ScrollView>
    </Container>
  );
};
export default ClientUpdate;
