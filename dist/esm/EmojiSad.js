import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.47 9.28a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22c-.71-.71-1.87-.71-2.58 0-.29.3-.77.3-1.06 0Zm9.13 8.8H8.4c-.7 0-1.27-.57-1.27-1.28 0-2.69 2.19-4.88 4.88-4.88s4.88 2.19 4.88 4.88c-.01.7-.59 1.28-1.29 1.28Zm1.93-8.8c-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.3.29.77 0 1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.64 9.501c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.36 9.501c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0a.71.71 0 0 1-.53.22ZM12 11.922c-2.69 0-4.88 2.19-4.88 4.88 0 .7.57 1.28 1.27 1.28h7.2c.7 0 1.27-.57 1.27-1.28.02-2.69-2.17-4.88-4.86-4.88Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.64 9.501c-.19 0-.38-.07-.53-.22-.71-.71-1.87-.71-2.58 0-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.36 9.501c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c1.29-1.29 3.4-1.29 4.7 0 .29.29.29.77 0 1.06-.29.29-.77.29-1.06 0-.71-.71-1.87-.71-2.58 0a.71.71 0 0 1-.53.22ZM15.6 18.45H8.4c-.91 0-1.65-.74-1.65-1.65 0-2.89 2.35-5.25 5.25-5.25s5.25 2.36 5.25 5.25c0 .91-.74 1.65-1.65 1.65Zm-3.6-5.4c-2.07 0-3.75 1.68-3.75 3.75 0 .08.07.15.15.15h7.2c.08 0 .15-.07.15-.15 0-2.07-1.68-3.75-3.75-3.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M7 8.75c1-1 2.63-1 3.64 0M13.36 8.75c1-1 2.63-1 3.64 0M8.4 17.7h7.2c.5 0 .9-.4.9-.9 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 .5.4.9.9.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color, strokeWidth) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React.createElement(Bold, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Broken':
      return /*#__PURE__*/React.createElement(Broken, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Bulk':
      return /*#__PURE__*/React.createElement(Bulk, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Linear':
      return /*#__PURE__*/React.createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Outline':
      return /*#__PURE__*/React.createElement(Outline, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'TwoTone':
      return /*#__PURE__*/React.createElement(TwoTone, {
        color: color,
        strokeWidth: strokeWidth
      });

    default:
      return /*#__PURE__*/React.createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });
  }
};

var EmojiSad = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      strokeWidth = _ref7.strokeWidth,
      rest = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React.createElement(Svg, _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color, strokeWidth));
});
EmojiSad.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EmojiSad.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
EmojiSad.displayName = 'EmojiSad';

export { EmojiSad as default };
