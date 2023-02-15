import { ReactElement, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const Routes = (): ReactElement<unknown> => {
  // <Suspense fallback={<LoadingPage />}></Suspense>
  return (
    <Suspense>
      <Switch>
        <Route path="/home" element={<HomePage />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
