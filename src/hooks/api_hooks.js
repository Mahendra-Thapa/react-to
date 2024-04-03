import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const useApiHooks = (params, id) => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(true);

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get("https://www.omdbapi.com", {
        params: {
          apikey: "fc1d2de0",
          ...params,
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

  //it is same as a below but it is used for the change the title to go in the different and while unmount
  useEffect(() => {
    if (title !== "") {
      document.title = title;
    }
    return () => {
      document.title = "Default value";
    };
  }, [title, show]);

  // same as above
  // useEffect(()=>{
  //  document.title = title;
  // },[title, show])

  useEffect(() => {
    getData();
    setShow(true);
  }, [id]);

  return [load, data, error, setTitle, show, setShow];
};
