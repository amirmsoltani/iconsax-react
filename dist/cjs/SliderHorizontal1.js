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
    d: "M3.5 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75ZM22 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75ZM8 21.25h8c1.66 0 3-1.34 3-3V5.75c0-1.66-1.34-3-3-3H8c-1.66 0-3 1.34-3 3v12.5c0 1.66 1.34 3 3 3Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 19.5v-15M22 19V4M5 12.45V7.5c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66",
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
    d: "M15 2H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.67 5.328h-.34c-.12 0-.23 0-.35.01.01.05.02.1.02.16v13c0 .06-.01.11-.02.16.11.01.22.01.35.01h.34c2.66 0 3.33-.67 3.33-3.34v-6.66c0-2.67-.67-3.34-3.33-3.34ZM6 18.498v-13c0-.06.01-.11.02-.16a4.09 4.09 0 0 0-.35-.01h-.34c-2.66 0-3.33.67-3.33 3.34v6.66c0 2.67.67 3.34 3.33 3.34h.34c.12 0 .23 0 .35-.01a.777.777 0 0 1-.02-.16Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 16.5v-9c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66ZM2 19.5v-15M22 19V4",
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
    d: "M13 22.75h-2c-3.3 0-5.29-.66-5.66-4.01-.06-.45-.09-.99-.09-1.74V7c0-.75.03-1.29.1-1.77C5.71 1.91 7.7 1.25 11 1.25h2c3.3 0 5.29.66 5.66 4.01.06.45.09.99.09 1.74v10c0 .75-.03 1.29-.1 1.77-.36 3.32-2.35 3.98-5.65 3.98Zm-2-20c-3.31 0-3.94.67-4.16 2.67-.06.43-.09.9-.09 1.58v10c0 .68.03 1.15.08 1.55.22 2.03.86 2.7 4.17 2.7h2c3.31 0 3.94-.67 4.16-2.67.06-.42.09-.9.09-1.58V7c0-.67-.03-1.15-.08-1.55-.22-2.03-.86-2.7-4.17-2.7h-2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.67 19.418h-.34c-3.09 0-4.08-.99-4.08-4.09v-6.66c0-3.1.99-4.09 4.08-4.09h.34c.17 0 .31 0 .47.01.21.01.4.11.53.28.13.17.19.37.16.58-.05.4-.08.87-.08 1.55v10c0 .68.03 1.15.08 1.55.03.21-.03.42-.16.58-.13.16-.32.26-.53.28-.16.01-.3.01-.47.01Zm-.4-13.34c-2.19.01-2.52.36-2.52 2.59v6.66c0 2.23.33 2.58 2.52 2.59-.01-.27-.02-.57-.02-.92v-10c0-.35.01-.65.02-.92ZM18.67 19.418h-.34c-.17 0-.31 0-.47-.01a.703.703 0 0 1-.53-.28.752.752 0 0 1-.16-.58c.06-.4.08-.88.08-1.55v-10c0-.67-.03-1.15-.08-1.55-.03-.21.03-.42.16-.58.13-.16.32-.26.53-.28.16-.01.3-.01.47-.01h.34c3.09 0 4.08.99 4.08 4.09v6.66c0 3.1-.99 4.09-4.08 4.09Zm.06-13.34c.01.27.02.57.02.92v10c0 .35-.01.65-.02.92 2.19-.01 2.52-.36 2.52-2.59v-6.66c0-2.23-.33-2.58-2.52-2.59Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 16.5v-9c0-.62.02-1.17.09-1.66C5.38 3.21 6.62 2.5 10 2.5h4c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66v9c0 .62-.02 1.17-.09 1.66-.29 2.63-1.53 3.34-4.91 3.34h-4c-3.38 0-4.62-.71-4.91-3.34-.07-.49-.09-1.04-.09-1.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M2 19.5v-15M22 19V4",
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

var SliderHorizontal1 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
SliderHorizontal1.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
SliderHorizontal1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
SliderHorizontal1.displayName = 'SliderHorizontal1';

module.exports = SliderHorizontal1;