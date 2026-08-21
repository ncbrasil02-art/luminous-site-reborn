import { StrictMode, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { getRouter } from "./router";

function App() {
  const [router] = useState(() => getRouter());
  
  return (
    <StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StrictMode>
  );
}

const rootElement = document.getElementById("root")!;

// Simple hydration strategy: if there's content, hydrate. 
// We use a small delay or check to ensure we don't flash, 
// but TanStack Router handles most of this.
if (rootElement.innerHTML.trim().length > 0) {
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  ReactDOM.createRoot(rootElement).render(<App />);
}
