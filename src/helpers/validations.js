import * as yup from "yup";

export const validateLogin = (user) => {
  const schema = yup.object().shape({
    password: yup.string().required(),
    email: yup.string().email().required(),
  });
  return schema.validate(user);
};

export const validateRegister = (user) => {
  const schema = yup.object().shape({
    phone: yup.string().required(),
    password: yup.string().required().min(6),
    email: yup.string().email().required(),
    name: yup.string().required(),
  });
  return schema.validate(user);
};

export const validateCreateItem = (item) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    status: yup.string().required(),
    photo: yup.string().required(),
    genreId: yup.string().required(),
    userId: yup.string().required()
  });
  return schema.validate(item)
}
