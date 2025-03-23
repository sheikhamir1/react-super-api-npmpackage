import { useQuery } from "@tanstack/react-query";

export function useGetData({ name, url, options = {} }) {
  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Attempt to parse the response body for an error message
        const errorData = await response.json();
        throw new Error(
          ` Status:${response.status}, Message: ${
            errorData.message || errorData.error
          }`
        );
      }

      // console.log(response);
      return response.json();
    } catch (error) {
      console.log(`Error!: ${error}`);
      throw error;
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
