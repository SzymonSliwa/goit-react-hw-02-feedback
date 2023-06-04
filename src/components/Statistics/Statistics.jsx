import React from 'react';

import propTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className="stats_list">
        <li className="stats">Good: {good}</li>
        <li className="stats">Neutral: {neutral}</li>
        <li className="stats">Bad: {bad}</li>
        <li className="stats">Total: {total}</li>
        <li className="stats">Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
