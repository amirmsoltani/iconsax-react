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
    d: "M22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75ZM17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75ZM22 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 9h-9c-.28 0-.5-.22-.5-.5v-2C7 5.67 7.67 5 8.5 5h7c.83 0 1.5.67 1.5 1.5v2c0 .28-.22.5-.5.5ZM16.5 15h-9c-.28 0-.5.22-.5.5v2c0 .83.67 1.5 1.5 1.5h7c.82 0 1.5-.67 1.5-1.5v-2c0-.28-.22-.5-.5-.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.031 2h5.97c3 0 5 2 5 5v2M2 9V7c0-3 2-5 5-5M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2M2 12h6M11 12h11",
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
    d: "M22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75ZM17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75ZM22 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M16.5 9h-9c-.28 0-.5-.22-.5-.5v-2C7 5.68 7.67 5 8.5 5h7c.83 0 1.5.68 1.5 1.5v2c0 .28-.22.5-.5.5ZM16.5 15h-9c-.28 0-.5.22-.5.5v2c0 .82.67 1.5 1.5 1.5h7c.83 0 1.5-.68 1.5-1.5v-2c0-.28-.22-.5-.5-.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2M2 12h20",
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
    d: "M22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75ZM17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75ZM22 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M2 12h20",
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

var Scanner = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Scanner.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Scanner.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Scanner.displayName = 'Scanner';

module.exports = Scanner;
