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
    d: "m20.72 18.24-.94-.94c.49-.74.78-1.63.78-2.59 0-2.6-2.11-4.71-4.71-4.71s-4.71 2.11-4.71 4.71 2.11 4.71 4.71 4.71c.96 0 1.84-.29 2.59-.78l.94.94c.19.19.43.28.68.28.25 0 .49-.09.68-.28.35-.36.35-.96-.02-1.34Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L3.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.07 16.521a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.87 17.121l-1-1",
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
    d: "m19.75 15.41-.85-.85c.44-.67.7-1.46.7-2.32C19.6 9.9 17.7 8 15.36 8c-2.34 0-4.24 1.9-4.24 4.24 0 2.34 1.9 4.24 4.24 4.24.86 0 1.66-.26 2.32-.7l.85.85c.17.17.39.25.61.25.22 0 .44-.08.61-.25.33-.34.33-.89 0-1.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.31 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.32 19.07c0 .61-.4 1.41-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.07 16.52a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.87 17.12l-1-1",
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
    d: "M10.93 22.75c-.48 0-.96-.12-1.4-.36-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65L3.67 9c-.63-.63-1.12-1.73-1.12-2.54V4.14c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79V4.04c0-.7-.57-1.27-1.27-1.27H5.32c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49L8.59 12c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.29-.17.57-.72.57-1.09 0-.41.34-.75.75-.75s.75.34.75.75c0 .9-.56 1.93-1.27 2.36l-1.39.9c-.45.27-.96.41-1.47.41Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.071 17.271c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95Zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.87 17.869c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.32 19.072c0 .61-.4 1.41-.91 1.72l-1.41.91c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12l-3.84-4.04c-.51-.51-.91-1.41-.91-2.02v-2.32c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.07 16.521a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM19.87 17.121l-1-1",
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

var FilterSearch = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
FilterSearch.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
FilterSearch.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
FilterSearch.displayName = 'FilterSearch';

module.exports = FilterSearch;
