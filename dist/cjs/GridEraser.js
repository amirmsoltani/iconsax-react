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
    d: "m18.8 20.7-1.9 1.91c-.52.52-1.38.52-1.92 0l-1.58-1.59c-.52-.53-.52-1.38 0-1.92l1.91-1.89 3.49 3.49ZM22.61 16.9l-2.81 2.8-3.49-3.49 2.8-2.82c.53-.52 1.39-.52 1.92 0l1.58 1.59c.52.53.52 1.4 0 1.92ZM6.747 2.065c.55-.07 1.003.386 1.003.94V6.8a1 1 0 0 1-1 1H3c-.552 0-1.008-.45-.941-.998.327-2.687 2.013-4.39 4.688-4.737ZM20.93 7.8h-3.68a1 1 0 0 1-1-1V3.006c0-.554.454-1.011 1.004-.94 2.634.344 4.31 2.002 4.676 4.614.08.59-.4 1.12-1 1.12ZM6.75 16.3a1 1 0 0 1 1 1v3.62c0 .6-.53 1.08-1.13 1-2.57-.382-4.19-2.028-4.546-4.61-.076-.551.381-1.01.939-1.01H6.75ZM7.75 10.3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.75a1 1 0 0 0 1-1v-3.5ZM14.75 10.3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5c.55 0 1-.45 1-1v-3.5ZM14.75 3a1 1 0 0 0-1-1h-3.5a1 1 0 0 0-1 1v3.8a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V3Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M5.03 8.5H22M2.03 15.5H12M8.51 21.992V2.012M15.51 11.992v-9.98",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m18.8 19.7-1.9 1.901c-.52.52-1.38.52-1.91 0l-1.58-1.59c-.52-.52-.52-1.38 0-1.91l1.9-1.89 3.49 3.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.61 16.9-2.81 2.81-3.5-3.5 2.81-2.82c.52-.52 1.39-.52 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92Z",
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
    d: "M8.39 2.172v6.45H1.93v-.68c0-3.61 2.15-5.76 5.76-5.76h.7v-.01ZM21.77 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67c3.18.01 5.76 2.59 5.76 5.77ZM8.39 15.55v5.76c0 .38-.31.68-.68.68H7.7c-3.18 0-5.76-2.58-5.76-5.76v-.68h6.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8.4 8.61H1.94v6.94H8.4V8.61Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.33 8.61v6.26c0 .38-.31.68-.68.68H8.39V8.61h6.94Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.33 2.172H8.39v6.45h6.94v-6.45ZM19.8 20.7l-1.9 1.91c-.52.52-1.38.52-1.92 0l-1.58-1.59c-.52-.53-.52-1.38 0-1.92l1.91-1.89 3.49 3.49Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m22.61 17.9-2.81 2.8-3.49-3.49 2.8-2.82c.53-.52 1.39-.52 1.92 0l1.58 1.59c.52.53.52 1.4 0 1.92Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1M2.03 8.5H22M2.03 15.5H12M8.51 21.99V2.01M15.51 11.99V2.01",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m18.8 19.7-1.9 1.9c-.52.52-1.38.52-1.91 0l-1.58-1.59c-.52-.52-.52-1.38 0-1.91l1.9-1.89 3.49 3.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.61 16.9-2.81 2.81-3.5-3.5 2.81-2.82c.52-.52 1.39-.52 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92Z",
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
    d: "M10 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h1c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22.001 9.25H2.031c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h19.97c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.001 16.25h-9.97c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.97c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.51 22.74c-.41 0-.75-.34-.75-.75V2.02c0-.41.34-.75.75-.75s.75.34.75.75v19.97c0 .41-.33.75-.75.75ZM15.51 12.74c-.41 0-.75-.34-.75-.75V2.02c0-.41.34-.75.75-.75s.75.34.75.75v9.97c0 .41-.33.75-.75.75ZM15.95 22.75c-.54 0-1.07-.2-1.49-.61l-1.59-1.6c-.81-.81-.81-2.14 0-2.97l1.91-1.9c.29-.29.77-.29 1.06 0l3.5 3.5a.749.749 0 0 1 0 1.06l-1.9 1.9c-.42.41-.95.62-1.49.62Zm-.65-5.48-1.37 1.37a.61.61 0 0 0 0 .85l1.58 1.59c.23.23.62.23.85 0l1.38-1.37-2.44-2.44Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.8 20.45a.75.75 0 0 1-.53-.22l-3.5-3.5a.754.754 0 0 1 0-1.06l2.81-2.82c.82-.82 2.16-.82 2.98 0l1.58 1.59c.39.39.61.92.61 1.49s-.22 1.09-.61 1.49l-2.8 2.81c-.15.15-.34.22-.54.22Zm-2.43-4.24 2.44 2.44 2.27-2.28c.11-.11.17-.26.17-.43 0-.16-.06-.32-.17-.43l-1.58-1.59a.61.61 0 0 0-.85 0l-2.28 2.29Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1",
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
    d: "M2.03 8.5H22M2.03 15.5H12M8.51 21.988V2.008M15.51 11.988v-9.98"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m18.8 19.7-1.9 1.901c-.52.52-1.38.52-1.91 0l-1.58-1.59c-.52-.52-.52-1.38 0-1.91l1.9-1.89 3.49 3.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.61 16.9-2.81 2.81-3.5-3.5 2.81-2.82c.52-.52 1.39-.52 1.91 0l1.58 1.59c.53.53.53 1.4.01 1.92Z",
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

var GridEraser = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
GridEraser.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
GridEraser.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
GridEraser.displayName = 'GridEraser';

module.exports = GridEraser;