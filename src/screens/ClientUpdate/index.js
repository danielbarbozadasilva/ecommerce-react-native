import React from 'react';
import {updateClientAction} from '../../store/client/client.action';
import {useDispatch, useSelector} from 'react-redux';
import FormClientUpdate from '../../components/ClientUpdate/index';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {listByIdClientAction} from '../../store/client/client.action';
import Loading from '../../components/Loading';

const ClientUpdate = () => {
  const loading = useSelector(state => state.client.loading);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const searchClient = React.useCallback(() => {
    dispatch(listByIdClientAction());
  }, [dispatch]);

  React.useEffect(() => {
    searchClient();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const submitForm = async form => {
    dispatch(updateClientAction(form)).then(result => {
      console.log(result?.data?.token);
      if (result?.data?.token) {
        navigation.navigate('MainTab');
        Alert.alert('Sucesso', 'Atualização realizada com sucesso!');
      } else {
        Alert.alert('Erro', 'Tente novamente mais tarde!');
      }
    });
  };

  return (
    <>
      <FormClientUpdate submit={submitForm} />
    </>
  );
};

export default ClientUpdate;
