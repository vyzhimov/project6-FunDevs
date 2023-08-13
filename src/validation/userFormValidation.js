import * as Yup from 'yup';

const emailRegExp =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

const phoneRegExp = /^\+\d{2}\d{3}\d{3}\d{2}\d{2}$/;

export const validationSchema = Yup.object().shape({
  avatar: Yup.mixed().test(
    'fileSize',
    'Image too large, max 3mb',
    value => !value || (value && value.size <= 3000000)
  ),
  name: Yup.string(),
  email: Yup.string()
    .required('Email is required field')
    .matches(emailRegExp, 'Invalid email address'),
  birthday: Yup.date()
    .min(new Date(1900, 0, 1))
    .max(new Date(), "You can't be born in the future!"),
  phone: Yup.string().matches(phoneRegExp, 'Invalid phone number'),
  city: Yup.string(),
});
