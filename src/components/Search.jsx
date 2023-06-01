import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Field, ErrorMessage, Form } from "formik";
import AuthSchema from "../schemas/searchSchema";

import Users from "./Users";
const Search = () => {
  const [word, setWord] = useState(1);
  const handleSubmit = (values) => {
    setWord(values.word);
    toast.success("Successfully toasted!");
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
            <div className="mb-6">
              <h1 className="block mb-2 text-xl text-gray-200 ">
                Fetch quantity of users
              </h1>
            </div>
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
            <button
              type="submit"
              className="text-white bg-blue-700 mt-4 mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buscar
            </button>
          </div>
        </Form>
      </Formik>
      <Toaster />

      <Users word={word} />
    </>
  );
};

export default Search;
