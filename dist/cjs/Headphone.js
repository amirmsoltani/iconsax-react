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
    d: "M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 12.22C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57V16",
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
    d: "M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
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
    d: "M5.57 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.2 9.3 2.28 6.55 4.3 4.49a10.65 10.65 0 0 1 7.65-3.19c5.96 0 10.8 4.85 10.8 10.8v6.16c0 2.38-1.94 4.32-4.32 4.32-2.34 0-4.32-1.98-4.32-4.32v-2.81c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v3.03c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.03c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82V12.1c0-5.13-4.17-9.3-9.3-9.3-2.51 0-4.84.97-6.58 2.74C3.63 7.31 2.7 9.68 2.75 12.2v6.18c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.92c0-1.45 1.14-2.59 2.59-2.59s2.59 1.14 2.59 2.59v2.81c0 2.34-1.98 4.32-4.32 4.32Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
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

var Headphone = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Headphone.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Headphone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Headphone.displayName = 'Headphone';

module.exports = Headphone;