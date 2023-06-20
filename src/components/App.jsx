import React, { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const { feedbakes, setValue } = useState({
    good: 0,
    neutral: 0,
    bad: 0,
});

const onButtonFeedback = (val) => { 
  setValue(feedbakes => ({...feedbakes, [val]: [val] + 1}));   
}

const countTotalFeedback = () => {
    const {good, neutral, bad} = feedbakes;  
    const total = good + neutral + bad;
    return total;
  };


  const countPositiveFeedbackPercentage =  (total) => {
    const {good} = feedbakes;
    const percentage = Math.round((good *100)/total);
    return percentage;
  };

  

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={["good", "neutral", "bad"]} 
          onLeaveFeedback={onButtonFeedback}
          />
      </Section>
      { countTotalFeedback() ? <Section title="Statistics">
        <Statistics 
          good={feedbakes.good} 
          neutral={feedbakes.neutral} 
          bad={feedbakes.bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}
        /> 
      </Section> : <Notification message="There is no feedback"/>
      }
    </>
    )
  }
