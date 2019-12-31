import React from 'react';
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div className="row">
      <h1>Czy Design System jest dla Ciebie?</h1>
      <Link className="btn" to="/calculator">Sprawdź</Link>
    </div>
  );
}

export default Home;
