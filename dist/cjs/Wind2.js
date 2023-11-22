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
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM7 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.25-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.89.53-1.89.8-2.89.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.5 11.6c1.54.92 3.46.92 5 0s3.46-.92 5 0l2.5 1.5M2 13.1l2.5-1.5c.46-.28.96-.47 1.47-.58M2 3.898l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
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
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color,
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5M2 3.9l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0L22 3.9M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
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
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.35.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m2 3.898 2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
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

var Wind2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Wind2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Wind2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Wind2.displayName = 'Wind2';

module.exports = Wind2;
