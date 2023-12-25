import { FC, useEffect } from "react";

import { StyledStepThreeForm } from './ResumeFormStepThree.styles';
import { Button, Typography } from "@mui/material";
import { ResumeFormContainer } from "../ResumeFormContainer";
import { MultiSelect } from "shared/ui/MultiSelect";
import { languages } from "./ResumeFormStepThree.utils";
import { Input } from "shared/ui";
import { StyledFormGroup } from "./ResumeFormStepThree.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import store from '../../model/store/ResumeFormStepThree.store';
import storeStepOne from '../../model/store/ResumeFormStepOne.store';
import storeStepTwo from '../../model/store/ResumeFormStepTwo.store';


export const ResumeFormStepThree: FC = () => {
  const { language } = store;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isValid } } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
      if (!storeStepOne.isValidForm) {
        navigate('/form/1');
        return;
      }
      if (!storeStepTwo.isValidForm) {
        navigate('/form/2');
        return;
      }
  });

  const onSubmit = handleSubmit((data) => {
    if (isValid) {
      store.setIsValidForm(true);
      navigate('/form/result');
    } else {
      store.setIsValidForm(false);
    }
  });

  return (
    <ResumeFormContainer>
      <StyledStepThreeForm noValidate onSubmit={onSubmit}>
        <Typography component='h2' variant='h4' width='100%' align='left'>Образование (WIP)</Typography>
        <StyledFormGroup>
          <Input
            id='language'
            label='Родной язык'
            value={language}
          />
          <MultiSelect
            {...register('internationalLanguages')}
            values={languages}
            label='Иностранные языки'
            id='language'
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth onClick={() => navigate('/form/2')}>Назад</Button>
          <Button variant='contained' sx={{ borderRadius: '0px' }} fullWidth type='submit'>Далее</Button>
        </StyledFormGroup>

      </StyledStepThreeForm>
    </ResumeFormContainer>

  );
};