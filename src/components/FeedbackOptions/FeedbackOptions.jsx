import React from 'react';

import propTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="container">
      <ul className="button_list">
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
                className={`button`}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
