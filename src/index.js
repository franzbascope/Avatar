import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

setGlobal({
  currentAvatar: {
    body: "body1.png",
    bottoms: "bottoms1.png",
    eyes: "eyes1.png",
    hairs: "hairs2.png",
    mouth: "mouth1.png",
  },
  avatars: [],
  users: [],
  currentPage: "index",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
