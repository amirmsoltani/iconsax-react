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
    d: "M9 22A7 7 0 109 8a7 7 0 000 14z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M22 9a6.97 6.97 0 01-3.86 6.25c-.31.16-.66-.09-.69-.43a8.959 8.959 0 00-8.27-8.27c-.35-.03-.59-.38-.43-.69A6.97 6.97 0 0115 2c3.87 0 7 3.13 7 7z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.09 9.2C6.21 8.45 7.55 8 9 8c3.87 0 7 3.13 7 7s-3.13 7-7 7-7-3.13-7-7c0-.71.1-1.39.3-2.03",
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
    d: "M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 16.75c-4.27 0-7.75-3.48-7.75-7.75S10.73 1.25 15 1.25 22.75 4.73 22.75 9s-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22.75c-4.27 0-7.75-3.48-7.75-7.75S4.73 7.25 9 7.25s7.75 3.48 7.75 7.75-3.48 7.75-7.75 7.75Zm0-14c-3.45 0-6.25 2.8-6.25 6.25s2.8 6.25 6.25 6.25 6.25-2.8 6.25-6.25S12.45 8.75 9 8.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22A7 7 0 1 0 9 8a7 7 0 0 0 0 14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var Celo = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Celo.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Celo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Celo.displayName = 'Celo';

export { Celo as default };