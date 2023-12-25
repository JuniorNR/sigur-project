import { makeAutoObservable } from 'mobx';

class ResumeFormStepOne {
  firstName = '';
  middleName = '';
  city = '';
  lastName = '';
  citizenship = '';
  desiredPosition = '';
  dateOfBirthday = new Date();
  gender = '';
  salary = '';
  currency ='USD';
  aboutYou = '';
  photo: File | null = null;
  isValidForm = false;

  constructor() {
    makeAutoObservable<this>(this);
  }

  setPhoto(file: File) {
    this.photo = file;
  }

  setFirstName(value: string) {
    this.firstName = value;
  }

  setAboutYou(value: string) {
    this.aboutYou = value;
  }

  setIsValidForm(value: boolean) {
    this.isValidForm = value;
  }

  setMiddleName(value: string) {
    this.middleName = value;
  }
  setCity(value: string) {
    this.city = value;
  }
  setLastName(value: string) {
    this.lastName = value;
  }
  setCitizenship(value: string) {
    this.citizenship = value;
  }
  setDesiredPosition(value: string) {
    this.desiredPosition = value;
  }
  setDateOfBirthday(value: Date) {
    this.dateOfBirthday = value;
  }
  setGender(value: string) {
    this.gender = value;
  }
  setSalary(value: string) {
    this.salary = value;
  }
  setCurrency(value: string) {
    this.currency = value;
  }
}

const store = new ResumeFormStepOne();
export default store;