'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M8 21.75h-.05a.753.753 0 01-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 01-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 01-.76.65zM14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.5 9.5c0 4.14-3.36 7.5-7.5 7.5 0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.37 13a7.527 7.527 0 0 1-.87-3.5 7.503 7.503 0 0 1 13.52-4.48",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13 21v0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8 21.75h-.05a.753.753 0 0 1-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 0 1-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 0 1-.76.65Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.4 13c-.6-1-.9-2.2-.9-3.5C4.5 5.4 7.9 2 12 2s7.5 3.4 7.5 7.5S16.1 17 12 17c0 0-2.7 0-3.7 2.2-.2.5-.3 1.1-.3 1.8l2-14",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 21v0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8 21.75h-.05a.753.753 0 0 1-.7-.75c0-.57.07-1.1.22-1.59L9.26 6.89c.06-.41.44-.69.85-.64.41.06.7.44.64.85l-1.42 9.91c1.24-.75 2.59-.76 2.67-.76 3.72 0 6.75-3.03 6.75-6.75S15.72 2.75 12 2.75 5.25 5.78 5.25 9.5c0 1.1.27 2.19.78 3.15.19.37.05.82-.31 1.01-.37.19-.82.05-1.01-.31a8.307 8.307 0 0 1-.95-3.85c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25c-.09 0-2.21.04-2.97 1.75-.03.08-.07.16-.09.24l-.19 1.36a.78.78 0 0 1-.76.65ZM14 21.999c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.13.03-.26.08-.38.05-.13.12-.23.21-.33.28-.28.72-.37 1.09-.21.13.05.23.12.33.21.09.1.16.2.21.33.05.12.08.25.08.38 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.37 13a7.527 7.527 0 0 1-.87-3.5C4.5 5.36 7.86 2 12 2c4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5 0 0-2.69 0-3.66 2.2-.21.49-.34 1.08-.34 1.8l2-14",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M13 21v0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color, strokeWidth) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color,
        strokeWidth: strokeWidth
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });
  }
};

var Polkadot = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      strokeWidth = _ref7.strokeWidth,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color, strokeWidth));
});
Polkadot.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Polkadot.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Polkadot.displayName = 'Polkadot';

module.exports = Polkadot;