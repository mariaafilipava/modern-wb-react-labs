import { useEffect } from "react";

function useFetchLogger(url, options = {}) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const body = await response.clone().json();

        localStorage.setItem("fetchLog", JSON.stringify({
          url,
          options,
          status: response.status,
          body,
        }));
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [url]);
}

export default useFetchLogger;
