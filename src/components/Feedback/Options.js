import React, { Component } from "react";
import PropTypes from "prop-types";

import OptionItem from "./OptionItem";
import feedbackButton from "../../data/feedbackButton.json";

export default function Options({ onLeaveFeedback }) {
  return (
    <div className={StyleSheet.options}>
      {feedbackButton.map(({ id, label, value }) => (
        <OptionItem
          key={id}
          label={label}
          value={value}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
}

Options.defaultProps = {
  title: "Please leave feedback",
};

Options.propTypes = {
  label: PropTypes.string,
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
