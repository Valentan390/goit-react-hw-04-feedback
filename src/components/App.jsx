import { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Notification } from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleUpdateFedBack = event => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }

    // this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleUpdateFedBack} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleUpdateFedBack = event => {
//     const { name } = event.currentTarget;
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotalFeedback() {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage() {
//     return (
//       (100 * this.state.good) /
//       (this.state.good + this.state.neutral + this.state.bad)
//     );
//   }

//   render() {
//     const totalFeedback = this.countTotalFeedback();
//     const positiveFeedbackPercentage = Math.round(
//       this.countPositiveFeedbackPercentage() || 0
//     );

//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions onLeaveFeedback={this.handleUpdateFedBack} />
//         </Section>
//         <Section title={'Statistics'}>
//           {totalFeedback !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={totalFeedback}
//               positivePercentage={positiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
