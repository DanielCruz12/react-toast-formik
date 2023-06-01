import React from "react";
import { BarLoader } from "react-spinners";
const ErrorLoading = () => {
  return (
    <BarLoader
      className="h-screen align-middle flex justify-center w-full"
      color="#eeeeee"
    />
  );
};

export default ErrorLoading;
