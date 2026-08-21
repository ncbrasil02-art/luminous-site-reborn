import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);

ReactDOM.createRoot(rootElement).render(app);
