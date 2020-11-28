import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

setGlobal({
  currentAvatar: {
    body: "body1.jpg",
    bottoms: "bottoms1.jpg",
    eyes: "eyes1.jpg",
    hairs: "hairs1.jpg",
    mouth: "mouth1.jpg",
  },
  avatars: [],
  users: [],
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
