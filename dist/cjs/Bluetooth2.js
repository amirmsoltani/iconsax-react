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
    d: "m12.3 17.32 2.31-1.93-2.31-2.09v4.02ZM12.3 6.68v3.96l2.31-2.12-2.31-1.84Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM5.25 12A1.374 1.374 0 1 1 8 12a1.374 1.374 0 1 1-2.75 0Zm10.32 4.54-2.41 2.01c-.41.35-.79.45-1.08.45-.23 0-.41-.06-.51-.11-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.91-3.58v-.08L6.89 8.4a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l2.9 2.65V6.56c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01c.33.27.52.66.53 1.07.01.41-.16.81-.47 1.1L13.04 12l2.59 2.37c.31.29.49.69.48 1.1-.02.41-.21.8-.54 1.07Zm1.81-3.16c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.63 1.38-1.38 1.38Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14.23 3.39-1.13-.95c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m4.64 18.639 12.35-11.32c.51-.47.5-1.22-.04-1.67M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
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
    d: "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.08 19c-.23 0-.41-.06-.51-.11-.23-.11-.77-.46-.77-1.44v-3.39l-2.9 2.65c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l3.91-3.58v-.08L6.89 8.4a.746.746 0 0 1-.05-1.06c.28-.31.75-.33 1.06-.05l2.9 2.65V6.55c0-.98.54-1.34.77-1.44.23-.11.85-.29 1.6.34l2.41 2.01c.33.27.52.66.53 1.07.01.41-.16.81-.47 1.1L13.05 12l2.59 2.37c.31.29.49.69.48 1.1-.01.41-.2.8-.53 1.07l-2.41 2.01c-.43.35-.81.45-1.1.45Zm.22-5.7v4.02l2.31-1.93-2.31-2.09Zm0-6.62v3.96l2.31-2.12-2.31-1.84Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.62 13.381c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.62 1.38-1.38 1.38Zm0-1.5c-.07 0-.12.06-.12.12 0 .14.25.14.25 0 0-.07-.06-.12-.13-.12ZM17.38 13.381c-.76 0-1.38-.62-1.38-1.38 0-.76.62-1.38 1.38-1.38.76 0 1.38.62 1.38 1.38 0 .76-.63 1.38-1.38 1.38Zm0-1.5c-.07 0-.12.06-.12.12 0 .14.25.14.25 0a.138.138 0 0 0-.13-.12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.64 18.64 16.99 7.32c.51-.47.5-1.22-.04-1.67L13.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
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
    d: "M12.13 22.75c-.27 0-.48-.07-.63-.14-.36-.17-.97-.64-.97-1.9v-6.45L5.14 19.2c-.3.28-.78.26-1.06-.05a.746.746 0 0 1 .05-1.06l6.4-5.87v-.45L4.13 5.9a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l5.39 4.94V3.28c0-1.26.61-1.74.97-1.9.36-.17 1.11-.33 2.08.48l3.85 3.21c.42.35.67.85.68 1.38.01.53-.21 1.04-.62 1.41l-4.5 4.13 4.5 4.13c.4.37.63.89.62 1.41-.01.53-.26 1.03-.68 1.38l-3.85 3.21c-.57.49-1.07.63-1.45.63Zm-.1-9.6v7.56c0 .37.08.53.12.55.01-.01.19-.05.47-.28l3.85-3.21c.09-.08.14-.17.14-.27s-.04-.19-.13-.27l-4.45-4.08Zm.09-10.4c-.01.01-.09.18-.09.54v7.56l4.45-4.08a.35.35 0 0 0 .13-.27c0-.1-.05-.19-.14-.27l-3.86-3.21c-.26-.22-.43-.27-.49-.27Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 13.75c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm0-2c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM19 13.75c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm0-2c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.64 18.64 16.99 7.32c.51-.47.5-1.22-.04-1.67L13.1 2.44c-1-.83-1.82-.45-1.82.85v17.42c0 1.3.82 1.68 1.82.85l3.85-3.21c.54-.45.55-1.2.04-1.67L4.64 5.36",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
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

var Bluetooth2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Bluetooth2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Bluetooth2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Bluetooth2.displayName = 'Bluetooth2';

module.exports = Bluetooth2;