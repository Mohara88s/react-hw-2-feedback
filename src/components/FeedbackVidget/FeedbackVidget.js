import React, { Component } from 'react';

import styles from './FeedbackVidget.module.css';

class FeedbackVidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickButton = e => {
    const name = e.currentTarget.name;
    const scores = this.state;
    this.setState({ ...scores, [name]: scores[name] + 1 });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = Object.values(this.state).reduce(
      (sum, value) => sum + value,
      0,
    );
    const countPositiveFeedbackPercentage = Math.round(
      ([good] / countTotalFeedback) * 100,
    );
    return (
      <div className={styles.FeedbackVidget}>
        <h2>Please leave feedback</h2>
        <ul className={styles.buttonList}>
          <li>
            <button
              className={styles.button}
              type="button"
              name="good"
              onClick={this.onClickButton}
            >
              good
            </button>
          </li>
          <li>
            <button
              className={styles.button}
              type="button"
              name="neutral"
              onClick={this.onClickButton}
            >
              neutral
            </button>
          </li>
          <li>
            <button
              className={styles.button}
              type="button"
              name="bad"
              onClick={this.onClickButton}
            >
              bad
            </button>
          </li>
        </ul>

        <h2>Statistics</h2>
        <ul className={styles.statisticsList}>
          <li>
            <p>good:{good}</p>
          </li>
          <li>
            <p>neutral:{neutral}</p>
          </li>
          <li>
            <p>bad:{bad}</p>
          </li>
          {countTotalFeedback > 0 && (
            <ul className={styles.additionalStatisticsList}>
              <li>
                <p>Count:{countTotalFeedback}</p>
              </li>
              <li>
                <p>Count:{countPositiveFeedbackPercentage}</p>
              </li>
            </ul>
          )}
        </ul>
      </div>
    );
  }
}

export default FeedbackVidget;
