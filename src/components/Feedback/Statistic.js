import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Feedback.module.css";

export default function Statistic({ good, neutral, bad, total }) {
  const feedbackPercentage = () => {
    const count = (good * 100) / total;
    return Math.round(count);
  };

  return (
    <div>
      <h3 className={styles.statistic_title}>Statistic</h3>

      <table className={styles.statistic}>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </table>

      <p className={styles.voiting_percent}>
        Positive feedback: {feedbackPercentage()} %
      </p>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
