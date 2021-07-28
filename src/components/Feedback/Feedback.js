import React, { useState } from "react";

import Statistic from "./Statistic";
import Notification from "./Notification";
import Options from "./Options";
import Section from "./Section";

import styles from "./Feedback.module.css";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleVoiting = (event) => {
    console.log("click: ", event.target.value);

    if (event.target.value === "good") {
      setGood(good + 1);
      // this.setState((prevState) => ({
      //     good: prevState.good + 1,
      // }));
      console.log("Feedback ~ this.setState ~ good === ", good);
    }

    if (event.target.value === "neutral") {
      setNeutral(neutral + 1);
      // this.setState((prevState) => ({
      //     neutral: prevState.neutral + 1,
      // }));
    }

    if (event.target.value === "bad") {
      setBad(bad + 1);
      // this.setState((prevState) => ({
      //     bad: prevState.bad + 1,
      // }));
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total || 0;
  };

  return (
    <div className={styles.feedbackBlock}>
      <Section title="Please leave feedback" />
      <Options onLeaveFeedback={handleVoiting} />

      {countTotalFeedback() ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
