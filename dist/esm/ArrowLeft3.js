import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M18 9.33v5.34c0 3.32-2.35 4.67-5.22 3.02l-1.28-.74c-.31-.18-.5-.51-.5-.87V7.92c0-.36.19-.69.5-.87l1.28-.74C15.65 4.66 18 6.01 18 9.33zM9.999 8.792v6.43c0 .39-.42.63-.75.43l-1.1-.64c-2.87-1.65-2.87-4.37 0-6.02l1.1-.64c.33-.19.75.05.75.44z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M12.78 6.31C15.65 4.66 18 6.01 18 9.33v5.34c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M18 9.33v5.34c0 3.32-2.35 4.67-5.22 3.02l-1.28-.74c-.31-.18-.5-.51-.5-.87V7.92c0-.36.19-.69.5-.87l1.28-.74C15.65 4.66 18 6.01 18 9.33z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M10 8.79v6.43c0 .39-.42.63-.75.43l-1.1-.64c-2.87-1.65-2.87-4.37 0-6.02l1.1-.64c.33-.19.75.05.75.44z",
    opacity: ".4"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M15.1 19.15c-.84 0-1.76-.27-2.69-.81l-4.63-2.67c-1.63-.95-2.53-2.25-2.53-3.67s.9-2.72 2.53-3.66l4.63-2.67c1.63-.94 3.2-1.07 4.44-.36 1.23.71 1.91 2.14 1.91 4.02v5.34c0 1.88-.68 3.31-1.91 4.02-.53.31-1.12.46-1.75.46zm0-12.79c-.58 0-1.24.2-1.94.61L8.53 9.64c-1.15.66-1.78 1.5-1.78 2.36 0 .86.63 1.7 1.78 2.36l4.63 2.67c1.15.66 2.19.79 2.94.36.75-.43 1.16-1.4 1.16-2.72V9.33c0-1.32-.41-2.29-1.16-2.72-.3-.17-.64-.25-1-.25z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M18 12v2.67c0 3.31-2.35 4.67-5.22 3.01l-2.31-1.34L8.16 15c-2.87-1.66-2.87-4.37 0-6.03l2.31-1.34 2.31-1.34C15.65 4.66 18 6.01 18 9.33V12z"
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

var ArrowLeft3 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrowLeft3.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrowLeft3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrowLeft3.displayName = 'ArrowLeft3';

export { ArrowLeft3 as default };
