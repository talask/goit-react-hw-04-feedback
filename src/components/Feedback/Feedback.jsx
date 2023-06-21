

export function Feedback ({onButtonFeedback}) {

    // const { feedbakes, setValue } = useState({
    //     good: 0,
    //     neutral: 0,
    //     bad: 0,
    // });
   
    // // total, percentage } = useState(0);

   
    //  const onButtonFeedback = (val) => { 
    //       setValue(feedbakes => ({...feedbakes, [val]: [val] + 1})) ;   
    
  
    return (
            <>
        <section>
            <div className="container">
                <p>Please leave feedback</p>
                <div className="wrapper">
                    <button onClick={onButtonFeedback("good")}>Good</button>
                    <button onClick={onButtonFeedback("neutral")}>Neutral</button>
                    <button onClick={onButtonFeedback("bad")}>Bad</button>
                </div>
                
            </div>
        </section>
        <section>
        <div className="container">
                <p>Statistics</p>
                    <ul>
                        <li>Good: {good}</li>
                        <li>Neutral: {neutral}</li>
                        <li>Bad: {bad}</li>
                        <li>Total: {good + neutral + bad}</li>
                        <li>Positive feedback: {Math.round((good/(good + neutral + bad))*100)}%</li>
                    </ul>
                
            </div>
        </section>
        </>
        )
    }
