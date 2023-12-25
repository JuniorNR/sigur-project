import { FC, Fragment, useEffect } from 'react';
import { Controller, useForm } from "react-hook-form";
import { ResumeFormContainer } from "../ResumeFormContainer";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import store from '../../model/store/ResumeFormStepTwo.store';
import storeStepOne from '../../model/store/ResumeFormStepOne.store';
import { StyledStepTwoForm, StyledFormGroup, StyledDatePickerTextField } from './ResumeFormStepTwo.styles';
import { schema } from "./StepTwoForm.schema";
import { Box, Button, Checkbox, FormControlLabel, Switch, Typography } from "@mui/material";
import { Input } from "shared/ui";
import { observer } from 'mobx-react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';


export const ResumeFormStepTwo: FC = observer(() => {
  const { hasExperience, workPlaces } = store;
  const navigate = useNavigate();
  const { control, clearErrors, register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (!storeStepOne.isValidForm) {
      navigate('/form/1');
    }
  });

  const onSubmit = handleSubmit((data) => {

    if (isValid) {
      store.setIsValidForm(true);
      navigate('/form/3');
    } else {
      store.setIsValidForm(false);
    }
  });

  return (
    <ResumeFormContainer>
      <StyledStepTwoForm noValidate onSubmit={onSubmit}>
        <Typography component='h2' variant='h4' width='100%' align='left'>Опыт работы</Typography>
        <FormControlLabel
          sx={{ width: '100%' }}
          label="Есть опыт"
          control={
            <Switch
              {...register('hasExperience')}
              id='hasExperience'
              name='hasExperience'
              checked={hasExperience}
              onChange={(event) => {
                store.setHasExperience(!hasExperience);
                store.addWorkPlaceInit();
                if (hasExperience && workPlaces.length) {
                  store.removeWorkPlacesAll();
                }
              }}
            />
          }
        />
        {hasExperience && (workPlaces.map((workPlace) => (
          <Fragment key={workPlace.id}>
            <StyledFormGroup>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FormControlLabel label='По настоящее время' {...register(`workPlaces.${workPlace.id}.withDateEnd`)} control={
                  <Checkbox
                    name={`workPlaces.${workPlace.id}.withDateEnd`}
                    checked={workPlace.withDateEnd}
                    sx={{ marginLeft: '10px', '& *': { color: '#fff' } }}
                    onChange={(event) => {
                      store.editWorkPlacesDateEnd(workPlace, new Date());
                      store.editWorkPlacesWithDateEnd(workPlace, event.target.checked);
                      clearErrors(`workPlaces.${workPlace.id}.dateEnd`);
                    }}
                  />
                }
                />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <Controller
                    {...register(`workPlaces.${workPlace.id}.dateStart`)}
                    control={control}
                    render={({ field }) => {
                      return (
                        <DatePicker
                        {...register(`workPlaces.${workPlace.id}.dateStart`)}
                          label="Дата начала"
                          format='MM-YYYY'
                          onChange={(value) => {
                            if (value !== null && value !== undefined) {
                              store.editWorkPlacesDateStart(workPlace, moment(value).toDate());
                            }
                          }}
                          slots={{
                            textField: (params) => (<StyledDatePickerTextField {...params} />)
                          }}
                        />
                      );
                    }}
                  />
                </LocalizationProvider>
                {workPlace.withDateEnd && (
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Controller
                      name={`workPlaces.${workPlace.id}.dateEnd`}
                      control={control}
                      render={({ field: { ref } }) => {
                        return (
                          <DatePicker
                            ref={ref}
                            label="Дата окончания"
                            format='MM-YYYY'
                            onChange={(value) => {
                              if (value !== null && value !== undefined) {
                                store.editWorkPlacesDateEnd(workPlace, moment(value).toDate());
                              }
                            }}
                            slots={{
                              textField: (params) => (<StyledDatePickerTextField {...params} />)
                            }}
                          />
                        );
                      }}
                    />
                  </LocalizationProvider>
                )}
              </Box>
            </StyledFormGroup>
            <StyledFormGroup>
              <Input
                {...register(`workPlaces.${workPlace.id}.companyName`)}
                error={errors?.workPlaces && !!errors?.workPlaces[workPlace.id]?.companyName}
                helperText={errors?.workPlaces && errors?.workPlaces[workPlace.id]?.companyName?.message}
                id={`workPlaces.${workPlace.id}.companyName`}
                value={workPlace.companyName}
                onChange={(event) => store.editWorkPlacesCompanyName(workPlace, event.target.value)}
                name={`workPlaces.${workPlace.id}.companyName`}
                label={'Название компании'}
                required
              />
              <Input
                {...register(`workPlaces.${workPlace.id}.position`)}
                error={errors?.workPlaces && !!errors?.workPlaces[workPlace.id]?.position}
                helperText={errors?.workPlaces && errors?.workPlaces[workPlace.id]?.companyName?.message}
                id={`workPlaces.${workPlace.id}.position`}
                name={`workPlaces.${workPlace.id}.position`}
                value={workPlace.position}
                onChange={(event) => store.editWorkPlacesPosition(workPlace, event.target.value)}
                label={'Занимаемая должность'}
                required
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <Input
                {...register(`workPlaces.${workPlace.id}.responsibilities`)}
                error={errors?.workPlaces && !!errors?.workPlaces[workPlace.id]?.responsibilities}
                helperText={errors?.workPlaces && errors?.workPlaces[workPlace.id]?.responsibilities?.message}
                id={`workPlaces.${workPlace.id}.responsibilities`}
                name={`workPlaces.${workPlace.id}.responsibilities`}
                value={workPlace.responsibilities || ''}
                onChange={(event) => store.editWorkPlacesResponsibilities(workPlace, event.target.value)}
                label={'Чем приходилось заниматься'}
                multiline
              />
            </StyledFormGroup>
            <Button variant='contained' color='error' sx={{ borderRadius: '0px' }} fullWidth onClick={() => store.removeWorkPlace(workPlace)}>Удалить</Button>
          </Fragment>
        ))
        )}
        {hasExperience && <Button variant='contained' color='success' sx={{ borderRadius: '0px' }} fullWidth onClick={() => store.addWorkPlace()}>Добавить</Button>}
        <StyledFormGroup>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth onClick={() => navigate('/form/1')}>Назад</Button>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth type='submit'>Далее</Button>
        </StyledFormGroup>
      </StyledStepTwoForm>
    </ResumeFormContainer>
  );
});