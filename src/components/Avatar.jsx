import React from "react";
import AvatarImage from "../images/busolami.jpg";

export default function Avatar() {
  return (
    <div>
      <img src={AvatarImage} className="avatar-image" alt="Busolami's image" />
    </div>
  );
}
