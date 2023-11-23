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
    d: "M15.908 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09ZM5.09 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.77 0-3.1 1.33-3.1 3.09v3c0 1.76 1.33 3.09 3.09 3.09Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.63 5.86c0-1.42 1.05-2.58 2.58-2.58h3.21c1.42 0 2.58 1.16 2.58 2.58v5.8",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11.648h-5.8c-.96 0-1.72-.45-2.16-1.14M22 11.649c0 6.05-1.13 7.05-4.53 9.07M10.369 11.648h-5.8c-1.53 0-2.58-1.16-2.58-2.58v-3.22c0-1.42 1.05-2.58 2.58-2.58h3.23c1.42 0 2.58 1.16 2.58 2.58v5.8M10.367 11.649c0 6.05-1.13 7.05-4.53 9.07",
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
    d: "M15.908 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5.092 12.371h4.69c-.08 4.67-1 5.44-3.87 7.14-.33.2-.44.62-.24.96.2.33.62.44.96.24 3.38-2 4.56-3.22 4.56-9.04v-5.39c0-1.71-1.39-3.09-3.09-3.09h-3c-1.76 0-3.09 1.33-3.09 3.09v3c-.01 1.76 1.32 3.09 3.08 3.09Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07",
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
    d: "M22.001 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33h3.22c1.83 0 3.33 1.49 3.33 3.33v5.8c0 .42-.34.75-.75.75Zm-5.8-8.37c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83h-3.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.469 21.468c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 0 1-.38.11ZM10.372 12.4h-5.8c-1.9 0-3.33-1.43-3.33-3.33V5.85c0-1.9 1.43-3.33 3.33-3.33h3.23c1.83 0 3.33 1.49 3.33 3.33v5.8c-.01.42-.34.75-.76.75Zm-5.79-8.37c-1.06 0-1.83.77-1.83 1.83v3.22c0 1.06.77 1.83 1.83 1.83h5.05V5.86c0-1.01-.82-1.83-1.83-1.83h-3.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.84 21.468c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c3.23-1.92 4.17-2.72 4.17-8.42 0-.41.34-.75.75-.75s.75.34.75.75c0 6.25-1.27 7.56-4.9 9.71a.67.67 0 0 1-.38.11Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22.001 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22.003 11.648c0 6.05-1.13 7.05-4.53 9.07",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.372 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.23c1.42 0 2.58 1.16 2.58 2.58v5.8"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.374 11.648c0 6.05-1.13 7.05-4.53 9.07"
  })));
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

var QuoteDown = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
QuoteDown.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
QuoteDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
QuoteDown.displayName = 'QuoteDown';

module.exports = QuoteDown;
