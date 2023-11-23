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
    d: "M5.65 7.65l-2.8-2.8A.5.5 0 013.2 4h3.59c.13 0 .26.05.35.15l5 5a.5.5 0 01-.35.85H8.5C6.57 10 5 11.57 5 13.5S6.57 17 8.5 17H10l2.15 2.15a.5.5 0 01-.35.85H8.51A6.5 6.5 0 015.48 7.75l.17-.1z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M18.35 16.35l2.8 2.8a.5.5 0 01-.35.85h-3.59a.47.47 0 01-.35-.15l-5-5a.5.5 0 01.35-.85h3.29c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-2.15-2.15A.5.5 0 0112.2 4h3.29a6.5 6.5 0 013.03 12.25l-.17.1z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.82 8.99c.48-.5 1.03-.92 1.65-1.24l.19-.1L2 4h5l6 6H8.5C6.57 10 5 11.57 5 13.5S6.57 17 8.5 17H10l3 3H8.5A6.5 6.5 0 0 1 2 13.5c0-.33.02-.65.07-.96",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.35 16.35 22 20h-5l-6-6h4.5c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25l-.18.1Z",
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
    d: "m5.65 7.65-2.8-2.8A.5.5 0 0 1 3.21 4H6.8c.13 0 .26.05.35.15l5 5a.5.5 0 0 1-.35.85H8.51c-1.93 0-3.5 1.57-3.5 3.5S6.58 17 8.51 17h1.5l2.15 2.15a.5.5 0 0 1-.35.85H8.52A6.5 6.5 0 0 1 5.49 7.75l.16-.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m18.35 16.35 2.8 2.8a.5.5 0 0 1-.35.85h-3.59a.47.47 0 0 1-.35-.15l-5-5a.5.5 0 0 1 .35-.85h3.29c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-2.15-2.15a.5.5 0 0 1 .36-.85h3.29a6.5 6.5 0 0 1 3.03 12.25l-.18.1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.7 7.7 2 4h5l6 6H8.5C6.6 10 5 11.6 5 13.5S6.6 17 8.5 17H10l3 3H8.5C4.9 20 2 17.1 2 13.5 2 11 3.4 8.8 5.5 7.7h.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.3 16.3 22 20h-5l-6-6h4.5c1.9 0 3.5-1.6 3.5-3.5S17.4 7 15.5 7H14l-3-3h4.5c3.6 0 6.5 2.9 6.5 6.5 0 2.5-1.4 4.7-3.5 5.8h-.2Z",
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
    d: "M13 20.75H8.5c-4 0-7.25-3.25-7.25-7.25 0-2.43 1.2-4.66 3.19-6L1.47 4.53A.751.751 0 0 1 2 3.25h5c.2 0 .39.08.53.22l6 6a.751.751 0 0 1-.53 1.28H8.5c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75H10c.2 0 .39.08.53.22l3 3a.751.751 0 0 1-.53 1.28Zm-9.19-16 2.37 2.37c.17.17.25.41.21.65a.76.76 0 0 1-.4.55l-.19.1a5.733 5.733 0 0 0-3.06 5.08c0 3.17 2.58 5.75 5.75 5.75h2.69l-1.5-1.5H8.49a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25h2.69l-4.5-4.5H3.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 20.75h-5a.75.75 0 0 1-.53-.22l-6-6a.751.751 0 0 1 .53-1.28h4.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75H14a.75.75 0 0 1-.53-.22l-3-3A.751.751 0 0 1 11 3.25h4.5c4 0 7.25 3.25 7.25 7.25 0 2.43-1.2 4.66-3.19 6l2.97 2.97a.751.751 0 0 1-.53 1.28Zm-4.69-1.5h2.88l-2.37-2.37a.744.744 0 0 1-.21-.65.76.76 0 0 1 .4-.55l.19-.1a5.733 5.733 0 0 0 3.06-5.08c0-3.17-2.58-5.75-5.75-5.75h-2.69l1.5 1.5h1.19a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25h-2.69l4.49 4.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.65 7.65 2 4h5l6 6H8.5C6.57 10 5 11.57 5 13.5S6.57 17 8.5 17H10l3 3H8.5A6.5 6.5 0 0 1 5.47 7.75l.18-.1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.35 16.35 22 20h-5l-6-6h4.5c1.93 0 3.5-1.57 3.5-3.5S17.43 7 15.5 7H14l-3-3h4.5a6.5 6.5 0 0 1 3.03 12.25l-.18.1Z",
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

var Decred = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Decred.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Decred.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Decred.displayName = 'Decred';

module.exports = Decred;