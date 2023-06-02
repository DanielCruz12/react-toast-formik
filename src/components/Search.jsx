import React, { useState, Suspense } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { AiOutlineSearch } from "react-icons/ai";
import AuthSchema from "../schemas/searchSchema";
import Button from "./Button";
import Title from "./Title";
const Users = React.lazy(() => import('./Users'));

const Search = () => {
  const [word, setWord] = useState(1);
  const handleSubmit = (values) => {
    setWord(values.word);
    toast.success("Usuarios encontrados! 😎👫👀🎯");
  };

  return (
    <>
      <Formik
        initialValues={{ word: 1 }}
        validationSchema={AuthSchema.search}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="w-full justify-center items-center">
            <Title title="Fetch quantity of users" />
            <Field
              type="number"
              name="word"
              placeholder="Buscar..."
              className="bg-[#111111f5] border text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <ErrorMessage
              name="word"
              className="form-text text-red-400 w-100"
              component="div"
            />
            <Button name="Buscar usuario" icon={AiOutlineSearch} />
          </div>
        </Form>
      </Formik>

      <Toaster />

      <Suspense >
        <Users word={word} />
      </Suspense>

    </>
  );
};

export default Search;
