import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required("Please Enter your name"),
  email: yup
    .string()
    .email()
    .matches(
      "^[a-zA-Z0-9-.]+@([a-zA-Z-]+\\.)+[a-zA-Z-]{2,4}$",
      "email must be a valid email"
    )
    .required("Please Enter your Email"),
  password: yup
    .string()
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).*$",
      "must include at least 1 uppercase and lowercase symbols"
    )
    .matches(
      '^(?=.*\\d)(?=.*[~`!@#$%^&()_=+{}\\[\\]/|:;,"<>?]).*$',
      "must include 1 number and special symbol"
    )
    .matches("^[^А-Яа-яЇїІіЄєҐґЁё]+$", "must include only latin letters")
    .min(8)
    .max(20)
    .required("Please Enter your Password"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password doesn`t match")
    .required("Please Confirm your Password"),
});
