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
    d: "M20.89 5.179v11.3c0 1.98-1.61 3.59-3.59 3.59a3.6 3.6 0 0 1-3.59-3.59c0-1.97 1.62-3.58 3.59-3.58.84 0 1.59.29 2.2.77v-5.95l-9.21 2.62v8.07a3.6 3.6 0 0 1-3.59 3.59c-1.98 0-3.59-1.61-3.59-3.59 0-1.97 1.61-3.58 3.59-3.58.83 0 1.58.29 2.19.76v-8.84c0-1.47.89-2.61 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33.71.53 1.06 1.43 1.06 2.67Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.28 22.002a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.838 7.96V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7c-1.14.31-1.92 1.21-1.92 2.51v12.57M20.84 16.8V12M17.722 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24ZM9.398 9.518l11.44-3.12",
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
    d: "M10.29 10.34v8.07A3.6 3.6 0 0 1 6.7 22c-1.98 0-3.59-1.61-3.59-3.59 0-1.97 1.61-3.58 3.59-3.58.83 0 1.58.29 2.19.76v-4.85l1.4-.4ZM20.89 7.32v9.16c0 1.98-1.61 3.59-3.59 3.59a3.6 3.6 0 0 1-3.59-3.59c0-1.97 1.62-3.58 3.59-3.58.84 0 1.59.29 2.2.77V7.72l1.39-.4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.89 5.179v2.14l-12 3.42v-3.99c0-1.47.89-2.61 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33.71.53 1.06 1.43 1.06 2.67Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.28 22a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.84 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7C10.18 4.1 9.4 5 9.4 6.3v12.57",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.72 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24ZM9.4 9.52 20.84 6.4",
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
    d: "M6.28 22.752a3.88 3.88 0 0 1-3.87-3.87 3.88 3.88 0 0 1 3.87-3.87 3.88 3.88 0 0 1 3.87 3.87 3.88 3.88 0 0 1-3.87 3.87Zm0-6.24c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.06-2.37-2.37-2.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.398 19.629c-.41 0-.75-.34-.75-.75V6.299c0-1.58.95-2.82 2.47-3.23l6.24-1.7c1.27-.35 2.34-.22 3.09.36.76.58 1.14 1.55 1.14 2.88v12.2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.599c0-.58-.1-1.34-.55-1.68-.49-.38-1.33-.23-1.79-.1l-6.24 1.7c-.87.24-1.36.89-1.36 1.79v12.58c0 .4-.34.74-.75.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.722 20.67a3.88 3.88 0 0 1-3.87-3.87 3.88 3.88 0 0 1 3.87-3.87 3.88 3.88 0 0 1 3.87 3.87 3.88 3.88 0 0 1-3.87 3.87Zm0-6.24c-1.31 0-2.37 1.06-2.37 2.37s1.06 2.37 2.37 2.37 2.37-1.06 2.37-2.37-1.06-2.37-2.37-2.37ZM9.4 10.271a.755.755 0 0 1-.2-1.48l11.44-3.12a.75.75 0 1 1 .39 1.45L9.6 10.241c-.07.02-.14.03-.2.03Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.28 22.002a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24ZM17.722 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.838 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7c-1.14.31-1.92 1.21-1.92 2.51v12.57M9.398 9.518l11.44-3.12"
  })));
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

var Music = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Music.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Music.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Music.displayName = 'Music';

module.exports = Music;
