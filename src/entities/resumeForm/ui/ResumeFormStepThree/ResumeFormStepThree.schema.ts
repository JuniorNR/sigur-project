import * as Yup from 'yup';

export const schema = Yup.object().shape({
  language: Yup.string().required('Это поле обязательно'),
  internationalLanguages: Yup.string().nullable()
});