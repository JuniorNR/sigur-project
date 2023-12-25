import { Gender, Currency } from 'App/types/common';

export type Salary = {
  value: number;
  currency: Currency;
};

export type WorkPlaces = {
  id: number;
  dateStart: Date | null;
  withDateEnd: boolean;
  dateEnd: Date | null;
  companyName: string;
  position: string;
  responsibilities: string | null;
}


export interface ResumeFormSchema {
  stepOne: ResumeFormStepOneSchema;
}

export interface ResumeFormStepOneSchema {
  firstName: string;
  middleName: string;
  lastName: string;
  city: string;
  dateOfBirthday: Date;
  gender: Gender;
  citizenship: string;
  desiredPosition: string;
  salary: Salary;
  aboutYou: string;
  photo: File | null;
}

export type PrivateFieldsStepOne =
  | '_firstName'
  | '_middleName'
  | '_city'
  | '_lastName'
  | '_citizenship'
  | '_desiredPosition'
  | '_dateOfBirthday'
  | '_gender'
  | '_salary'
  | '_aboutYou'
  | '_photo'
  | '_isValid';
