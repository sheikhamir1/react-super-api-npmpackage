import { useMutation } from "@tanstack/react-query";

export function useDeleteData({ name, url }) {
  const deleteData = async (id) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
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
    mutationFn: (id) => deleteData(id),
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
