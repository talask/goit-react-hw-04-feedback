import { useState } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {

  const { good, setGood } = useState(0);
  const { neutral, setNeutral } = useState(0);
  const { bad, setBad } = useState(0);
 
  const handleSetState = (val) => {
    switch(val){
      case 'good': 
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default: ;
    }
    console.log(val);
  }



const countTotalFeedback = () => {
    
    const total = good + neutral + bad;
    return total;
}


  function countPositiveFeedbackPercentage(total) {
    
    const percentage = Math.round((good * 100) / total);
    return percentage;
  }

  

    return (
      <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={["good", "neutral", "bad"]} 
          onLeaveFeedback={handleSetState}
          />
      </Section>
      { countTotalFeedback() ? <Section title="Statistics">
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage(countTotalFeedback())}
        /> 
        </Section> : <Notification message="There is no feedback"/>
      }
    </>
    )
  }
