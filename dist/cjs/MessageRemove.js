'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.97 14.83A3.944 3.944 0 0 0 5 13.5c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91.7.64 1.63 1.03 2.66 1.03 1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-1.02-.39-1.96-1.03-2.67ZM6.6 19.08c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.25 2.43h-9.5C4.9 2.43 3 4.33 3 7.18v4.46c0 .35.36.6.7.51.42-.1.85-.15 1.3-.15 2.86 0 5.22 2.32 5.48 5.13.02.28.25.5.52.5h.55l4.23 2.82c.62.42 1.47-.04 1.47-.8v-2.02c1.42 0 2.61-.48 3.44-1.3.83-.84 1.31-2.03 1.31-3.45v-5.7c0-2.85-1.9-4.75-4.75-4.75Zm-1.42 8.38H9.17a.715.715 0 0 1 0-1.43h6.66a.715.715 0 0 1 0 1.43Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM6.07 18.54l-2.12-2.11M6.05 16.46l-2.12 2.11M8.5 10.5h7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11.54v1.89c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5",
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
    d: "M22 7.43v6c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.5 11.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.97 14.83A3.944 3.944 0 0 0 5 13.5c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91.7.64 1.63 1.03 2.66 1.03 1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-1.02-.39-1.96-1.03-2.67ZM6.6 19.08c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.53-.53-.55.55c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.55-.55-.53-.53a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.53.53.5-.5c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 7.43v6c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM6.07 18.54l-2.12-2.11M6.05 16.46l-2.12 2.11M8.5 10.5h7",
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
    d: "M15.998 22.321c-.34 0-.67-.1-.96-.29l-4.26-2.84h-1.89c-.23 0-.45-.11-.59-.29a.763.763 0 0 1-.13-.65 3 3 0 0 0 .09-.74c0-.8-.3-1.57-.84-2.17a3.2 3.2 0 0 0-2.41-1.08c-.89 0-1.72.35-2.33.98-.19.2-.48.28-.74.2a.77.77 0 0 1-.53-.56c-.1-.44-.15-.92-.15-1.44v-6c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v6c0 1.67-.55 3.11-1.6 4.16-.88.88-2.05 1.41-3.4 1.55v1.42c0 .65-.36 1.24-.93 1.55-.27.13-.55.2-.83.2Zm-6.25-4.64h1.25c.15 0 .29.04.42.13l4.45 2.97c.1.07.2.04.25.01.05-.03.14-.09.14-.23v-2.13c0-.41.34-.75.75-.75 1.27 0 2.34-.4 3.09-1.15.76-.76 1.16-1.83 1.16-3.1v-6c0-2.58-1.67-4.25-4.25-4.25h-10c-2.58 0-4.25 1.67-4.25 4.25v5.88a4.69 4.69 0 0 1 2.25-.56c1.36 0 2.65.58 3.53 1.58.78.87 1.22 2 1.22 3.17-.01.06-.01.12-.01.18Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 22.25a4.7 4.7 0 0 1-3.17-1.23c-.35-.3-.66-.67-.9-1.08-.44-.72-.68-1.57-.68-2.44 0-1.25.48-2.42 1.34-3.31.9-.93 2.11-1.44 3.41-1.44 1.36 0 2.65.58 3.53 1.58.78.87 1.22 2 1.22 3.17 0 .38-.05.76-.15 1.12-.1.45-.29.92-.55 1.33-.83 1.42-2.39 2.3-4.05 2.3Zm0-8a3.241 3.241 0 0 0-2.78 4.92c.16.28.37.53.61.74a3.222 3.222 0 0 0 4.95-.72c.18-.28.3-.59.37-.91.07-.26.1-.51.1-.77 0-.8-.3-1.57-.84-2.17-.6-.7-1.48-1.09-2.41-1.09Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.068 19.291c-.19 0-.38-.07-.53-.22l-2.11-2.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.11 2.11c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.931 19.319c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.11-2.11c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.11 2.11c-.15.15-.34.22-.53.22ZM15.5 11.25h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M22 7.43v6c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88c.08-.3.12-.61.12-.93 0-1.02-.39-1.96-1.03-2.67A3.944 3.944 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 17.5c0 .32-.04.63-.12.93-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67ZM6.07 18.54l-2.12-2.11M6.05 16.46l-2.12 2.11M8.5 10.5h7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var MessageRemove = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
MessageRemove.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MessageRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MessageRemove.displayName = 'MessageRemove';

module.exports = MessageRemove;
