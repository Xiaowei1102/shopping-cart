import { useState, useEffect } from "react";

export const useData = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => setData(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return {data, error, loading}

}