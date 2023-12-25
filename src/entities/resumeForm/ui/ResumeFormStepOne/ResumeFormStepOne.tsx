import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { yupResolver } from '@hookform/resolvers/yup';

import { Typography, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useForm } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import moment from 'moment';

import { Input } from 'shared/ui';
import { ResumeFormContainer } from '../ResumeFormContainer';

import { schema } from './ResumeFormStepOne.schema';
import store from '../../model/store/ResumeFormStepOne.store';
import {
  StyledStepOneForm,
  StyledFormGroup,
  VisuallyHiddenInput,
  StyledDatePickerTextField,
  StyledFilePickerButton,
  StyledFilePickerTypography
} from './ResumeFormStepOne.styles';
import { currenciesData } from './ResumeFormStepOne.utils';
import moment from 'moment';

export const ResumeFormStepOne: FC = observer(() => {
  const { firstName, middleName, city, lastName, citizenship, desiredPosition, gender, salary, currency, aboutYou } = store;
  const navigate = useNavigate();
  const [fileName, setFileName] = useState<string | null>(null);
  const { control, register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  });

  const onSubmit = handleSubmit((data) => {
    if (isValid) {
      store.setIsValidForm(isValid);
      navigate('/form/2');
    } else {
      store.setIsValidForm(isValid);
    }
  });

  return (
    <ResumeFormContainer>
      <StyledStepOneForm noValidate onSubmit={onSubmit}>
        <Typography component='h2' variant='h4' width='100%' align='left'>Основная информация</Typography>
        <Input {...register('firstName')} onChange={(event) => store.setFirstName(event.target.value)} value={firstName} error={!!errors?.firstName} helperText={errors?.firstName?.message} id='firstName' name='firstName' label={'Имя'} required />
        <Input {...register('lastName')} onChange={(event) => store.setLastName(event.target.value)} value={lastName} error={!!errors?.lastName} helperText={errors?.lastName?.message} name='lastName' label={'Фамилия'} required />
        <Input {...register('middleName')} onChange={(event) => store.setMiddleName(event.target.value)} value={middleName} error={!!errors?.middleName} helperText={errors?.middleName?.message} name='middleName' label={'Отчество'} />
        <Input {...register('city')} onChange={(event) => store.setCity(event.target.value)} value={city} error={!!errors?.city} helperText={errors?.city?.message} name='city' label={'Город проживая'} required />
        <Input {...register('gender')} onChange={(event) => store.setGender(event.target.value)} value={gender} error={!!errors?.gender} helperText={errors?.gender?.message} name='gender' label={'Пол'} required />
        <Input {...register('citizenship')} onChange={(event) => store.setCitizenship(event.target.value)} value={citizenship} error={!!errors?.citizenship} helperText={errors?.citizenship?.message} name='citizenship' label={'Гражданство'} required />
        <Input {...register('desiredPosition')} onChange={(event) => store.setDesiredPosition(event.target.value)} value={desiredPosition} error={!!errors?.desiredPosition} helperText={errors?.desiredPosition?.message} name='desiredPosition' label={'Желаемая должность'} required />
        <Input {...register('aboutYou')} onChange={(event) => store.setAboutYou(event.target.value)} value={aboutYou} error={!!errors?.aboutYou} helperText={errors?.aboutYou?.message} name='aboutYou' label={'О себе'} multiline />
        <StyledFormGroup>
          <StyledFormGroup>
            <Input {...register('salary')} onChange={(event) => store.setSalary(event.target.value)} value={salary} error={!!errors?.salary} helperText={errors?.salary?.message} name='salary' label={'Зарплата'} type='number' required />
            <Input
              {...register('currency')}
              onChange={(event) => store.setCurrency(event.target.value)}
              value={currency}
              name='currency'
              id="outlined-select-currency"
              select
              label="Валюта"
              defaultValue="RUB"
              sx={{ height: 'fit-content' }}
              error={!!errors?.currency} helperText={errors?.currency?.message}
            >
              {currenciesData}
            </Input>
          </StyledFormGroup>
        </StyledFormGroup>
        <StyledFormGroup>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <Controller
              name="dateOfBirthday"
              control={control}
              render={({ field: { ref } }) => {
                return (
                  <DatePicker
                    label="День рождения"
                    onChange={(value) => {
                      if (value !== null && value !== undefined) {
                        store.setDateOfBirthday(moment(value).toDate());
                      }
                    }}
                    ref={ref}
                    format='DD-MM-YYYY'
                    slots={{
                      textField: (params) => (<StyledDatePickerTextField {...params} />)
                    }}
                  />
                );
              }}
            />
          </LocalizationProvider>
          <StyledFilePickerButton variant='contained' color={fileName ? 'success' : 'secondary'} startIcon={<CloudUploadIcon />}>
            <StyledFilePickerTypography>
              {fileName ? fileName : 'Загрузить фотографию'}
            </StyledFilePickerTypography>
            <VisuallyHiddenInput {...register('photo')} type='file' onChange={(event) => {
              if(event?.target?.files) {
                setFileName(event.target.files[0].name);
                store.setPhoto(event.target.files[0]);
              }
            }} />
          </StyledFilePickerButton>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth onClick={() => navigate('/')}>Назад</Button>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth type='submit'>Далее</Button>
        </StyledFormGroup>
      </StyledStepOneForm>
    </ResumeFormContainer>
  );
});