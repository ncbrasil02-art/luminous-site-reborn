import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { getRouter } from "./router";

const router = getRouter();

function App() {
  return (
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root")!;

// Use createRoot to avoid hydration mismatch in preview environment
ReactDOM.createRoot(rootElement).render(<App />);
