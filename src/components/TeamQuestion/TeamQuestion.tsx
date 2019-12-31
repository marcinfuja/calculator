import React, { Component } from 'react';
import { css } from 'emotion';

const row = css`
  display: flex;
  flex-direction: row;
`;

const col = css`
  display: flex;
  flex-direction: column;
  font-family: 'Merriweather';
  font-size: 20px;
`;

interface IAnswer {
  answer: string;
  needValue: number;
  maturityValue: number;
  questions?: object[];
  tips?: string[];
  role?: number | undefined;
}

interface IProps {
  question: string;
  answers: IAnswer[];
  handleClick: (need: number, maturity: number, isStandard: boolean, roles?: number[]) => void;
}

        
export class TeamQuestion extends Component<IProps> {
  state = {
    need: 0,
    maturity: 0,
    chosenRoles: [] as number[]
  }

  handleTeamChoice = (need: number, maturity: number, role: number | undefined) => {
    const addRoles = [...this.state.chosenRoles, role];

    this.setState({
      need: this.state.need + need,
      maturity: this.state.maturity + maturity,
      chosenRoles: addRoles
    });
  }

  calculateCommunicationSilo = (): number => {
    const roles = this.state.chosenRoles;
    const siloses = [[1, 2, 3], [4], [5, 6], [7, 8]]
    let need = 0;
    let totalValue = 0;

    const add = () => {
      totalValue = totalValue + 1;
    }
    for (let i = 0; i < siloses.length; i++) {
      if(siloses[i].some((el:number) => roles.includes(el))) {
        add();
      }
    }

    switch (totalValue) {
      case 1:
        need = need - 6;
        break;
      case 2:
        need = need + 2;
        break;
      case 3:
        need = need + 6
        break;
      case 4:
        need = need + 10
        break;
      default:
        return need;
    }

    return need
  }

  assessFinalValueAndSave = () => {
    const isFrontend = this.state.chosenRoles.includes(1);
    const isUxDesigner = this.state.chosenRoles.includes(5);
    const isGraphicDesigner = this.state.chosenRoles.includes(6);
    const siloAssessment = this.calculateCommunicationSilo();

    let totalReductionAmount = 0;

    function add() {
      totalReductionAmount = totalReductionAmount + 3;
    }

    if (!isFrontend) {
      add();
    }
    if (!isUxDesigner) {
      add();
    }
    if (!isGraphicDesigner) {
      add();
    }

    console.log(totalReductionAmount)

    this.setState({
      need: this.state.need - totalReductionAmount + siloAssessment
    }, () => {
      this.props.handleClick(this.state.need, this.state.maturity, true, this.state.chosenRoles);
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.question}</h2>
        <div>
          <div className={row}>
            {this.props.answers && this.props.answers.map((item, i) => (
              <div className={col} key={`anwser-button-item-${i}`}>
                <button 
                  className="btn"
                  onClick={() => this.handleTeamChoice(item.needValue, item.maturityValue, item.role)}
                  disabled={this.state.chosenRoles.includes(item.role as number)}>
                    {item.answer}
                </button>
                {this.state.chosenRoles.includes(item.role as number) ? 
                <div>Yes</div> : null }
              </div>
            ))}
          </div>
          <button
            className="btn" 
            onClick={() => this.assessFinalValueAndSave()}>
              Zapisz
          </button>
        </div>
      </div>
    );
  }
}

export default TeamQuestion;
