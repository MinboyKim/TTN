import { instance } from "@/lib/instance";
import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    instance
      .get(url)
      .then((response) => {
        setData(response.data.response);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("An error occurred");
        }
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
