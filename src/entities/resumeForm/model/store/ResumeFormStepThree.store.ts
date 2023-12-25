import { makeAutoObservable } from 'mobx';

class ResumeFormStepThree {
  language = '';
  internationalLanguages = [''];
  isValidForm = false;

  constructor() {
    makeAutoObservable<this>(this);
  }

  setLanguage(value: string) {
    this.language = value;
  }

  setInternationalLanguages(value: string[]) {
    this.internationalLanguages = value;
  }

  setIsValidForm(value: boolean) {
    this.isValidForm = value;
  }

}

const store = new ResumeFormStepThree();
export default store;