//import React from "react";
import searchLogo from "../images/SearchIcon.png";
import micLogo from "../images/7123011_google_mic_icon.png";

export default function SearchMenu() {
  return (
    <div>
      <form action="https://www.google.com/search" method="GET">
        {/* <img src={searchLogo} alt="Search Logo" className="searchlogo" /> */}
        <input type="text" name="q" placeholder="Search Google or type a URL" />
        <img src={micLogo} alt="mic Logo" className="miclogo" />
      </form>
      <div className="positionLogo"></div>
    </div>
  );
}
