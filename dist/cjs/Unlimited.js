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
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16c-.72-.97-1.82-1.54-3.02-1.54-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.39 5.28-5.31 5.28Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 15.77c-.73.49-1.6.78-2.54.78-1.5 0-2.81-.74-3.64-1.87M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12",
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
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16c-.73-.99-1.83-1.56-3.03-1.56-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.38 5.3-5.3 5.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87",
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
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.76.76 0 0 1-1.05-.16c-.73-.99-1.83-1.56-3.03-1.56-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.38 5.3-5.3 5.3Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87",
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

var Unlimited = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Unlimited.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Unlimited.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Unlimited.displayName = 'Unlimited';

module.exports = Unlimited;