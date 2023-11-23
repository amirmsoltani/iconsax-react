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
    d: "M15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75a.751.751 0 1 1 1.29.77l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75ZM14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.53 15.978c.17 1.79 1.11 2.52 3.16 2.52h2.73c2.28 0 3.19-.91 3.19-3.19v-2.73c0-2.27-.91-3.18-3.19-3.18H8.69c-2.07 0-3.01.75-3.16 2.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 8.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H9.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18ZM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75",
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
    d: "M15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75a.751.751 0 1 1 1.29.77l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.8 12.63v2.94c0 2.45-.98 3.43-3.43 3.43H8.43C5.98 19 5 18.02 5 15.57v-2.94c0-2.45.98-3.43 3.43-3.43h2.94c2.45 0 3.43.98 3.43 3.43Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.57 5h-2.94c-2.41 0-3.39.96-3.42 3.32h2.16c2.94 0 4.3 1.37 4.3 4.3v2.16c2.37-.03 3.32-1.01 3.32-3.42V8.43C19 5.98 18.02 5 15.57 5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M13.6 11.58v2.73c0 2.28-.91 3.19-3.19 3.19H7.69c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M17.5 7.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H8.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18zM21 14c0 3.87-3.13 7-7 7l1.05-1.75M1 8c0-3.87 3.13-7 7-7L6.95 2.75"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.42 19.248H8.69c-2.69 0-3.94-1.25-3.94-3.94v-2.73c0-2.68 1.25-3.93 3.94-3.93h2.73c2.68 0 3.94 1.25 3.94 3.94v2.73c-.01 2.68-1.26 3.93-3.94 3.93Zm-2.73-9.1c-1.87 0-2.44.57-2.44 2.44v2.73c0 1.87.57 2.44 2.44 2.44h2.73c1.87 0 2.44-.57 2.44-2.44v-2.73c0-1.87-.57-2.44-2.44-2.44H8.69Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.31 15.35h-.71c-.41 0-.75-.34-.75-.75v-2.02c0-1.87-.57-2.44-2.44-2.44H9.4c-.41 0-.75-.34-.75-.75v-.7c0-2.68 1.25-3.94 3.94-3.94h2.73c2.68 0 3.94 1.25 3.94 3.94v2.73c-.01 2.68-1.26 3.93-3.95 3.93Zm-5.16-6.7h1.27c2.68 0 3.94 1.25 3.94 3.94v1.27c1.84-.01 2.4-.58 2.4-2.44V8.69c0-1.87-.57-2.44-2.44-2.44h-2.73c-1.86 0-2.43.56-2.44 2.4ZM15 22.748a.752.752 0 0 1-.64-1.14l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.28-3.49 7.76-7.76 7.76ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.752.752 0 0 1 .64 1.14L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.6 11.578v2.73c0 2.28-.91 3.19-3.19 3.19H7.69c-2.27 0-3.19-.91-3.19-3.19v-2.73c0-2.27.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.5 7.68v2.73c0 2.28-.91 3.19-3.19 3.19h-.71v-2.02c0-2.27-.91-3.18-3.19-3.18H8.4v-.72c0-2.28.91-3.18 3.19-3.18h2.73c2.27 0 3.18.91 3.18 3.18Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21 14c0 3.87-3.13 7-7 7l1.05-1.75M1 8c0-3.87 3.13-7 7-7L6.95 2.75",
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

var RecoveryConvert = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
RecoveryConvert.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
RecoveryConvert.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RecoveryConvert.displayName = 'RecoveryConvert';

module.exports = RecoveryConvert;