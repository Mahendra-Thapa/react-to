import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useApiHooks = (params, id) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get("https://www.omdbapi.com", {
        params: {
          apikey: "fc1d2de0",
          ...params
        },
      });
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setError(err);
      setLoad(false);
    }
  };

  // console.log(data)

  useEffect(() => {
    getData();
  }, [id]);

  return [load, data, error];
};
