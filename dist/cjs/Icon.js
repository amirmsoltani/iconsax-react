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
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5zM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 014.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 00-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11zM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 01-.25-1.03.76.76 0 011.03-.25A6.252 6.252 0 0018.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 01.25-1.03.75.75 0 011.03.25 7.789 7.789 0 011.14 4.05c0 4.26-3.48 7.74-7.75 7.74z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.2 3.8h.1M3.7 20.2h.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.6 6a6.995 6.995 0 0 0-9.57 9.65M17.97 8.352a6.963 6.963 0 0 1 1.03 3.65c0 1.24-.32 2.4-.89 3.41M8.34 17.969a7.025 7.025 0 0 0 6.61.38",
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
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.2 3.8h.1M3.7 20.2h.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.6 6c-1.1-.6-2.3-1-3.6-1-3.9 0-7 3.1-7 7 0 1.3.4 2.6 1 3.7M8.3 18c1.1.7 2.3 1 3.7 1 3.9 0 7-3.1 7-7 0-1.3-.4-2.6-1-3.7",
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
    d: "M20.26 5.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM3.76 21.75c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h.01c.83 0 1.5.67 1.5 1.5s-.68 1.5-1.51 1.5ZM6.03 16.4c-.25 0-.5-.13-.64-.36A7.754 7.754 0 0 1 4.25 12c0-4.27 3.48-7.75 7.75-7.75 1.41 0 2.79.38 3.99 1.1.35.21.47.67.26 1.03-.21.35-.67.47-1.03.26a6.26 6.26 0 0 0-3.21-.89c-3.45 0-6.25 2.8-6.25 6.25 0 1.15.32 2.28.92 3.26.22.35.11.81-.25 1.03-.13.08-.27.11-.4.11ZM12 19.75c-1.44 0-2.84-.4-4.05-1.14a.76.76 0 0 1-.25-1.03.76.76 0 0 1 1.03-.25A6.252 6.252 0 0 0 18.25 12c0-1.15-.32-2.28-.92-3.26a.742.742 0 0 1 .25-1.03.75.75 0 0 1 1.03.25 7.789 7.789 0 0 1 1.14 4.05c0 4.26-3.48 7.74-7.75 7.74Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.6 6a6.995 6.995 0 0 0-9.57 9.65M8.34 17.972c1.07.65 2.32 1.03 3.66 1.03a6.995 6.995 0 0 0 5.97-10.65",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.2 3.8h.1M3.7 20.2h.1",
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

var Icon = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Icon.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Icon.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Icon.displayName = 'Icon';

module.exports = Icon;
