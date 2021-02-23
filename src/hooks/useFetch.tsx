import { useEffect, useRef, useState } from "react";

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
  const isMounted = useRef<boolean>(true);
  const [state, setState] = useState(initState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("Componente no montado...");
        }
      });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
};
