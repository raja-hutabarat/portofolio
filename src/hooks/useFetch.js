import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch the response!");
        }
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setError(null);
          setIsPending(false);
        }, 3000);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted.");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
