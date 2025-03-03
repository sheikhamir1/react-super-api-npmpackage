import { useMutation } from "@tanstack/react-query";

export function useUpdateData({ name, url }) {
  const updateData = async (data) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
    mutationFn: (data) => updateData(data),
    onSuccess: () => {
      // console.log("Data sent successfully");
    },
  });
  // console.log("checkpoint three: chekcing data after sending to fetch" , data);

  return { mutate, data, isPending, error };
}
