import stylese from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={stylese.buttonFeedbackGood}
        onClick={onLeaveFeedback}
        name="good"
        type="button"
      >
        Good
      </button>
      <button
        className={stylese.buttonFeedbackNeutral}
        onClick={onLeaveFeedback}
        name="neutral"
        type="button"
      >
        Neutral
      </button>
      <button
        className={stylese.buttonFeedbackBad}
        onClick={onLeaveFeedback}
        name="bad"
        type="button"
      >
        Bad
      </button>
    </>
  );
};
