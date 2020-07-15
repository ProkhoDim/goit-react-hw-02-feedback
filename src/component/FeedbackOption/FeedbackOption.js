import React from 'react';
import styles from './FeedbackOption.module.css';
import PropTypes from 'prop-types';

const FeedbackOption = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        name="good"
        type="button"
        onClick={onLeaveFeedback}
        className={[styles.feedbackButton, styles.goodFeedbackBtn].join(' ')}
      >
        Good
      </button>
      <button
        name="neutral"
        type="button"
        onClick={onLeaveFeedback}
        className={[styles.feedbackButton, styles.neutralFeedbackBtn].join(' ')}
      >
        Neutral
      </button>
      <button
        name="bad"
        type="button"
        onClick={onLeaveFeedback}
        className={[styles.feedbackButton, styles.badFeedbackBtn].join(' ')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOption.propType = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOption;
