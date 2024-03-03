import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";
import "../styles/aboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

AboutMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AboutMenuItem;
