import React, { Component } from 'react';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';

class App extends Component {
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

  makeOptionsArray() {
    return Object.keys(this.state);
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((sum, value) => sum + value, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round(([this.state.good] / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={styles.App}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.makeOptionsArray()}
            onLeaveFeedback={this.onClickButton}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}

export default App;
