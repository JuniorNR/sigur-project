import { FC } from 'react';

import { ResumeFormContainerProps } from './ResumeFormContainer.interface';
import { StyledResumeFormContainer } from './ResumeFormContainer.styles';

export const ResumeFormContainer: FC<ResumeFormContainerProps> = ({
  children
}) => {

  return (
    <StyledResumeFormContainer>
      {children}
    </StyledResumeFormContainer>
  );
};