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
    d: "M23 15.371v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0a5.681 5.681 0 0 1-2.95-1.97c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m20.95 11.011-.18 1.07-.7-.28c-.99-.4-2.07-.4-3.08 0l-2.79 1.15c-.95.4-1.61 1.39-1.61 2.42v2.19c0 1.19.33 2.38.94 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M23 17.561v-2.19c0-.42-.31-.88-.69-1.04l-1.79-.73-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44.73.93 1.77 1.65 2.95 1.97.16.04.34.04.51 0 .99-.27 1.87-.82 2.56-1.53",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.03 11.011c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77l-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-.55-3.32",
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
    d: "M23 15.371v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0a5.681 5.681 0 0 1-2.95-1.97c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m20.95 11.011-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.681 5.681 0 0 1 15.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m20.95 11.01-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77Z",
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
    d: "M18.53 23.75c-.15 0-.29-.02-.42-.05a6.466 6.466 0 0 1-3.36-2.23c-.91-1.13-1.41-2.51-1.41-3.9v-2.19c0-.72.48-1.45 1.15-1.73l2.79-1.14c.82-.32 1.71-.32 2.52 0l2.8 1.14c.67.28 1.16 1.01 1.16 1.73v2.19c0 2.79-2 5.37-4.75 6.13-.17.03-.33.05-.48.05Zm.01-10c-.24 0-.48.04-.71.14l-2.77 1.14c-.1.04-.22.23-.22.35v2.19c0 1.05.38 2.1 1.08 2.97.66.84 1.57 1.45 2.56 1.72.03.01.09.01.14-.01 2.05-.57 3.62-2.58 3.62-4.68v-2.19c0-.12-.12-.3-.23-.35l-2.78-1.14a1.81 1.81 0 0 0-.69-.14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.34 21.75H6.18c-1.74 0-3.34-1.35-3.63-3.06l-1.26-7.55c-.21-1.19.38-2.72 1.32-3.48L9.19 2.4c1.29-1.04 3.31-1.03 4.6.01l6.58 5.25c.95.76 1.53 2.29 1.32 3.48l-.43 2.59c-.04.22-.18.42-.38.53-.2.11-.44.13-.65.04l-1-.41c-.44-.18-.94-.18-1.4 0l-2.77 1.14c-.1.04-.22.23-.22.35v2.19c0 1.05.38 2.1 1.08 2.97.18.22.22.53.09.79-.12.25-.38.42-.67.42ZM11.48 3.12c-.49 0-.99.15-1.35.44L3.55 8.82c-.52.42-.89 1.4-.78 2.06l1.26 7.55c.17.98 1.15 1.81 2.15 1.81h7.8c-.42-.85-.64-1.77-.64-2.69v-2.19c0-.72.48-1.45 1.15-1.73l2.79-1.14c.82-.32 1.71-.32 2.52 0l.14.06.28-1.66c.11-.66-.26-1.64-.78-2.06l-6.58-5.25c-.38-.31-.88-.46-1.38-.46Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M23 15.371v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0a5.681 5.681 0 0 1-2.95-1.97c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m20.95 11.011-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77Z",
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

var SafeHome = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
SafeHome.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
SafeHome.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
SafeHome.displayName = 'SafeHome';

module.exports = SafeHome;
