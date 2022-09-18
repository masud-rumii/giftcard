import React, { Suspense } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";

import "./assets/icons/remixicon.css";
import "./assets/less/yoda-theme.less";

import App from "./App";

// Create a client
// const queryClient = new QueryClient();

ReactDOM.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
