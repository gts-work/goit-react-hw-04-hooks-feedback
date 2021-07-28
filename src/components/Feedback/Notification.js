import React from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

export default function Notification({ message }) {
  return (
    <div className={styles.section}>
      <h3>{message}</h3>
    </div>
  );
}

Notification.defaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: PropTypes.string,
};
