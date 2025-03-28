import { useMutation } from "@tanstack/react-query";

export function useUpdateData({ name, url }) {
  const updateData = async (data) => {
    try {
      const response = await fetch(url, {
        method: "PUT ",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      // console.log(
      //   "checkpoint two: chekcing data before sending to fetch",
      //   data
      // );

      if (!response.ok) {
        // Attempt to parse the response body for an error message
        const errorData = await response.json();
        throw new Error(
          ` Status:${response.status}, Message: ${
            errorData.message || errorData.error
          }`
        );
      }

      //   console.log(response);
      return response.json();
    } catch (error) {
      console.log(`Error!: ${error}`);
      throw error;
    }
  };

  const { mutate, data, isPending, error, isError, isSuccess } = useMutation({
    mutationKey: [name],
    mutationFn: (data) => updateData(data),
    onSuccess: () => {
      console.log("Promise successful");
    },
    onError: () => {
      console.log("Promise failed");
    },
  });
  // console.log("checkpoint three: chekcing data after sending to fetch" , data);

  return { mutate, data, isPending, error, isError, isSuccess };
}
