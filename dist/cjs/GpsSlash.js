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
    d: "M22.75 11.999c0 .41-.34.75-.75.75h-2.04c-.35 3.81-3.4 6.86-7.21 7.21v2.04c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04c-.61-.05-1.21-.18-1.78-.37-.71-.24-.93-1.14-.4-1.67l2.81-2.81c.04.01.07.01.11.01 1.73 0 3.12-1.39 3.12-3.12 0-.04 0-.07-.01-.11l2.81-2.81c.53-.53 1.43-.31 1.67.4.19.57.32 1.16.37 1.78H22c.41-.01.75.33.75.74ZM21.77 2.23c-.3-.3-.79-.3-1.09 0l-3.61 3.61c-1.2-.99-2.7-1.64-4.33-1.79V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.15 1.63.8 3.13 1.79 4.33l-3.61 3.61c-.3.3-.3.79 0 1.09.16.14.35.22.55.22.2 0 .39-.08.54-.23L21.77 3.31c.31-.3.31-.78 0-1.08ZM8.88 12c0-1.72 1.4-3.12 3.12-3.12.58 0 1.12.17 1.58.45l-4.25 4.25c-.28-.46-.45-1-.45-1.58Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M4.77 10.012c-.18.63-.27 1.3-.27 1.99 0 2.01.79 3.84 2.08 5.19M17.21 6.6A7.494 7.494 0 0 0 12 4.5c-1.92 0-3.67.72-5 1.91M12 4V2M4 12H2M12 20v2M20 12h2M14.12 9.88l-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24ZM22 2 2 22",
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
    d: "m18.939 8.059-3.83 3.83c.01.04.01.07.01.11 0 1.72-1.4 3.12-3.12 3.12-.04 0-.07 0-.11-.01l-3.83 3.83a7.77 7.77 0 0 0 3.94 1.06c4.41 0 8-3.59 8-8 0-1.43-.38-2.78-1.06-3.94ZM17.65 6.35 14.2 9.8c-.56-.57-1.34-.92-2.2-.92-1.72 0-3.12 1.4-3.12 3.12 0 .86.35 1.64.92 2.2l-3.45 3.45A7.975 7.975 0 0 1 4 12c0-4.41 3.59-8 8-8 2.2 0 4.2.9 5.65 2.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14.199 9.799-4.4 4.4c-.57-.56-.92-1.34-.92-2.2 0-1.72 1.4-3.12 3.12-3.12.86 0 1.64.35 2.2.92ZM12.75 2v2.04h-.01C12.5 4.01 12.25 4 12 4s-.5.01-.74.04h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75ZM4 12c0 .25.01.51.04.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.04c-.03.24-.04.5-.04.75ZM12.75 19.96V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04h.01c.24.03.49.04.74.04s.5-.01.74-.04h.01ZM22.75 12c0 .41-.34.75-.75.75h-2.04c.03-.24.04-.5.04-.75s-.01-.51-.04-.75H22c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M17.21 6.6A7.503 7.503 0 0 0 6.58 17.19M12 4V2M4 12H2M12 20v2M20 12h2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14.12 9.88-4.24 4.24a2.996 2.996 0 1 1 4.24-4.24ZM22 2 2 22",
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
    d: "M12 20.248c-1.15 0-2.26-.23-3.3-.69a.76.76 0 0 1-.39-.99.76.76 0 0 1 .99-.39c.85.37 1.76.56 2.7.56 3.72 0 6.75-3.03 6.75-6.75 0-.94-.19-1.85-.56-2.7a.751.751 0 1 1 1.38-.6c.46 1.04.69 2.15.69 3.3-.01 4.56-3.71 8.26-8.26 8.26ZM6.58 17.94c-.2 0-.39-.08-.54-.23A8.217 8.217 0 0 1 3.75 12c0-4.55 3.7-8.25 8.25-8.25 2.15 0 4.18.82 5.73 2.31.3.29.31.76.02 1.06-.29.3-.76.31-1.06.02A6.729 6.729 0 0 0 12 5.25c-3.72 0-6.75 3.03-6.75 6.75 0 1.75.67 3.41 1.88 4.67.29.3.28.77-.02 1.06-.15.14-.34.21-.53.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.88 14.87c-.19 0-.38-.07-.53-.22-.71-.71-1.1-1.65-1.1-2.65 0-2.07 1.68-3.75 3.75-3.75 1 0 1.94.39 2.65 1.1.29.29.29.77 0 1.06l-4.24 4.24c-.15.15-.34.22-.53.22ZM12 9.75c-1.24 0-2.25 1.01-2.25 2.25 0 .34.08.67.22.97l3-3c-.3-.14-.63-.22-.97-.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
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
    strokeWidth: strokeWidth,
    d: "M17.21 6.6A7.503 7.503 0 006.58 17.19M12 4V2M4 12H2"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M9 18.88c.92.4 1.93.62 3 .62 4.14 0 7.5-3.36 7.5-7.5 0-1.07-.22-2.08-.62-3M12 20v2M20 12h2"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M14.12 9.88l-4.24 4.24a2.996 2.996 0 114.24-4.24zM22 2L2 22"
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

var GpsSlash = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
GpsSlash.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
GpsSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
GpsSlash.displayName = 'GpsSlash';

module.exports = GpsSlash;
