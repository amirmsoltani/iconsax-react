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
    d: "M18.7 14.459c-.35.35-.55 1.05-.44 1.53l.69 3.02c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31a.524.524 0 0 1-.11-.1l12.62-12.62c.46-.46 1.11-.67 1.75-.56l.15.03c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.43 2.43ZM5.74 16c.11-.48-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93 5.74 16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.05 7.67c-.24-.18-.44-.41-.55-.64l-1.76-3.52c-.95-1.91-2.51-1.91-3.47 0L8.5 7.03c-.12.25-.34.48-.59.67M5.28 18.65l.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77M22 2 2 22",
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
    d: "M18.7 14.46c-.35.35-.55 1.06-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.45-.27-1.23-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.04-.03-.08-.06-.11-.1L18.8 8.2l1.17.2c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.43 2.43ZM5.74 16c.11-.48-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.07 18.93 5.74 16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.11.23.32.45.55.64M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77M22 2 2 22",
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
    d: "M5.28 19.398c-.06 0-.11-.01-.17-.02-.4-.09-.66-.5-.56-.9l.57-2.46c.08-.32-.08-.87-.32-1.11l-2.48-2.48c-1.24-1.24-1.14-2.3-.97-2.82.17-.52.71-1.44 2.43-1.73l3.19-.53c.3-.06.73-.38.86-.65l1.77-3.53c.8-1.61 1.85-1.84 2.4-1.84.55 0 1.6.24 2.4 1.84l1.76 3.52c.06.12.19.26.34.38.33.25.39.73.13 1.05-.25.33-.72.39-1.05.13-.24-.18-.56-.49-.76-.89l-1.76-3.52c-.31-.63-.71-1.01-1.06-1.01-.35 0-.75.38-1.06 1.02l-1.77 3.52c-.35.7-1.19 1.32-1.96 1.45l-3.18.53c-.68.11-1.14.38-1.25.71-.11.33.12.82.61 1.3l2.48 2.48c.6.6.91 1.68.72 2.51l-.57 2.46c-.09.35-.39.59-.74.59ZM17.66 22.672c-.53 0-1.21-.17-2.06-.67l-2.99-1.77c-.31-.18-.91-.18-1.21 0l-3 1.77a.76.76 0 0 1-1.03-.26.758.758 0 0 1 .26-1.03l2.99-1.77c.78-.46 1.96-.46 2.74 0l2.99 1.77c.87.52 1.42.52 1.63.37.21-.15.36-.68.14-1.66l-.71-3.07c-.19-.83.12-1.9.72-2.51l2.48-2.48c.49-.49.71-.97.61-1.3-.11-.33-.57-.6-1.25-.71a.755.755 0 0 1-.62-.86c.07-.41.45-.68.86-.62 1.73.29 2.27 1.21 2.43 1.73.16.52.26 1.58-.97 2.82l-2.47 2.48c-.24.24-.39.78-.32 1.11l.71 3.07c.46 2-.25 2.87-.71 3.21-.25.18-.65.38-1.22.38Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m5.28 18.65.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.95-1.91 2.51-1.91 3.47 0l1.76 3.52c.11.23.32.45.55.64",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 2 2 22",
    stroke: color,
    strokeWidth: strokeWidth,
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

var StarSlash = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
StarSlash.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
StarSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
StarSlash.displayName = 'StarSlash';

module.exports = StarSlash;
