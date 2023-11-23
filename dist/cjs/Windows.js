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
    fillRule: "evenodd",
    d: "M20.8 2.241l-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98zM20.8 21.76l-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98zM8.79 4.56l-6 1.27c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97zM8.79 19.44l-6-1.27c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 6.03V2L12 4v7h10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m20.8 2.241-8 1.6c-.47.09-.8.5-.8.98v5.18c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-6.78c0-.63-.58-1.1-1.2-.98Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m20.8 21.76-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98ZM8.79 4.56l-6 1.28c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8.79 19.44-6-1.28c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "M22 2 12 4v7h10V2ZM22 22l-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3ZM10 19.7 2 18v-5h8v6.7Z",
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
    d: "M22 11.75H12c-.41 0-.75-.34-.75-.75V4c0-.36.25-.67.6-.74l10-2c.22-.04.45.01.62.16.17.14.27.36.27.58v9a.74.74 0 0 1-.74.75Zm-9.25-1.5h8.5V2.92l-8.5 1.7v5.63ZM22 22.75c-.05 0-.1 0-.15-.01l-10-2a.75.75 0 0 1-.6-.74v-7c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v9c0 .22-.1.44-.27.58-.14.11-.31.17-.48.17Zm-9.25-3.37 8.5 1.7v-7.33h-8.5v5.63ZM10 11.748H2c-.41 0-.75-.34-.75-.75v-5c0-.35.25-.66.59-.73l8-1.7c.22-.05.45.01.63.15.18.14.28.36.28.58v6.7c0 .41-.34.75-.75.75Zm-7.25-1.5h6.5v-5.02l-6.5 1.38v3.64ZM10 20.45c-.05 0-.1-.01-.16-.02l-8-1.7a.74.74 0 0 1-.59-.73v-5c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v6.7c0 .23-.1.44-.28.58-.13.11-.3.17-.47.17Zm-7.25-3.06 6.5 1.38v-5.02h-6.5v3.64Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M22 2 12 4v7h10V2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "m22 22-10-2v-7h10v9ZM10 4.3 2 6v5h8V4.3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M10 19.7 2 18v-5h8v6.7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Windows = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Windows.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Windows.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Windows.displayName = 'Windows';

module.exports = Windows;
