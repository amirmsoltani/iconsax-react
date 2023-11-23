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
    fill: color,
    d: "M19 7c0 .18-.01.35-.03.52a5.922 5.922 0 01-1.73 3.72A5.944 5.944 0 0113 13H9.87c-.5 0-.92.37-.99.86l-.76 5.28c-.06.39-.34.71-.71.81-.09.04-.18.05-.28.05H5.18a.998.998 0 01-.99-1.16L6.58 4.51A2.997 2.997 0 019.54 2H14c2.76 0 5 2.24 5 5z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M21 11c0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-2.15a1 1 0 00-.99.84l-.72 4.32a1 1 0 01-.99.84H8.22a.95.95 0 01-.48-.12c-.22-.12-.08-.41.16-.51.9-.29 1.56-1.06 1.7-2.02l.64-4.42c.04-.25.25-.43.49-.43H13c2.01 0 3.9-.78 5.3-2.19.83-.82 1.45-1.83 1.81-2.92.08-.25.41-.3.52-.07.24.52.37 1.08.37 1.68z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m6.17 6.98.41-2.47A2.997 2.997 0 0 1 9.54 2H14c2.76 0 5 2.24 5 5 0 .18-.01.35-.03.52a5.922 5.922 0 0 1-1.73 3.72A5.944 5.944 0 0 1 13 13H9.87c-.5 0-.92.37-.99.86l-.76 5.28c-.06.39-.34.71-.71.81-.09.04-.18.05-.28.05H5.18a.998.998 0 0 1-.99-1.16l1.24-7.46",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21 11c0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.22c-.63 0-1.1-.58-.98-1.2l.17-.85c.37-.1.65-.42.71-.81l.76-5.28c.07-.49.49-.86.99-.86H13c1.66 0 3.16-.67 4.24-1.76.97-.96 1.61-2.27 1.73-3.72C20.18 8.21 21 9.51 21 11Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 7c0 .18-.01.35-.03.52a5.922 5.922 0 0 1-1.73 3.72A5.944 5.944 0 0 1 13 13H9.87c-.5 0-.92.37-.99.86l-.76 5.28c-.06.39-.34.71-.71.81-.09.04-.18.05-.28.05H5.18a.998.998 0 0 1-.99-1.16L6.58 4.51A2.997 2.997 0 0 1 9.54 2H14c2.76 0 5 2.24 5 5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21 11c0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.22c-.63 0-1.1-.58-.98-1.2l.17-.85c.37-.1.65-.42.71-.81l.76-5.28c.07-.49.49-.86.99-.86H13c1.66 0 3.16-.67 4.24-1.76.97-.96 1.61-2.27 1.73-3.72C20.18 8.21 21 9.51 21 11Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 7v.5c-.1 1.5-.8 2.8-1.7 3.7-1.1 1.1-2.6 1.8-4.3 1.8H9.9c-.5 0-.9.4-1 .9l-.8 5.3c-.1.4-.3.7-.7.8H5.2c-.6 0-1.1-.5-1-1.2L6.6 4.5C6.8 3.1 8.1 2 9.5 2H14c2.8 0 5 2.2 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21 11c0 1.4-.6 2.6-1.5 3.5-.9.9-2.1 1.5-3.5 1.5h-2.1c-.5 0-.9.3-1 .8l-.7 4.3c-.1.5-.5.8-1 .8h-3c-.6 0-1.1-.6-1-1.2l.2-.7c.4-.1.7-.4.7-.8l.8-5.3c.1-.5.5-.9 1-.9H13c1.7 0 3.2-.7 4.2-1.8 1-1 1.6-2.3 1.7-3.7 1.3.7 2.1 2 2.1 3.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.13 20.75H5.18c-.52 0-1-.22-1.34-.62-.33-.39-.48-.91-.39-1.41L5.84 4.39a3.74 3.74 0 0 1 3.7-3.14H14c3.17 0 5.75 2.58 5.75 5.75 0 .21-.01.41-.04.61a6.672 6.672 0 0 1-1.95 4.17 6.685 6.685 0 0 1-4.77 1.98H9.86c-.12 0-.23.09-.25.22l-.76 5.28c-.1.67-.57 1.22-1.2 1.41-.2.07-.39.08-.52.08Zm2.41-18c-1.11 0-2.04.79-2.22 1.88L4.93 18.96c-.02.1.03.17.06.2s.09.09.19.09h1.95c.17-.05.23-.13.25-.22l.76-5.27c.12-.86.87-1.5 1.73-1.5H13c1.41 0 2.72-.55 3.71-1.54.88-.87 1.41-2.02 1.52-3.25.02-.17.03-.31.03-.46a4.26 4.26 0 0 0-4.25-4.25H9.54v-.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.15 22.75H8.22c-.52 0-1.01-.231-1.35-.641-.34-.41-.47-.94-.37-1.46l.26-1.31.45-.12c.08-.02.15-.1.17-.2l.76-5.27c.12-.86.87-1.5 1.73-1.5H13c1.41 0 2.72-.55 3.71-1.54.88-.87 1.41-2.02 1.52-3.25l.1-1.17 1.02.58c1.49.85 2.41 2.43 2.41 4.13 0 1.53-.6 2.97-1.68 4.07a5.736 5.736 0 0 1-4.07 1.68h-2.15c-.13 0-.23.09-.25.21l-.72 4.32a1.77 1.77 0 0 1-1.74 1.47Zm-3.08-2.28-.1.48c-.02.1.03.18.06.21.03.04.09.09.19.09h2.93c.13 0 .23-.09.25-.21l.72-4.32c.14-.85.87-1.47 1.73-1.47H16c1.13 0 2.2-.44 3.01-1.24.8-.8 1.24-1.88 1.24-3.01 0-.78-.28-1.52-.78-2.1-.31 1.08-.9 2.08-1.71 2.88a6.684 6.684 0 0 1-4.77 1.98H9.86c-.12 0-.23.09-.25.22l-.76 5.28c-.07.5-.36.94-.78 1.21Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 7c0 .18-.01.35-.03.52a5.922 5.922 0 0 1-1.73 3.72A5.944 5.944 0 0 1 13 13H9.87c-.5 0-.92.37-.99.86l-.76 5.28c-.06.39-.34.71-.71.81-.09.04-.18.05-.28.05H5.18a.998.998 0 0 1-.99-1.16L6.58 4.51A2.997 2.997 0 0 1 9.54 2H14c2.76 0 5 2.24 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21 11c0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.22c-.63 0-1.1-.58-.98-1.2l.17-.85c.37-.1.65-.42.71-.81l.76-5.28c.07-.49.49-.86.99-.86H13c1.66 0 3.16-.67 4.24-1.76.97-.96 1.61-2.27 1.73-3.72C20.18 8.21 21 9.51 21 11Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var Paypal = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Paypal.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Paypal.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Paypal.displayName = 'Paypal';

module.exports = Paypal;