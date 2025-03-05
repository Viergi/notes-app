import React from "react";
import { IoIosLogOut } from "react-icons/io";
import PropTypes from "prop-types";

function Logout({ name, onLogout }) {
  return (
    <button className="logout_button" onClick={onLogout}>
      <IoIosLogOut />
      <p>{name}</p>
    </button>
  );
}

Logout.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
