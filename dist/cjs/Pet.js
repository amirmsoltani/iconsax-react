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
    d: "M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85 1.01-1.19 1.41-2.77 1.14-4.43ZM10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86ZM16.94 9.028a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88ZM20.55 12.931a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM3.94 10.982a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-2.28 0-4.4 1.14-5.77 2.87M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
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
    opacity: ".4",
    d: "M19.08 15.72c-.59-3.53-3.98-6.4-7.56-6.4-3.89 0-7.31 3.15-7.64 7.03-.13 1.5.35 2.92 1.34 3.99C6.2 21.41 7.58 22 9.08 22h4.68c1.69 0 3.17-.66 4.18-1.85 1.01-1.19 1.41-2.77 1.14-4.43Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.28 7.86a2.93 2.93 0 1 0 0-5.86 2.93 2.93 0 0 0 0 5.86ZM16.94 9.028a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88ZM20.55 12.931a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM3.94 10.982a2.44 2.44 0 1 0 0-4.88 2.44 2.44 0 0 0 0 4.88Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-3.72 0-7.02 3.04-7.33 6.75ZM10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
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
    d: "M14.04 22.75H9.25c-1.62 0-3.09-.63-4.15-1.79-1.06-1.15-1.57-2.67-1.43-4.28.34-4.1 3.96-7.43 8.08-7.43 3.79 0 7.37 3.04 8 6.77.3 1.78-.14 3.46-1.22 4.74-1.1 1.28-2.69 1.99-4.49 1.99Zm-2.3-12c-3.35 0-6.3 2.72-6.58 6.06-.1 1.19.27 2.3 1.04 3.14.77.84 1.85 1.3 3.04 1.3h4.79c1.35 0 2.54-.52 3.33-1.45.79-.93 1.11-2.19.89-3.53-.5-3.04-3.42-5.52-6.51-5.52ZM10.47 8.25C8.68 8.25 7.22 6.79 7.22 5s1.46-3.25 3.25-3.25S13.72 3.21 13.72 5a3.25 3.25 0 0 1-3.25 3.25Zm0-5c-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75 1.75-.79 1.75-1.75-.78-1.75-1.75-1.75ZM17.3 9.45c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 .002 2.5 1.25 1.25 0 0 0-.001-2.5ZM21 13.45c-1.24 0-2.25-1.01-2.25-2.25S19.76 8.95 21 8.95s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.97 11.45c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75S6.72 7.18 6.72 8.7s-1.23 2.75-2.75 2.75Zm0-4a1.25 1.25 0 1 0 .002 2.5 1.25 1.25 0 0 0-.001-2.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-3.72 0-7.02 3.04-7.33 6.75Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".34",
    d: "M10.47 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM17.3 8.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 12.7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.97 10.7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
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

var Pet = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Pet.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Pet.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Pet.displayName = 'Pet';

module.exports = Pet;
