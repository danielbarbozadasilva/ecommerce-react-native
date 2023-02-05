import * as yup from 'yup';

export const schemaRecovery = yup
  .object({
    token: yup.string().required('Informe o token'),
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    newPassword: yup
      .string()
      .required('Informe a senha')
      .min(6, 'senha deve ter pelo menos 6 digitos'),
    confirmPassword: yup
      .string()
      .required('Confirmação de senha inválida')
      .oneOf(
        [yup.ref('newPassword'), null],
        'A confirmação de senha não é igual',
      ),
  })
  .required();
