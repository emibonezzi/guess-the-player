import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <App />
          <ReactQueryDevtools />
        </ChakraProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
