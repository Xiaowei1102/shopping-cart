import { useState, useEffect } from "react";

const useData = (url) => {
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
        .then((response) => setImageURL(response[0].url))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return {data, error, loading}

}