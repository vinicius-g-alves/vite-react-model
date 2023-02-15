import { ReactElement, Suspense } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const Routes = (): ReactElement<unknown> => {
  // <Suspense fallback={<LoadingPage />}></Suspense>
  return (
    <Router>
      <Suspense>
        <Switch>
          <Route path="/" element={<HomePage />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
