import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  word: Yup.number().required("Se requiere un número"),
});

const AuthSchema = {
  search: searchSchema,
};

export default AuthSchema;
