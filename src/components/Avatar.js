import React from "react";
import "./Avatar.css";

const Avatar = ({
  className,
  id,
  src,
  alt,
  onAvatarSelect,
  onPickerOpen,
  pickerActive,
  picked,
  spinnerActive,
}) => {
  return (
    <div
      className={className === "currentAvatar" ? null : "column"}
      onClick={className === "currentAvatar" ? onPickerOpen : null}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className={
          className !== "currentAvatar" && picked && spinnerActive === id
            ? "loader"
            : null
        }
      ></div>

      <div
        className={
          className !== "currentAvatar" && picked && spinnerActive !== id
            ? "pickedAvatar"
            : null
        }
      ></div>

      <div
        className="overlay"
        onClick={onAvatarSelect === null ? null : () => onAvatarSelect(id)}
      ></div>
      <img
        className={
          className === "currentAvatar" && pickerActive
            ? "activeCurrentAvatar"
            : className
        }
        src={src}
        alt={alt}
        id={id}
      />
    </div>
  );
};

export default Avatar;
