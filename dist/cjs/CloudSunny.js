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
    d: "M20.612 10.83a5.237 5.237 0 0 0-2.91-1.78c-.26-1.16-.71-2.16-1.37-2.99-.02-.03-.04-.06-.06-.08-2.2-2.66-5.8-2.65-8.23-1.27-2.08 1.19-3.85 3.7-2.92 7.28-2.13.52-3.11 2.38-3.11 4.06 0 1.88 1.23 3.99 3.97 4.19H16.362c1.42 0 2.78-.53 3.83-1.49 2.51-2.22 2.18-5.84.42-7.92ZM21.76 8.742c0 .34-.04.67-.14.99a6.62 6.62 0 0 0-2.69-1.87 8.672 8.672 0 0 0-1.48-2.8c.19-.04.39-.05.58-.05a3.73 3.73 0 0 1 3.73 3.73Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.261 5.428c2.48-2.01 6.5-2.11 8.74.6v.01c.7.86 1.23 2 1.47 3.45 1.33.17 2.41.82 3.18 1.74 1.75 2.07 1.9 5.45-.38 7.45-.99.91-2.29 1.41-3.64 1.4H5.541c-4.67-.34-4.68-7.14 0-7.48h.05c-.48-1.34-.58-2.56-.41-3.64",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 13.012c-.52-.26-1.09-.4-1.67-.41M15.852 9.922c.52-.26 1.09-.4 1.67-.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a4.897 4.897 0 0 0-3.18-1.74C17.23 8.04 16.7 6.9 16 6.04v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z",
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
    d: "M20.612 10.83a5.237 5.237 0 0 0-2.91-1.78c-.26-1.16-.71-2.16-1.37-2.99-.02-.03-.04-.06-.06-.08-2.2-2.66-5.8-2.65-8.23-1.27-2.08 1.19-3.85 3.7-2.92 7.28-2.13.52-3.11 2.38-3.11 4.06 0 1.88 1.23 3.99 3.97 4.19H16.362c1.42 0 2.78-.53 3.83-1.49 2.51-2.22 2.18-5.84.42-7.92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.76 8.742c0 .9-.32 1.76-.9 2.42-.07-.11-.16-.22-.25-.33a5.204 5.204 0 0 0-2.91-1.78c-.25-1.16-.71-2.15-1.37-2.98-.01-.03-.04-.06-.06-.08-.1-.12-.21-.23-.31-.34.61-.42 1.31-.64 2.07-.64a3.73 3.73 0 0 1 3.73 3.73Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.27 18.68c-.99.91-2.29 1.41-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05C2.89 5.06 12.12 1.34 16 6.03v.01c.7.86 1.23 2 1.47 3.45 1.33.17 2.41.82 3.18 1.74 1.75 2.07 1.9 5.45-.38 7.45Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 13.01c-.52-.26-1.09-.4-1.67-.41M15.85 9.92c.52-.26 1.09-.4 1.67-.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a4.897 4.897 0 0 0-3.18-1.74C17.23 8.04 16.7 6.9 16 6.04v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z",
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
    d: "M16.671 20.83H5.541c-2.94-.21-4.26-2.48-4.26-4.49 0-1.8 1.05-3.8 3.33-4.35-1-3.84.9-6.53 3.14-7.8 2.6-1.48 6.47-1.49 8.82 1.36l.06.09c.7.89 1.19 1.96 1.47 3.2 1.23.27 2.29.93 3.12 1.91 1.89 2.23 2.25 6.11-.45 8.49a6.022 6.022 0 0 1-4.1 1.59ZM11.491 4.7c-1.06 0-2.11.29-2.99.79-2.42 1.38-3.24 3.94-2.2 6.86.08.23.05.49-.09.68-.14.19-.37.32-.61.32-1.94.14-2.81 1.6-2.81 2.99 0 1.39.87 2.85 2.81 3h11.04c1.16.01 2.28-.42 3.13-1.2l.01-.01c2.03-1.78 1.73-4.71.3-6.4-.7-.83-1.63-1.34-2.7-1.48a.732.732 0 0 1-.64-.62c-.21-1.24-.65-2.28-1.31-3.1-.02-.02-.03-.05-.05-.07-1.06-1.24-2.48-1.76-3.89-1.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 13.762c-.11 0-.23-.03-.33-.08-.42-.21-.88-.32-1.35-.33a.762.762 0 0 1-.74-.76c.01-.41.4-.75.76-.74.69.01 1.38.18 1.99.49.37.18.52.64.34 1.01-.13.26-.39.41-.67.41ZM15.848 10.67c-.28 0-.54-.15-.67-.42a.754.754 0 0 1 .34-1.01c.62-.31 1.31-.48 1.99-.49.4-.01.76.32.76.74.01.41-.32.76-.74.76-.46.01-.93.12-1.35.33-.11.06-.22.09-.33.09Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.65 11.98c-.21 0-.43-.09-.58-.27a4.16 4.16 0 0 0-2.7-1.48.732.732 0 0 1-.64-.62c-.21-1.24-.65-2.28-1.31-3.1a.733.733 0 0 1-.17-.47c0-.2.08-.4.22-.54.8-.81 1.86-1.25 3-1.25a4.26 4.26 0 0 1 4.25 4.25c0 1.3-.58 2.51-1.6 3.32-.14.11-.3.16-.47.16Zm-2.54-3.14c.96.21 1.83.66 2.55 1.32a2.748 2.748 0 0 0-2.19-4.41c-.52 0-1.02.14-1.45.42.51.77.87 1.67 1.09 2.67Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.271 18.682c-.99.91-2.29 1.41-3.64 1.4H5.541c-4.67-.34-4.68-7.14 0-7.48h.05c-2.7-7.54 6.53-11.26 10.41-6.57v.01c.7.86 1.23 2 1.47 3.45 1.33.17 2.41.82 3.18 1.74 1.75 2.07 1.9 5.45-.38 7.45Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 13.012c-.52-.26-1.09-.4-1.67-.41M15.852 9.922c.52-.26 1.09-.4 1.67-.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a4.897 4.897 0 0 0-3.18-1.74C17.23 8.04 16.7 6.9 16 6.04v-.01A3.46 3.46 0 0 1 18.47 5c1.93 0 3.5 1.57 3.5 3.5Z",
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

var CloudSunny = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
CloudSunny.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
CloudSunny.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CloudSunny.displayName = 'CloudSunny';

module.exports = CloudSunny;