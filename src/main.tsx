import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;
const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

ReactDOM.createRoot(rootElement).render(app);
