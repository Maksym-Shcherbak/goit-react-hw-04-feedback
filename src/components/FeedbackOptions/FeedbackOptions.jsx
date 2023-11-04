import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedbackOptions__list}>
      {options.map(option => {
        return (
          <li key={option} className={css.feedbackOptions__item}>
            <button
              className={css.feedbackOptions__button}
              onClick={onLeaveFeedback}
            >
              <span className={css.feedbackOptions__glowingTxt}>{option}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
