import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

AboutSubheading.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  menuItem: PropTypes.string.isRequired,
};

export default AboutSubheading;
