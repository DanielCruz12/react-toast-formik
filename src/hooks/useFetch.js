import { useEffect, useState } from "react";
import { AxiosConfig } from "../config/axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toastNotification, setToastNotification] = useState(false);

  useEffect(() => {
    const getUsers = () => {
      try {
        setLoading(true)
        setTimeout(() => {
          AxiosConfig.get(url).then((response) => {
            setData(response.data.results);
            setLoading(false)
            setToastNotification(true)
          });
        }, 300);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [url]);

  return { data, loading, toastNotification };
};
