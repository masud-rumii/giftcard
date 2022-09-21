import { Suspense, useEffect } from "react";

// Motion
import { motion } from "framer-motion/dist/framer-motion";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../redux/customise/customiseActions";

// Router
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

// Routes
import ProtectedRoute from "../ProtectedRoute";
import { Routes } from "./routes";

// Layouts
import FullLayout from "../layout/FullLayout";
import HorizontalLayout from "../layout/HorizontalLayout";
import VerticalLayout from "../layout/VerticalLayout";

// Components
import Analytics from "../view/main/dashboard/analytics";
import Login from "../view/pages/auth/login";
import Error404 from "../view/pages/errors/404";
import Home from "../view/pages/home";
import SingleCategory from "../view/pages/singleCategory";
import OperatorDetails from "../view/pages/singleCategory/Details";
//

export default function Router() {
  // Redux
  const customise = useSelector((state) => state.customise);
  const dispatch = useDispatch();

  // Location
  const location = useHistory();

  // Dark Mode
  let themeLocal;

  useEffect(() => {
    if (localStorage) {
      themeLocal = localStorage.getItem("theme");
    }

    if (themeLocal === "light" || themeLocal === "dark") {
      document.querySelector("body").classList.add(themeLocal);
      dispatch(theme(themeLocal));
    } else {
      document.querySelector("body").classList.add(customise.theme);
      dispatch(theme(customise.theme));
    }
  }, []);

  // RTL
  useEffect(() => {
    if (customise.direction == "ltr") {
      document.querySelector("html").setAttribute("dir", "ltr");
    } else if (customise.direction == "rtl") {
      document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);

  // Url Check
  useEffect(() => {
    // Theme
    if (location.location.search == "?theme=dark") {
      localStorage.setItem("theme", "dark");
      themeLocal = "dark";
    } else if (location.location.search == "?theme=light") {
      localStorage.setItem("theme", "light");
      themeLocal = "light";
    }

    // Direction
    if (location.location.search == "?direction=ltr") {
      document.querySelector("html").setAttribute("dir", "ltr");
    } else if (location.location.search == "?direction=rtl") {
      document.querySelector("html").setAttribute("dir", "rtl");
    }
  }, []);

  // Default Layout
  const DefaultLayout = customise.layout; // FullLayout or VerticalLayout

  // All of the available layouts
  const Layouts = { VerticalLayout, HorizontalLayout, FullLayout };

  // Return Filtered Array of Routes & Paths
  const LayoutRoutesAndPaths = (layout) => {
    const LayoutRoutes = [];
    const LayoutPaths = [];
    if (Routes) {
      // Checks if Route layout or Default layout matches current layout
      Routes.filter(
        (route) =>
          route.layout === layout &&
          (LayoutRoutes.push(route), LayoutPaths.push(route.path))
      );
    }

    return { LayoutRoutes, LayoutPaths };
  };

  // Return Route to Render
  const ResolveRoutes = () => {
    return Object.keys(Layouts).map((layout, index) => {
      const { LayoutRoutes, LayoutPaths } = LayoutRoutesAndPaths(layout);

      let LayoutTag;
      if (DefaultLayout == "HorizontalLayout") {
        if (layout == "VerticalLayout") {
          LayoutTag = Layouts["HorizontalLayout"];
        } else {
          LayoutTag = Layouts[layout];
        }
      } else {
        LayoutTag = Layouts[layout];
      }

      return (
        <Route path={LayoutPaths} key={index}>
          <LayoutTag>
            <Switch>
              {LayoutRoutes.map((route) => {
                return (
                  <ProtectedRoute
                    key={route.path}
                    path={route.path}
                    exact={route.exact === true}
                    component={(props) => {
                      return (
                        <Suspense fallback={null}>
                          {route.layout === "FullLayout" ? (
                            <route.component {...props} />
                          ) : (
                            <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
                            >
                              <route.component {...props} />
                            </motion.div>
                          )}
                        </Suspense>
                      );
                    }}
                  />
                );
              })}
            </Switch>
          </LayoutTag>
        </Route>
      );
    });
  };

  return (
    <BrowserRouter>
      <Switch>
        {ResolveRoutes()}

        {/* Home Page */}
        <Route
          exact
          path={"/1"}
          render={() => {
            return DefaultLayout == "HorizontalLayout" ? (
              <Layouts.FullLayout>
                <Analytics />
              </Layouts.FullLayout>
            ) : (
              <Layouts.VerticalLayout>
                <Analytics />
              </Layouts.VerticalLayout>
            );
          }}
        />

        {/* Home Page */}
        <Route
          exact
          path="/"
          render={() => {
            return DefaultLayout == "HorizontalLayout" ? (
              <Layouts.FullLayout>
                <Home />
              </Layouts.FullLayout>
            ) : (
              <Layouts.FullLayout>
                <Home />
              </Layouts.FullLayout>
            );
          }}
        />

        <Route
          exact
          path="/login"
          render={() => {
            return DefaultLayout == "HorizontalLayout" ? (
              <Layouts.FullLayout>
                <Login />
              </Layouts.FullLayout>
            ) : (
              <Layouts.FullLayout>
                <Login />
              </Layouts.FullLayout>
            );
          }}
        />

        <Route
          exact
          path="/single-service/:id"
          render={() => {
            return DefaultLayout == "HorizontalLayout" ? (
              <Layouts.FullLayout>
                <SingleCategory />
              </Layouts.FullLayout>
            ) : (
              <Layouts.FullLayout>
                <SingleCategory />
              </Layouts.FullLayout>
            );
          }}
        />

        <Route
          exact
          path="/operator-details/:operatorId"
          render={() => {
            return DefaultLayout == "HorizontalLayout" ? (
              <Layouts.FullLayout>
                <OperatorDetails />
              </Layouts.FullLayout>
            ) : (
              <Layouts.FullLayout>
                <OperatorDetails />
              </Layouts.FullLayout>
            );
          }}
        />

        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
