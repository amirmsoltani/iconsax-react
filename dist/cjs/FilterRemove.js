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
    d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3 1.73 0 3.24-.93 4.06-2.3.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75Zm1.8 6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72-.75.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75-.72-.73a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.72.72.7-.7c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75ZM18.149 15.99l-2.51-2.51M18.13 13.512l-2.51 2.51",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02",
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
    opacity: ".4",
    d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72L12 21.7c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3 1.73 0 3.24-.93 4.06-2.3.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75Zm1.8 6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.72-.72-.75.75c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75-.72-.73a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.72.72.7-.7c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.7.7.72.73c.3.29.3.77 0 1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.41 20.79 12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.4-1.62-.81-2.12L4.22 8.47c-.51-.51-.91-1.41-.91-2.02V4.13c0-1.21.91-2.12 2.02-2.12h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.32",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75ZM18.15 15.99l-2.51-2.51M18.13 13.51l-2.51 2.51",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z",
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
    d: "M10.93 22.752c-.48 0-.96-.12-1.4-.37-.89-.5-1.42-1.39-1.42-2.4v-5.35c0-.51-.33-1.26-.64-1.65l-3.8-3.99c-.63-.63-1.12-1.73-1.12-2.54v-2.32c0-1.61 1.22-2.87 2.77-2.87h13.33a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.63 2.26-1.23 2.85-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06c.37-.37.79-1.2.79-1.79v-2.22c0-.7-.57-1.27-1.27-1.27H5.33c-.71 0-1.27.6-1.27 1.37v2.32c0 .37.3 1.1.69 1.49l3.85 4.05c.51.63 1.01 1.69 1.01 2.64v5.35c0 .66.45.98.65 1.09.43.24.94.23 1.34-.01l1.4-.9c.35-.22.81-.12 1.04.23.22.35.12.81-.23 1.04l-1.41.91c-.45.27-.96.41-1.47.41Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.879 20.25c-1.92 0-3.73-1.02-4.71-2.67-.52-.84-.79-1.82-.79-2.83 0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5c0 1.01-.28 1.99-.8 2.84-.97 1.64-2.77 2.66-4.7 2.66Zm0-9.5c-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.05a3.995 3.995 0 0 0 3.42 1.95c1.42 0 2.7-.72 3.42-1.94.38-.62.58-1.33.58-2.06 0-2.21-1.79-4-4-4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.15 16.742c-.19 0-.38-.07-.53-.22l-2.51-2.51a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.51 2.51c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.62 16.77c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.51-2.51c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.51 2.51c-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.93 22.75c-.48 0-.96-.12-1.39-.36-.89-.5-1.42-1.4-1.42-2.41v-5.35c0-.5-.33-1.26-.65-1.65l-3.8-3.99c-.63-.65-1.12-1.74-1.12-2.54V4.12c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.62 2.23-1.22 2.85l-1.8 1.59c-.18.16-.44.22-.67.17-.27-.07-.56-.1-.86-.1-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.22.14.36.38.36.64v.34c0 .79-.48 1.9-1.28 2.37l-1.38.89c-.45.28-.97.42-1.48.42Zm-5.6-20c-.71 0-1.27.6-1.27 1.37v2.33c0 .36.3 1.1.7 1.5L8.61 12c.51.63 1.02 1.7 1.02 2.64v5.35c0 .66.46.99.65 1.1.43.24.94.23 1.33-.01l1.4-.9c.27-.16.54-.67.56-1.03-.55-.41-1.03-.94-1.39-1.54-.52-.85-.8-1.83-.8-2.83a5.51 5.51 0 0 1 6.32-5.44l1.48-1.31c.34-.35.76-1.18.76-1.77V4.04c0-.7-.57-1.27-1.27-1.27H5.33v-.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.63 14.75c0 .89-.25 1.73-.69 2.45a4.709 4.709 0 0 1-4.06 2.3 4.73 4.73 0 0 1-4.06-2.3 4.66 4.66 0 0 1-.69-2.45c0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75ZM18.149 15.99l-2.51-2.51M18.13 13.512l-2.51 2.51",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z",
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

var FilterRemove = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
FilterRemove.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
FilterRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
FilterRemove.displayName = 'FilterRemove';

module.exports = FilterRemove;
