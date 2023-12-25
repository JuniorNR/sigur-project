import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('Это поле обязательное')
    .max(25, 'Максимальное значение поля - 50 символов'),
  lastName: Yup.string().required('Это поле обязательное'),
  middleName: Yup.string().max(25, 'Максимальное значение поля - 50 символов'),
  city: Yup.string().required('Это поле обязательное'),
  gender: Yup.string().required('Это поле обязательное'),
  citizenship: Yup.string().required('Это поле обязательное'),
  desiredPosition: Yup.string().required('Это поле обязательное'),
  aboutYou: Yup.string(),
  salary: Yup
    .number()
    .typeError('Введите число')
    .positive('Введите положительное число')
    .integer('Введите целое число')
    .required('Это поле обязательное'),
  currency: Yup.string(),
  dateOfBirthday: Yup.mixed(),
  photo: Yup.mixed(),
});
