import React from "react";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <nav>
      <div
            onKeyPress={event => {
              if (event.key === 'Enter') {
                history.push('/');
              }
            }}
            onClick={() => {
              history.push('/');
            }}
            role="button"
            tabIndex="0"
          >
            <img className="logo" alt="" src="/images/myspace-lo.png" />
            <span>OurSpace</span>
          </div>
      </nav>
    </div>
  );
}
