import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ErrorLoading from "./Error";
import PropTypes from "prop-types";

/* import { AiOutlineSearch } from "react-icons/ai";
import Button from "./Button";
 */

const Users = ({ word }) => {
  const { data, loading } = useFetch(`&results=${word}`);
  const [number, setNumber] = useState(3)

  const getMoreUsers = () => {
    setNumber(number + 3)
  }
  return (
    <div className="w-full">
      {loading ? (
        <ErrorLoading />
      ) : (
        <>
          <div className=" grid grid-cols-1 gap-3 mb-8 rounded-xl md:mb-12 md:grid-cols-2">
            {data.slice(0, number).map((elm) => {
              return (
                <figure
                  key={elm.login.uuid}
                  className="flex flex-col items-center justify-center p-8 text-center bg-zinc-900 border-white rounded-xl"
                >
                  <blockquote className="max-w-2xl mx-auto mb-4  lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-100 dark:text-white">
                      Very easy this was to integrate
                    </h3>
                    <p className="my-4">{elm.location.timezone.description}</p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center space-x-3">
                    <img
                      className="rounded-full w-9 h-9"
                      src={elm.picture.medium}
                      alt="profile picture"
                    />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                      <div>{elm.email}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Developer at Open AI
                      </div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </>
      )}
      {data.length > 3 ? (
        <div>
          <button
            type="submit"
            onClick={getMoreUsers}
            className="text-white flex gap-2 flex-wrap w-100 bg-orange-400 mt-4 mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Charge more users
          </button>

        </div>) : (<div></div>)
      }
      {/*<Button  name="Charge more users" icon={AiOutlineSearch} />*/}
    </div >
  );
};

Users.propTypes = {
  word: PropTypes.number,
};

export default Users;
