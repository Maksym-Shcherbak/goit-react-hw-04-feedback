import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li className={css.statisticsItem}>
        <p>
          Good:
          <span className={css.statisticsNumber}> {good}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p>
          Neutral:
          <span className={css.statisticsNumber}> {neutral}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p>
          Bad:
          <span className={css.statisticsNumber}> {bad}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p>
          total: <span className={css.statisticsNumber}> {total}</span>
        </p>
      </li>
      <li className={css.statisticsItem}>
        <p>
          Positive feedback:
          <span className={css.statisticsNumber}> {positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
