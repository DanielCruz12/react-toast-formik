import PropTypes from "prop-types";

const Button = ({ name, icon: Icon }) => {
  return (
    <button
      type="submit"
      className="text-white flex gap-2 flex-wrap w-100 bg-blue-700 mt-4 mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <Icon className="mt-1" />
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.func,
};

export default Button;
