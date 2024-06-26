import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import "./Styles/mediaQuery.css";
import "./Styles/admin.css";
import "./Styles/posting.css";
// import { Provider } from "react-redux";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Provider>
      <App />
    </Provider> */}
  </React.StrictMode>
);
