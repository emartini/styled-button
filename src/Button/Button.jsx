import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const colors = {
  blue: 'blue',
  red: 'red',
};

const Button = ({ children, large, ...props }) => (
  <button {...props}>
    { children }
  </button>
);

Button.defaultProps = {
  type: 'button',
  children: '',
  large: false,
  color: colors.blue,
  disabled: false,
};

Button.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  large: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default styled(Button)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  ${props => props.disabled && `
    cursor: not-allowed;
    opacity: 0.7;
    pointer-events: none;
  `}

  ${props => props.expanded && `
    width: 100%;
  `}

  ${props => props.large && `
    font-size: 1.25rem;
  `}

  ${props => colors[props.color] && `
    border-color: ${colors[props.color]};
    color: ${colors[props.color]};

    &:hover {
      background-color: ${colors[props.color]};
      color: white;
    }

    ${props.disabled && `
      &:hover {
        color: ${colors[props.color]};
      }
    `}
  `}

  &:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
`;
