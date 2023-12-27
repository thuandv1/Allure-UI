import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import DefaultLayout from "layouts/DefaultLayout";
import { publicRoutes } from "routes";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Outlet />
            </DefaultLayout>
          }
        >
          {publicRoutes.map(({ path, component: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<h2>Ongoing</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
