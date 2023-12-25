import { makeAutoObservable } from 'mobx';
import { WorkPlaces } from './ResumeForm.interface';

class ResumeFormStepTwo {
  hasExperience = false;
  isValidForm = false;
  workPlaces: WorkPlaces[] = [];

  constructor() {
    makeAutoObservable<this>(this);
  }

  setHasExperience(value: boolean) {
    this.hasExperience = value;
  }

  addWorkPlaceInit() {
    if(this.hasExperience && this.workPlaces.length === 0) {
      this.workPlaces.push({
        id: 1,
        dateStart: null,
        withDateEnd: false,
        dateEnd: null,
        companyName: '',
        position: '',
        responsibilities: null,
      });
    }
  }

  setIsValidForm(value: boolean) {
    this.isValidForm = value;
  }

  addWorkPlace() {
    if (this.hasExperience && this.workPlaces.length) {
      const maxId = this.workPlaces.reduce((max, cur) => cur.id > max ? cur.id : max, 0);
      this.workPlaces.push({
        id: maxId + 1,
        dateStart: null,
        withDateEnd: false,
        dateEnd: null,
        companyName: '',
        position: '',
        responsibilities: null,
      });
    }
  }

  removeWorkPlace(target: WorkPlaces) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );

    this.workPlaces.splice(index, 1);


    if(this.workPlaces.length === 0) {
      this.hasExperience = false;
    }
  }

  removeWorkPlacesAll() {
    this.workPlaces = [];
  }

  editWorkPlacesCompanyName(target: WorkPlaces, value: string) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].companyName = value;
    }
  }

  editWorkPlacesWithDateEnd(target: WorkPlaces, value: boolean) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].withDateEnd = value;
    }
  }


  editWorkPlacesPosition(target: WorkPlaces, value: string) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].position = value;
    }
  }

  editWorkPlacesResponsibilities(target: WorkPlaces, value: string) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].responsibilities = value;
    }
  }

  editWorkPlacesDateStart(target: WorkPlaces, data: Date) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].dateStart = data;
    }
  }

  editWorkPlacesDateEnd(target: WorkPlaces, data: Date | null) {
    const index = this.workPlaces.findIndex(
      (workPlaces) => workPlaces.id === target.id
    );
    if (index !== -1) {
      this.workPlaces[index].dateEnd = data;
    }
  }
}

const store = new ResumeFormStepTwo();
export default store;
