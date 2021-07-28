import React from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

export default function OptionItem({ key, value, label, onLeaveFeedback }) {
  return (
    <button
      className={styles.button}
      key={key}
      value={value}
      onClick={onLeaveFeedback}
    >
      {label}
    </button>
  );
}

OptionItem.defaultProps = {
  label: "Button",
};

OptionItem.propTypes = {
  label: PropTypes.string,
  key: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
