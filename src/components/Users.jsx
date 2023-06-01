import { useFetch } from "../hooks/useFetch";
import ErrorLoading from "./Error";

// eslint-disable-next-line react/prop-types
const Users = ({ word }) => {
  const { data, loading } = useFetch(`&results=${word}`);

  return (
    <div className="w-full">
      {loading ? (
        <ErrorLoading />
      ) : (
        <>
          <div className=" grid grid-cols-3 gap-3 mb-8 rounded-xl md:mb-12 md:grid-cols-2">
            {data.map((elm) => {
              return (
                <figure
                  key={elm.email}
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
    </div>
  );
};

export default Users;
