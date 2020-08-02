import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const avatarList = [
  { src: "/avatars/avatar1.png", label: "Avatar 1", id: 1 },
  { src: "/avatars/avatar2.png", label: "Avatar 2", id: 2 },
  { src: "/avatars/avatar3.png", label: "Avatar 3", id: 3 },
  { src: "/avatars/avatar4.png", label: "Avatar 4", id: 4 },
  { src: "/avatars/avatar5.png", label: "Avatar 5", id: 5 },
  { src: "/avatars/avatar6.png", label: "Avatar 6", id: 6 },
];

ReactDOM.render(
  <App avatarList={avatarList} />,
  document.querySelector("#root")
);
