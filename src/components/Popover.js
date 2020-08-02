import React, { useState, useEffect, useRef } from "react";
import "./Popover.css";
import AvatarList from "./AvatarList";

const Popover = React.forwardRef((props, ref) => {
  const [popoverClosing, setPopoverClosing] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setPopoverClosing(true);
      setTimeout(() => {
        setPopoverClosing(false);
      }, 100);
    }
  }, [props.pickerActive]);

  return (
    <div
      className={props.pickerActive ? "popover-fadein" : "popover-fadeout"}
      style={{
        display: props.pickerActive || popoverClosing ? "block" : "none",
      }}
    >
      <div
        className="ui pointing label"
        style={{
          width: "280px",
          backgroundColor: "rgb(44, 48, 51)",
          transform: "translate(-50%)",
          position: "absolute",
          left: "50%",
          marginTop: "0",
          padding: "0",
          boxShadow: "2px 2px 10px rgb(102, 102, 102)",
        }}
      >
        <div
          className="text"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Choose your avatar
        </div>
        <div
          className="ui container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          ref={ref}
        >
          <AvatarList
            spinnerActive={props.spinnerActive}
            avatarList={props.avatarList}
            onAvatarSelect={props.onAvatarSelect}
            pickedAvatar={props.pickedAvatar}
          />
        </div>
      </div>
    </div>
  );
});

export default Popover;
