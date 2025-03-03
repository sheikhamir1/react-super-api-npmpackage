import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const defaultClient = new QueryClient();

export const Wrapper = ({ children, client }) => {
  return (
    <QueryClientProvider client={client || defaultClient}>
      {children}
    </QueryClientProvider>
  );
};
