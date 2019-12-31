import React, { Component } from 'react';
import Questions from '../../mockQuestions';
import Question from '../Question/Question';
import TeamQuestion from '../TeamQuestion/TeamQuestion';

import { withRouter } from 'react-router-dom';

class Calculator extends Component<any> {
  state = {
    need: 0,
    maturity: 0,
    roles: [] as number[],
    activeQuestion: 1,
  }
  
  saveAnswer = (need: number, maturity: number, isStandard: boolean, roles?: number[]) => {
    const newRoles =  roles ? roles : [];
    
    this.setState({
      need: this.state.need + need,
      maturity: this.state.maturity + maturity,
      roles: newRoles
    }, () => {
      if (isStandard) {
        this.nextQuestion();
      }
    });
  }

  nextQuestion = () => {
    if (this.state.activeQuestion === 10) {
      this.props.handleCalculation(this.state.need, this.state.maturity);
      this.props.history.push('/report');
    } else {
      this.setState({
        activeQuestion: this.state.activeQuestion + 1
      });
    }
  }


  calculateScore = () => {
    
  }

  render() {
    return (
      <div>
        {Questions.map((item) => (
          <div key={`questions-item-${item.id}`}>
            {item.id === 'q' + this.state.activeQuestion ? 
              <>
                {item.id === 'q9' ?
                  <TeamQuestion
                    question={item.question}
                    answers={item.answers}
                    handleClick={this.saveAnswer}
                  />
                :
                <Question
                  question={item.question}
                  answers={item.answers}
                  handleClick={this.saveAnswer}
                />
                }
              </>
            : null}
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Calculator);
