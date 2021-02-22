import { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

interface IRequestData {
  data: Quote[];
  loading: boolean;
  error: null;
}
const initState: IRequestData = { data: [], loading: true, error: null };
export const useFetch = (url: string) => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
    return () => {};
  }, [url]);

  return state;
};
