import React from "react";
import Avatar from "./Avatar";

const AvatarList = ({
  avatarList,
  onAvatarSelect,
  pickedAvatar,
  spinnerActive,
}) => {
  const renderedAvatarList = avatarList.map((avatar) => {
    return (
      <Avatar
        className="avatar"
        key={avatar.id}
        src={avatar.src}
        alt={avatar.label}
        id={avatar.id}
        onAvatarSelect={onAvatarSelect}
        picked={pickedAvatar === avatar.id}
        spinnerActive={spinnerActive}
      />
    );
  });
  return (
    <div
      className="ui four column grid"
      style={{
        padding: "14px",
        margin: "0",
      }}
    >
      {renderedAvatarList}
    </div>
  );
};

export default AvatarList;
