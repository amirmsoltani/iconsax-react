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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 17.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86a.75.75 0 0 1 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28L6.24 9.56c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2A7.715 7.715 0 0 1 12 4.25c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.32 6.46A9.945 9.945 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12M6 4c1.67-1.25 3.75-2 6-2 1.93 0 3.73.54 5.25 1.49",
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
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-1.36.36-2.69 1.03-3.86.21-.36.67-.48 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28L6.25 9.56c-.32.77-.49 1.6-.49 2.44 0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25a6.252 6.252 0 0 0-10-5 .75.75 0 0 1-.9-1.2 7.715 7.715 0 0 1 4.65-1.55c4.27 0 7.75 3.48 7.75 7.75s-3.49 7.75-7.76 7.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12",
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
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.748c-5.93 0-10.75-4.82-10.75-10.75 0-1.88.49-3.73 1.43-5.36.21-.36.66-.48 1.02-.28l8.67 4.98c.36.21.48.66.28 1.02-.21.36-.66.48-1.02.28l-8-4.59a9.218 9.218 0 0 0-.88 3.94c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-2.02 0-3.94.64-5.55 1.85a.75.75 0 0 1-.9-1.2c1.87-1.4 4.1-2.15 6.45-2.15 5.93 0 10.75 4.82 10.75 10.75S17.93 22.748 12 22.748Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M6 4c1.67-1.25 3.75-2 6-2 5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.81.48-3.51 1.33-4.98L12 12"
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

var Radar = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Radar.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Radar.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Radar.displayName = 'Radar';

module.exports = Radar;