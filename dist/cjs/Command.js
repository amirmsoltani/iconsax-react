'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 8H8v8h8V8ZM2 19c0 1.65 1.35 3 3 3s3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3ZM5 2C3.35 2 2 3.35 2 5s1.35 3 3 3h3V5c0-1.65-1.35-3-3-3ZM22 5c0-1.65-1.35-3-3-3s-3 1.35-3 3v3h3c1.65 0 3-1.35 3-3ZM19 16h-3v3c0 1.65 1.35 3 3 3s3-1.35 3-3-1.35-3-3-3Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 8H8v8h8V8ZM2.17 19.99A3.009 3.009 0 0 0 5 22c1.65 0 3-1.35 3-3v-3H5M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3ZM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3ZM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z",
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
    d: "M16 8H8v8h8V8Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3ZM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3ZM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3ZM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 8H8v8h8V8ZM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3ZM5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3ZM16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3ZM19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z",
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
    d: "M16 16.75H8c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75v8c0 .41-.34.75-.75.75Zm-7.25-1.5h6.5v-6.5h-6.5v6.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75h3c.41 0 .75.34.75.75v3c0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19v-2.25H5ZM8 8.75H5C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75v3c0 .41-.34.75-.75.75Zm-3-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25h2.25V5c0-1.24-1.01-2.25-2.25-2.25ZM19 8.75h-3c-.41 0-.75-.34-.75-.75V5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm-2.25-1.5H19c1.24 0 2.25-1.01 2.25-2.25S20.24 2.75 19 2.75 16.75 3.76 16.75 5v2.25ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75v-3c0-.41.34-.75.75-.75h3c2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm-2.25-6V19c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25h-2.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 8H8v8h8V8ZM5 22c1.65 0 3-1.35 3-3v-3H5c-1.65 0-3 1.35-3 3s1.35 3 3 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5 8h3V5c0-1.65-1.35-3-3-3S2 3.35 2 5s1.35 3 3 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 8h3c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3v3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M19 22c1.65 0 3-1.35 3-3s-1.35-3-3-3h-3v3c0 1.65 1.35 3 3 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var Command = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
Command.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Command.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Command.displayName = 'Command';

module.exports = Command;
