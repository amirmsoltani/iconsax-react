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
    d: "M9 22h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3ZM4.5 5.93v12.14a.5.5 0 0 1-.6.49C2.42 18.29 2 17.43 2 15.33V8.67c0-2.1.42-2.96 1.9-3.23a.5.5 0 0 1 .6.49ZM22 8.67v6.66c0 2.1-.42 2.96-1.9 3.23-.31.06-.6-.18-.6-.49V5.93a.5.5 0 0 1 .6-.49c1.48.27 1.9 1.13 1.9 3.23Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7v10c0 .62-.02 1.17-.09 1.66C17.62 21.29 16.38 22 13 22h-2c-3.38 0-4.62-.71-4.91-3.34C6.02 18.17 6 17.62 6 17V7c0-.62.02-1.17.09-1.66C6.38 2.71 7.62 2 11 2h2c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 8.668c0-2.67.67-3.34 3.33-3.34h.34c.15 0 .28 0 .42.01-.07.49-.09 1.04-.09 1.66v10c0 .62.02 1.17.09 1.66-.14.01-.27.01-.42.01h-.34c-2.66 0-3.33-.67-3.33-3.34v-2.2M22 8.668v6.66c0 2.67-.67 3.34-3.33 3.34h-.34c-.15 0-.28 0-.42-.01.07-.49.09-1.04.09-1.66v-10c0-.62-.02-1.17-.09-1.66.14-.01.27-.01.42-.01h.34c2.66 0 3.33.67 3.33 3.34Z",
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
    d: "M3.5 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75ZM22 5.059v13.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.059c0-.41.34-.75.75-.75s.75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M7.6 21.25h8.8c1.66 0 3-1.34 3-3V5.75c0-1.66-1.34-3-3-3H7.6c-1.66 0-3 1.34-3 3v12.5c0 1.66 1.34 3 3 3Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7v10c0 .62-.02 1.17-.09 1.66C17.62 21.29 16.38 22 13 22h-2c-3.38 0-4.62-.71-4.91-3.34C6.02 18.17 6 17.62 6 17V7c0-.62.02-1.17.09-1.66C6.38 2.71 7.62 2 11 2h2c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6 17c0 .62.02 1.17.09 1.66-.14.01-.27.01-.42.01h-.34C2.67 18.67 2 18 2 15.33V8.67C2 6 2.67 5.33 5.33 5.33h.34c.15 0 .28 0 .42.01C6.02 5.83 6 6.38 6 7v10ZM22 8.67v6.66c0 2.67-.67 3.34-3.33 3.34h-.34c-.15 0-.28 0-.42-.01.07-.49.09-1.04.09-1.66V7c0-.62-.02-1.17-.09-1.66.14-.01.27-.01.42-.01h.34C21.33 5.33 22 6 22 8.67Z",
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
    d: "M14 22.25h-4c-3.3 0-5.29-.66-5.66-4.01-.06-.45-.09-.99-.09-1.74v-9c0-.75.03-1.3.1-1.77C4.71 2.41 6.7 1.75 10 1.75h4c3.3 0 5.29.66 5.66 4.01.06.45.09.99.09 1.74v9c0 .75-.03 1.3-.1 1.77-.36 3.32-2.35 3.98-5.65 3.98Zm-4-19c-3.31 0-3.94.67-4.17 2.67-.05.42-.08.9-.08 1.58v9c0 .68.03 1.16.08 1.55.22 2.03.86 2.7 4.17 2.7h4c3.31 0 3.94-.67 4.17-2.67.06-.42.08-.9.08-1.58v-9c0-.68-.03-1.16-.08-1.55-.22-2.03-.86-2.7-4.17-2.7h-4ZM2 20.25c-.41 0-.75-.34-.75-.75v-15c0-.41.34-.75.75-.75s.75.34.75.75v15c0 .41-.34.75-.75.75ZM22 19.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v15c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7v10c0 .62-.02 1.17-.09 1.66C17.62 21.29 16.38 22 13 22h-2c-3.38 0-4.62-.71-4.91-3.34C6.02 18.17 6 17.62 6 17V7c0-.62.02-1.17.09-1.66C6.38 2.71 7.62 2 11 2h2c3.38 0 4.62.71 4.91 3.34.07.49.09 1.04.09 1.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M6 16.998c0 .62.02 1.17.09 1.66-.14.01-.27.01-.42.01h-.34c-2.66 0-3.33-.67-3.33-3.34v-6.66c0-2.67.67-3.34 3.33-3.34h.34c.15 0 .28 0 .42.01-.07.49-.09 1.04-.09 1.66v10ZM22 8.668v6.66c0 2.67-.67 3.34-3.33 3.34h-.34c-.15 0-.28 0-.42-.01.07-.49.09-1.04.09-1.66v-10c0-.62-.02-1.17-.09-1.66.14-.01.27-.01.42-.01h.34c2.66 0 3.33.67 3.33 3.34Z",
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

var SliderHorizontal = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
SliderHorizontal.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
SliderHorizontal.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
SliderHorizontal.displayName = 'SliderHorizontal';

module.exports = SliderHorizontal;