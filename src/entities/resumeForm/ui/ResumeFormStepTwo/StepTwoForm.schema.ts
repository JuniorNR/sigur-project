import * as Yup from 'yup';

export const schema = Yup.object().shape({
  hasExperience: Yup.boolean().required(),
  workPlaces: Yup.array().of(
    Yup.object()
      .shape({
        dateStart: Yup.date().notRequired(),
        withDateEnd: Yup.bool(),
        dateEnd: Yup.date(),
        companyName: Yup.string(),
        position: Yup.string(),
        responsibilities: Yup.string().nullable(),
      })
      .nullable()
  ),
});
