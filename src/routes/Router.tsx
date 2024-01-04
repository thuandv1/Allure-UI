import { Suspense } from "react";
import { publicRoutes } from "routes";
import { Loading } from "@gui/fluent-ui-allure";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import DefaultLayout from "layouts/DefaultLayout";
import { NotFoundImg } from "assets/images";

function Router() {
  const [t] = useTranslation("common");

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
            <Route
              key={path}
              path={path}
              element={
                <Suspense
                  fallback={
                    <div className="center">
                      <Loading>{t("loading")}</Loading>
                    </div>
                  }
                >
                  <Page />
                </Suspense>
              }
            />
          ))}
          <Route
            path="*"
            element={<img className="img-not-found" src={NotFoundImg} alt="" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
