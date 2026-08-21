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

if (rootElement.innerHTML.trim().length > 0) {
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  ReactDOM.createRoot(rootElement).render(<App />);
}
