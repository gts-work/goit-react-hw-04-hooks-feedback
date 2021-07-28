import React, { Component } from "react";
import PropTypes from "prop-types";

import Options from "./Options";
import styles from "./Feedback.module.css";

export default function Section({ title }) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
    </div>
  );
}

Section.defaultProps = {
  title: "Please leave feedback",
};

Section.propTypes = {
  title: PropTypes.string,
};
