import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/redirect")({
  beforeLoad: () => {
    throw new Error("Redirecting...");
  },
  loader: () => {
    // This will be caught by TanStack Router and redirected
    window.location.href = "/";
  },
});
