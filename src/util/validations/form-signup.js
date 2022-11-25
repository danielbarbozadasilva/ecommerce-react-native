import * as yup from 'yup';

export const schemaSignUp = yup
  .object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    cpf: yup.string().required('Informe o cpf'),
    birthDate: yup.string().required('Informe a sua data de nascimento'),
    password: yup
      .string()
      .required('Informe a senha')
      .min(6, 'senha deve ter pelo menos 6 digitos'),
    confirmpassword: yup
      .string()
      .required('Informe a confirmação da senha')
      .oneOf([yup.ref('password'), null], 'A confirmação de senha não é igual'),
    phone01: yup
      .string()
      .required('Informe o telefone 01')
      .min(8, 'senha deve ter pelo menos 8 digitos'),
    phone02: yup
      .string()
      .optional()
      .min(8, 'senha deve ter pelo menos 8 digitos'),
    street: yup.string().required('Informe a rua'),
    number: yup.string().required('Informe o número'),
    complement: yup.string().optional(),
    district: yup.string().required('Informe o bairro'),
    city: yup.string().required('Informe a cidade'),
    zipCode: yup.string().required('Informe o cep'),
    uf: yup.string().required('Informe a uf'),
  })
  .required();
