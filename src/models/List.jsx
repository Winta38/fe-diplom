import React from "react";
import PropTypes from "prop-types";

export default function List({ className, children }) {
  return <ul className={className}>{children}</ul>;
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
