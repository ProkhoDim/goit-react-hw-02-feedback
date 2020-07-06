import React, { Component } from 'react';
import Statistics from './component/Statistics';
import Section from './component/Section';
import FeedbackOption from './component/FeedbackOption';
import Notification from './component/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackClick = (e) => {
    const currentBtn = e.currentTarget;
    this.setState((prevState) => ({
      [currentBtn.name]: prevState[currentBtn.name] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.keys(this.state).reduce((acc, item) => acc + this.state[item], 0);

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const percentOfGoodFeedback = (good / totalFeedback) * 100;
    if (Number.isNaN(percentOfGoodFeedback)) return 0;

    return Math.round(percentOfGoodFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption onLeaveFeedback={this.handleFeedbackClick} />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title="Statistic:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
