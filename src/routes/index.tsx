import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import AppLayout from "@/AppLayout";
import { useState, useEffect, startTransition, Suspense } from "react";
import { LoadingSpinner } from "@/components/loader";

const router = createBrowserRouter(routes);

const AppRouter = () => {
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setIsPending(true);
      setIsPending(false);
    });
  }, []);
  return (
    <AppLayout>
      <Suspense fallback={<LoadingSpinner />}>
        {isPending ? <LoadingSpinner /> : <RouterProvider router={router} />}
      </Suspense>
    </AppLayout>
  );
};

export default AppRouter;
