import { FC, useEffect } from "react";
import { ResumeFormContainer } from "../ResumeFormContainer";
import { StyledResumeFormResult } from "./ResumeFormResult.styles";
import { Box, Typography } from "@mui/material";
import storeStepOne from '../../model/store/ResumeFormStepOne.store';
import storeStepTwo from '../../model/store/ResumeFormStepTwo.store';
import storeStepThree from '../../model/store/ResumeFormStepThree.store';
import { useNavigate } from "react-router-dom";


export const ResumeFormResult: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!storeStepOne.isValidForm) {
      navigate('/form/1');
      return;
    }
    if (!storeStepTwo.isValidForm) {
      navigate('/form/2');
      return;
    }
    if (!storeStepThree.isValidForm) {
      navigate('/form/3');
      return;
    }
});

  return (
    <ResumeFormContainer>
      <StyledResumeFormResult>
        <Box sx={{ width: '100%', mb: '25px' }}>
          <Typography component='h2' variant='h4' width='100%' align='left'>Обзор</Typography>
          <Typography component='h3' variant='h5' width='100%' align='left'>Основная информация</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Имя: {storeStepOne.firstName}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Фамилия: {storeStepOne.lastName}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Отчество: {storeStepOne.middleName}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Гражданство: {storeStepOne.citizenship}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Обо мне: {storeStepOne.aboutYou}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Город проживания: {storeStepOne.city}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Желаемая зарплата: {storeStepOne.salary} {storeStepOne.currency}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Дата рождения: {storeStepOne.dateOfBirthday.getDate()}/{storeStepOne.dateOfBirthday.getMonth()}/{storeStepOne.dateOfBirthday.getFullYear()}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Желаемая позиция: {storeStepOne.desiredPosition}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Пол: {storeStepOne.gender}</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Фотография: {storeStepOne.photo?.name}</Typography>
        </Box>
        <Box sx={{ width: '100%', mb: '25px' }}>
          <Typography component='h3' variant='h5' width='100%' align='left'>Опыт работы</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>Опыт работы: {storeStepTwo.hasExperience ? 'Есть' : 'Нет'}</Typography>
          {storeStepTwo.workPlaces.map((workPlace, index) => (
            <Box key={workPlace.id}>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Место работы #{index + 1}</Typography>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Название компании: {workPlace.companyName}</Typography>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Должность: {workPlace.position}</Typography>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Обязанности: {workPlace.responsibilities}</Typography>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Начало работы: {workPlace?.dateStart?.getDate()}/{workPlace?.dateStart?.getMonth()}/{workPlace?.dateStart?.getFullYear()}</Typography>
              <Typography component='p' variant='subtitle1' width='100%' align='left'>Конец работы: {workPlace.withDateEnd ? (`${workPlace?.dateStart?.getDate()}/${workPlace?.dateStart?.getMonth()}/${workPlace?.dateStart?.getFullYear()}`) : 'Сейчас работаю'}</Typography>
            </Box>
          ))
          }
        </Box>
        <Box sx={{ width: '100%', mb: '25px' }}>
          <Typography component='h3' variant='h5' width='100%' align='left'>Образование (WIP)</Typography>
          <Typography component='p' variant='subtitle1' width='100%' align='left'>---</Typography>
        </Box>
      </StyledResumeFormResult>
    </ResumeFormContainer>
  );
};