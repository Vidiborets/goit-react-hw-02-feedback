import React, { Component }  from "react";
import Container from './components/Container/Container.jsx'
import Counter from './components/Counter/Counter.jsx'
import Clickbate from './components/Clickbate/Clickbate.jsx'

class CounterList extends Component {
  static defaultProps={
    percentLot:'0',
  }
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
  clickFedBack = (e) => {
    this.setState({
      [e]: this.state[e] + 1
    });
    }
  
  totalResult () {
    const { good, neutral, bad } = this.state
    const total = good + neutral + bad;
    return total
  }

  percentTotal(total) {
    const { good } = this.state
    const percent = Math.round((good / total) * 100)
    return percent
  }
  
    render() {
      const { good, neutral, bad } = this.state;

      const totalLot = this.totalResult();
      const percentLot= this.percentTotal(totalLot)
      return (
        <Container title="Please leave feedback">
          <Clickbate
            options={this.state}
            clickFedBack={this.clickFedBack}
          />
          <Counter
            title=""
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalLot}
            percent={percentLot}
          />
        </Container>)
    }
}

export default CounterList;













