import { useMutation } from "@tanstack/react-query";

export function useDeleteData({ name, url }) {
  const deleteData = async (id) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(
      //   "checkpoint two: chekcing data before sending to fetch",
      //   data
      // );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //   console.log(response);
      return response.json();
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  };

  const { mutate, data, isPending, error } = useMutation({
    mutationKey: [name],
    mutationFn: (id) => deleteData(id),
    onSuccess: () => {
      // console.log("Data deleted successfully");
    },
  });
  // console.log("checkpoint three: chekcing data after sending to fetch" , data);

  return { mutate, data, isPending, error };
}
