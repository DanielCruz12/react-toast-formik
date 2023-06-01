import React from "react";
import PropTypes from "prop-types";

const Title = ({ title}) => {
  return (
    <div className="mb-6">
      <h1 className="block mb-2 text-xl text-gray-200 ">{title}</h1>
    </div>
  );
};

Title.propTypes = { title: PropTypes.string };

export default Title;
