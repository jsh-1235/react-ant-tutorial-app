import { useState, useEffect } from "react";

export function useInput(initialValue, action) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    action(value);

    setValue("");
  };

  return [value, handleChange, handleSubmit];
}

export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleFetch = (type = initialType) => {
    fetch(`${baseUrl}/${type}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.err(err));
  };

  return [data, handleFetch];
}

export function useFetchPreload(baseUrl, initialType) {
  const [data, setData] = useState(null);

  useEffect(() => {
    handleFetch(initialType);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleFetch = (type = initialType) => {
    fetch(`${baseUrl}/${type}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.err(err));
  };

  return { data };
}
