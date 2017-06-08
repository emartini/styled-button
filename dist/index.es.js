import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};











var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  &:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  }\n'], ['\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  &:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  }\n']);

var colors = {
  blue: 'blue',
  red: 'red'
};

var Button = function Button(_ref) {
  var children = _ref.children,
      large = _ref.large,
      props = objectWithoutProperties(_ref, ['children', 'large']);
  return React.createElement(
    'button',
    props,
    children
  );
};

Button.defaultProps = {
  type: 'button',
  children: '',
  large: false
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  large: PropTypes.bool
};

var Button$1 = styled(Button)(_templateObject, function (props) {
  return props.disabled && '\n    cursor: not-allowed;\n    opacity: 0.7;\n    pointer-events: none;\n  ';
}, function (props) {
  return props.expanded && '\n    width: 100%;\n  ';
}, function (props) {
  return props.large && '\n    font-size: 1.25rem;\n  ';
}, function (props) {
  return colors[props.color] && '\n    border-color: ' + colors[props.color] + ';\n    color: ' + colors[props.color] + ';\n\n    &:hover {\n      background-color: ' + colors[props.color] + ';\n      color: white;\n    }\n\n    ' + (props.disabled && '\n      &:hover {\n        color: ' + colors[props.color] + ';\n      }\n    ') + '\n  ';
});

var _templateObject$1 = taggedTemplateLiteral(['\n  background-color: #daa357;\n  color: white;\n'], ['\n  background-color: #daa357;\n  color: white;\n']);

var PrimaryButton = Button$1.extend(_templateObject$1);

export { Button$1 as Button, PrimaryButton };
//# sourceMappingURL=index.es.js.map
