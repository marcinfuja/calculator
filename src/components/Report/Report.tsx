import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  need: number;
  maturity: number;
}

const Report = (props: IProps) => {
  return (
    <div>
      <h2>Raport</h2>
      <div className="container">
        <p>Twoje zapotrzebowanie: <span>{props.need}</span></p>
        <p>Dojrzałość organizacji: <span>{props.maturity}</span></p>
      </div>
      <Link to="/" className="btn">Wróć na stronę główną</Link>
    </div>
  );
}

export default Report;
