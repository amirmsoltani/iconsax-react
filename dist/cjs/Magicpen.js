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
    d: "m19.5 7.499-1.49 1.49-3-3 1.49-1.49c.42-.42.96-.62 1.5-.62s1.08.2 1.5.62c.83.83.83 2.17 0 3ZM17.31 9.7 6.5 20.5c-.83.83-2.17.83-3 0-.83-.83-.83-2.17 0-3L14.31 6.7l3 3ZM9.95 3.5l.41-1.39c.04-.13 0-.27-.09-.37-.09-.1-.25-.14-.38-.1l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.4-.4 1.39.41c.04.01.07.02.11.02.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.41-1.4ZM5.95 9.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.4.4-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.4-1.38ZM20.95 14.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.41 1.39-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.42-1.38Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.98 10.021 2.52-2.52c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3 .83.83 2.17.83 3 0l8-8M18.01 8.988l-3-3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.56 3.5 10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44M4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM18.44 14.5 18 13l1.5.44L21 13l-.44 1.5L21 16l-1.5-.44",
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.5 7.499-1.49 1.49-3-3 1.49-1.49c.42-.42.96-.62 1.5-.62s1.08.2 1.5.62c.83.83.83 2.17 0 3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.01 8.988 6.5 20.498c-.83.83-2.17.83-3 0-.83-.83-.83-2.17 0-3l11.51-11.51 3 3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.95 3.5.41-1.39c.04-.13 0-.27-.09-.37-.09-.1-.25-.14-.38-.1l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.4-.4 1.39.41c.04.01.07.02.11.02.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.41-1.4ZM5.95 9.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.4.4-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.4 1.4-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.4-1.38ZM20.95 14.5l.41-1.39c.04-.13 0-.27-.09-.37-.1-.1-.24-.13-.37-.09l-1.39.41-1.39-.41c-.13-.04-.27 0-.37.09-.1.1-.13.24-.09.37l.41 1.39-.41 1.39c-.04.13 0 .27.09.37.1.1.24.13.37.09l1.39-.41 1.39.41c.03.01.07.01.11.01.1 0 .19-.04.27-.11.1-.1.13-.24.09-.37l-.42-1.38Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3zM18.01 8.99l-3-3"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.5 2.44L10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44zM4.5 8.44L6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44zM19.5 13.44L21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 21.869c-.74 0-1.47-.28-2.03-.84-.54-.54-.84-1.26-.84-2.03 0-.77.3-1.49.84-2.03l13-13a2.873 2.873 0 0 1 4.06 0c.54.54.84 1.26.84 2.03 0 .77-.3 1.49-.84 2.03l-13 13c-.56.56-1.29.84-2.03.84Zm13-17.24c-.35 0-.7.13-.97.4l-13 13c-.26.26-.4.6-.4.97s.14.71.4.97c.53.53 1.41.53 1.94 0l13-13c.26-.26.4-.6.4-.97s-.14-.71-.4-.97c-.27-.27-.62-.4-.97-.4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.01 9.74c-.19 0-.38-.07-.53-.22l-3-3a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3 3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM10 5.5c-.05 0-.09-.01-.14-.02l-1.36-.4-1.36.4c-.18.05-.37 0-.49-.13-.13-.13-.18-.31-.13-.49l.4-1.36-.4-1.36c-.05-.18 0-.37.13-.49a.5.5 0 0 1 .49-.13l1.36.4 1.36-.4c.18-.05.36 0 .49.13a.5.5 0 0 1 .13.49l-.4 1.36.4 1.36c.05.18 0 .37-.13.49a.47.47 0 0 1-.35.15ZM8.5 4.06c.05 0 .09.01.14.02l.62.18-.18-.62a.447.447 0 0 1 0-.28l.18-.62-.62.18c-.09.03-.19.03-.28 0l-.62-.18.18.62c.03.09.03.19 0 .28l-.18.62.62-.18c.05-.01.09-.02.14-.02ZM6 11.5c-.05 0-.09-.01-.14-.02l-1.36-.4-1.36.4c-.18.05-.36 0-.49-.13a.5.5 0 0 1-.13-.49l.4-1.36-.4-1.36c-.05-.18 0-.37.13-.49s.32-.18.49-.13l1.36.4 1.36-.4a.5.5 0 0 1 .49.13c.13.13.18.32.13.49l-.4 1.36.4 1.36c.05.18 0 .37-.13.49a.47.47 0 0 1-.35.15Zm-1.5-1.44c.05 0 .09.01.14.02l.62.18-.18-.62a.447.447 0 0 1 0-.28l.18-.62-.62.18c-.09.03-.19.03-.28 0l-.62-.18.18.62c.03.09.03.19 0 .28l-.18.62.62-.18c.05-.01.09-.02.14-.02ZM21 16.5c-.05 0-.09-.01-.14-.02l-1.36-.4-1.36.4c-.18.05-.36 0-.49-.13s-.18-.32-.13-.49l.4-1.36-.4-1.36c-.05-.18 0-.37.13-.49s.32-.18.49-.13l1.36.4 1.36-.4a.5.5 0 0 1 .49.13.5.5 0 0 1 .13.49l-.4 1.36.4 1.36c.05.18 0 .37-.13.49a.47.47 0 0 1-.35.15Zm-1.5-1.44c.05 0 .09.01.14.02l.62.18-.18-.62a.447.447 0 0 1 0-.28l.18-.62-.62.18c-.09.03-.19.03-.28 0l-.62-.18.18.62c.03.09.03.19 0 .28l-.18.62.62-.18c.05-.01.09-.02.14-.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 20.501c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m18.01 8.988-3-3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z",
    stroke: color,
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

var Magicpen = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Magicpen.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Magicpen.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Magicpen.displayName = 'Magicpen';

module.exports = Magicpen;