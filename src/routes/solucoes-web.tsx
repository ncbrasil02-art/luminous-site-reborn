import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes-web")({
  component: () => <Outlet />,
});
