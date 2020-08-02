import React, { useState, useEffect, useRef, createRef } from "react";
import Avatar from "./components/Avatar";
import Popover from "./components/Popover";

const App = ({ avatarList }) => {
  const [currentAvatar, setCurrentAvatar] = useState(avatarList[0]);
  const [pickerActive, setPickerActive] = useState(false);
  const [spinnerActive, setSpinnerActive] = useState(0);
  const [pickedAvatarId, setPickedAvatarId] = useState(1);

  const ref = createRef();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // burayı componentlere dağıtıcaz, avatar'a belki?
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setPickerActive(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, [ref]);

  function onAvatarSelect(id) {
    setPickedAvatarId(id);
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setSpinnerActive(pickedAvatarId);
      setTimeout(() => {
        setSpinnerActive(0);
        setPickerActive(false);
        setCurrentAvatar(avatarList[pickedAvatarId - 1]);
      }, 1000);
    }
  }, [pickedAvatarId]);

  function onPickerOpen() {
    setPickerActive(!pickerActive);
  }

  return (
    <div className="ui container">
      <div
        className="ui container"
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <Avatar
          className="currentAvatar"
          onAvatarSelect={null}
          onPickerOpen={onPickerOpen}
          pickerActive={pickerActive}
          id={currentAvatar.id}
          src={currentAvatar.src}
          alt={currentAvatar.label}
        />
      </div>

      <Popover
        ref={ref}
        spinnerActive={spinnerActive}
        avatarList={avatarList}
        onAvatarSelect={onAvatarSelect}
        pickerActive={pickerActive}
        pickedAvatar={pickedAvatarId}
      />
    </div>
  );
};

export default App;
