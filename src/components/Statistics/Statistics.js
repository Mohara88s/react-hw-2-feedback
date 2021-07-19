import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <ul className={styles.statisticsList}>
      <li>
        <p>good: {good}</p>
      </li>
      <li>
        <p>neutral: {neutral}</p>
      </li>
      <li>
        <p>bad: {bad}</p>
      </li>
      <li>
        <p>total: {total}</p>
      </li>
      <li>
        <p>positive feedback: {positivePercentage} %</p>
      </li>
    </ul>
  </>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
