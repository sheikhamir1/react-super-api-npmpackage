import { useQuery } from "@tanstack/react-query";

export function useGetData({ name, url, options = {} }) {
  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(
          `HTTP error! status: ${error.status} ${
            error.message || error.message
          }`
        );
      }

      // console.log(response);
      return response.json();
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const { data, isPending, error } = useQuery({
    queryKey: [name],
    queryFn: fetchData,
    refetchInterval: options?.refetchInterval,
    staleTime: options?.staleTime,
    cacheTime: options?.cacheTime,
  });
  // console.log("data", data);

  return { data, isPending, error };
}
