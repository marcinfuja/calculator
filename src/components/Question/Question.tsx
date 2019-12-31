import React from 'react';

interface IAnswer {
  answer: string;
  needValue: number;
  maturityValue: number;
  questions?: object[];
  tips?: string[];
}

interface IProps {
  question: string;
  answers: IAnswer[];
  handleClick: (need: number, maturity: number, isStandard: boolean, roles?: number[]) => void;
}

function Question(props: IProps) {
  return (
    <div className="container">
      <h2>{props.question}</h2>
      <div>
        {props.answers && props.answers.map((item, i) => (
          <button 
            className="btn"
            onClick={() => props.handleClick(item.needValue, item.maturityValue, true)}
            key={`anwser-button-item-${i}`}>
              {item.answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
