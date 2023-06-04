import React, { Component } from 'react';

import { Feedback } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from '../components/Statistics/Statistics.jsx';
import { Section } from '../components/SectionTitle/SectionTitle.jsx';
import { Notification } from '../components/Notification/Notification.jsx';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  handleAnyFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const options = Object.keys(this.state);

    return (
      <div className="container">
        <Section title="Please leave feedback"></Section>
        <Feedback options={options} onLeaveFeedback={this.handleAnyFeedback} />
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
