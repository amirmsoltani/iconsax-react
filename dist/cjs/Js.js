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
    d: "M15.25 16.75H13.5a2.5 2.5 0 01-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 010-5h1.75a2.5 2.5 0 012.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 010 5z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 11.65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 00-.13-.22l-8-4.44a.255.255 0 00-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.51 2.268c.3-.17.67-.17.97 0l8 4.44c.32.18.51.51.51.87v8.82a1 1 0 0 1-.51.87l-8 4.44c-.3.17-.67.17-.97 0l-1.51-.71M9 9.002l-.01 7.93c0 1.52-1.64 2.49-2.97 1.75l-2.51-1.39a.992.992 0 0 1-.51-.87v-8.82c0-.36.2-.7.51-.87l3.7-2.06",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17 10.75C17 9.78 16.22 9 15.25 9H13.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.22 16 15.25 16H13.5c-.97 0-1.75-.78-1.75-1.75",
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
    d: "M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 0 0-.13-.22l-8-4.44a.255.255 0 0 0-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.25 16.75H13.5a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 0 1 0 5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 9v7.9c0 1.5-1.6 2.5-3 1.7l-2.5-1.4c-.3-.1-.5-.4-.5-.8V7.6c0-.4.2-.7.5-.9l8-4.4c.3-.2.7-.2 1 0l8 4.4c.3.2.5.5.5.9v8.8c0 .4-.2.7-.5.9l-8 4.4c-.3.2-.7.2-1 0L10 21",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17 10.8c0-1-.8-1.8-1.7-1.8h-1.8c-1 0-1.7.8-1.7 1.7 0 1 .8 1.7 1.7 1.7h1.8c1 0 1.7.8 1.7 1.7 0 1-.8 1.7-1.7 1.7h-1.8c-1 0-1.7-.8-1.7-1.7",
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
    d: "M12 22.61c-.29 0-.58-.07-.85-.22l-1.48-.71a.75.75 0 1 1 .65-1.35l1.51.73c.11.06.21.06.28.02l8-4.44c.08-.04.13-.13.13-.22V7.6a.26.26 0 0 0-.13-.22l-8-4.44a.255.255 0 0 0-.24 0l-8 4.44c-.08.04-.13.13-.13.22v8.82c0 .09.05.17.13.22l2.51 1.39c.39.22.85.21 1.24-.02.39-.23.62-.63.62-1.08L8.25 9c0-.41.34-.75.75-.75s.75.34.75.75l-.01 7.93c0 .98-.51 1.87-1.36 2.37-.85.5-1.87.51-2.73.03l-2.51-1.39c-.56-.31-.9-.9-.9-1.53V7.59c0-.63.34-1.22.9-1.53l8-4.44c.53-.3 1.17-.3 1.7 0l8 4.44c.56.31.9.9.9 1.53v8.82c0 .63-.34 1.22-.9 1.53l-8 4.44c-.26.15-.55.23-.84.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.25 16.75H13.5a2.5 2.5 0 0 1-2.5-2.5c0-.41.34-.75.75-.75s.75.34.75.75c0 .55.45 1 1 1h1.75c.55 0 1-.45 1-1s-.45-1-1-1H13.5a2.5 2.5 0 0 1 0-5h1.75a2.5 2.5 0 0 1 2.5 2.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.55-.45-1-1-1H13.5c-.55 0-1 .45-1 1s.45 1 1 1h1.75a2.5 2.5 0 0 1 0 5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9 9.002-.01 7.93c0 1.52-1.64 2.49-2.97 1.75l-2.51-1.39a.992.992 0 0 1-.51-.87v-8.82c0-.36.2-.7.51-.87l8-4.44c.3-.17.67-.17.97 0l8 4.44c.32.18.51.51.51.87v8.82a1 1 0 0 1-.51.87l-8 4.44c-.3.17-.67.17-.97 0l-1.51-.73",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M17 10.75C17 9.78 16.22 9 15.25 9H13.5c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75h1.75c.97 0 1.75.78 1.75 1.75S16.22 16 15.25 16H13.5c-.97 0-1.75-.78-1.75-1.75",
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

var Js = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Js.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Js.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Js.displayName = 'Js';

module.exports = Js;