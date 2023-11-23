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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-4.58 12.84c0 1.09-.85 1.94-1.94 1.94H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.7-1.63.96-1.71 2.77h1.91c1.09 0 1.94.85 1.94 1.94v1.49h-.01Zm6.14 0c0 1.09-.85 1.94-1.94 1.94h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.72-1.63.98-1.71 2.79h1.91c1.09 0 1.94.85 1.94 1.94v1.47Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.159c0-2.79.52-3.26 2.09-4.19",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.19 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94H7.77c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c0 1.09.87 1.96 1.94 1.96ZM14.319 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94h-1.91c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c.01 1.09.88 1.96 1.94 1.96Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.16c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.16c0-2.79.52-3.26 2.09-4.19",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.68 16.782H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49a1.933 1.933 0 0 1-1.94 1.93Zm-1.93-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44H7.75v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83a.76.76 0 0 1 1.03.26c.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75ZM15.809 16.782h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49c0 1.07-.85 1.93-1.94 1.93Zm-1.92-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44h-1.93v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.14 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83.36-.21.82-.09 1.03.26.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.159c0-2.79.52-3.26 2.09-4.19"
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

var QuoteDownSquare = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
QuoteDownSquare.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
QuoteDownSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
QuoteDownSquare.displayName = 'QuoteDownSquare';

module.exports = QuoteDownSquare;
