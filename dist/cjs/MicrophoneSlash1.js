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
    d: "M17.619 5.72 7.009 16.33c-.73-.99-1.13-2.2-1.13-3.51V8.11c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.57c.46-.23.95-.39 1.46-.48v3.66c0 .4.32.71.71.71.39 0 .71-.31.71-.71V2c2.39.11 4.45 1.61 5.33 3.72ZM18.12 8.879v3.94c0 3.37-2.75 6.12-6.12 6.12-.18 0-.36-.01-.54-.03-.08 0-.16-.01-.23-.02-.13-.02-.26-.04-.38-.06-.05 0-.09-.02-.15-.03-.14-.03-.28-.07-.41-.11a5.83 5.83 0 0 1-.63-.22c-.13-.05-.25-.1-.37-.17-.03-.01-.05-.03-.08-.04-.1-.05-.2-.1-.3-.17l9.21-9.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.75 11v2c0 5.38-4.37 9.75-9.75 9.75-2.12 0-4.15-.68-5.82-1.93l1.08-1.08A8.15 8.15 0 0 0 12 21.25c4.55 0 8.25-3.7 8.25-8.25v-2c0-.41.34-.75.75-.75s.75.34.75.75ZM21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11M18.719 15.018c.6-1.09.93-2.34.93-3.67v-1.7M6.781 16.95a7.648 7.648 0 0 0 5.22 2.05c1.18 0 2.31-.27 3.31-.75M4.352 9.648v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84 3.93 18.99M11 3v3M12 19v3",
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
    d: "M17.619 5.72 7.009 16.33c-.73-.99-1.13-2.2-1.13-3.51V8.11c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.57c.46-.23.95-.39 1.46-.48v3.66c0 .4.32.71.71.71.39 0 .71-.31.71-.71V2c2.39.11 4.45 1.61 5.33 3.72Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.12 8.879v3.94c0 3.37-2.75 6.12-6.12 6.12-.18 0-.36-.01-.54-.03-.08 0-.16-.01-.23-.02-.13-.02-.26-.04-.38-.06-.05 0-.09-.02-.15-.03-.14-.03-.28-.07-.41-.11a5.83 5.83 0 0 1-.63-.22c-.13-.05-.25-.1-.37-.17-.03-.01-.05-.03-.08-.04-.1-.05-.2-.1-.3-.17l9.21-9.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.75 11v2c0 5.38-4.37 9.75-9.75 9.75-2.12 0-4.15-.68-5.82-1.93l1.08-1.08A8.15 8.15 0 0 0 12 21.25c4.55 0 8.25-3.7 8.25-8.25v-2c0-.41.34-.75.75-.75s.75.34.75.75ZM21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.82 6.53A6.008 6.008 0 0 0 12 2C8.69 2 6 4.69 6 8v5c0 1.46.52 2.8 1.39 3.84M18 9.98V13a6.005 6.005 0 0 1-8.08 5.63",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.86 19.58A9 9 0 0 0 21 13v-2M21.5 2.99l-19 19M11.55 5.5V2.26M8.5 3.5v4",
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
    d: "M8 11.75c-.41 0-.75-.34-.75-.75V6c0-2.62 2.13-4.75 4.75-4.75S16.75 3.38 16.75 6v.3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-1.79-1.46-3.25-3.25-3.25S8.75 4.21 8.75 6v5c0 .41-.34.75-.75.75ZM11.999 16.25c-1.34 0-2.62-.57-3.52-1.56a.755.755 0 0 1 .05-1.06c.31-.28.78-.25 1.06.05.61.68 1.49 1.07 2.41 1.07 1.79 0 3.25-1.46 3.25-3.25V11c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 2.62-2.13 4.75-4.75 4.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 19.748a8.4 8.4 0 0 1-5.73-2.25.755.755 0 0 1-.04-1.06c.29-.31.77-.32 1.07-.04a6.887 6.887 0 0 0 4.7 1.85c3.8 0 6.9-3.1 6.9-6.9v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 4.63-3.77 8.4-8.4 8.4ZM4.952 15.078c-.29 0-.57-.17-.69-.46a8.308 8.308 0 0 1-.66-3.27v-1.7c0-.41.34-.75.75-.75s.75.34.75.75v1.7c0 .93.18 1.83.54 2.68a.75.75 0 0 1-.4.98c-.09.05-.19.07-.29.07Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.92 19.741c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l16.15-16.15c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.46 19.521c-.15.15-.34.22-.54.22ZM11 6.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.82 6.53A6.008 6.008 0 0 0 12 2C8.69 2 6 4.69 6 8v5c0 1.46.52 2.8 1.39 3.84",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.002 9.98V13a6.005 6.005 0 0 1-8.08 5.63",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5.86 19.58A9 9 0 0 0 21 13v-2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.5 2.988-19 19M11.55 5.502v-3.24M8.5 3.5v4",
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

var MicrophoneSlash1 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MicrophoneSlash1.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MicrophoneSlash1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MicrophoneSlash1.displayName = 'MicrophoneSlash1';

module.exports = MicrophoneSlash1;
