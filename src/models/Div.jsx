import React from "react";
import PropTypes from "prop-types";

export default function Div({ className, children }) {
  return <div className={className}>{children}</div>;
}

Div.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
