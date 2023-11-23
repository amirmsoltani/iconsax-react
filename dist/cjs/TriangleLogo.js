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
    d: "M10.05 2.848l-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35v-2.59a.47.47 0 00-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.51.51 0 00.15-.35v-2.59a.5.5 0 00-.85-.35zM13.75 2.848l8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 01-.85-.35v-2.59c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.51.51 0 01-.15-.35v-2.59a.5.5 0 01.85-.35z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M10.05 9.848l-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35v-3.59a.5.5 0 00-.85-.35z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM18.96 8.06 22.9 12l-10 10v-4l6-6-6-6V2l3.04 3.04",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10.9 9-3 3 3 3V9Z",
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
    d: "m10.05 2.848-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35v-2.59a.47.47 0 0 0-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.51.51 0 0 0 .15-.35v-2.59a.5.5 0 0 0-.85-.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m13.75 2.848 8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35v-2.59c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.51.51 0 0 1-.15-.35v-2.59a.5.5 0 0 1 .85-.35ZM10.05 9.848l-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35v-3.59a.5.5 0 0 0-.85-.35Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM12.9 2l10 10-10 10v-4l6-6-6-6V2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10.9 9-3 3 3 3V9Z",
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
    d: "M10.9 22.748a.75.75 0 0 1-.53-.22l-10-10a.754.754 0 0 1 0-1.06l10-10a.751.751 0 0 1 1.28.53v4c0 .2-.08.39-.22.53l-5.47 5.47 5.47 5.47c.14.14.22.33.22.53v4c0 .3-.18.58-.46.69-.1.04-.19.06-.29.06Zm-8.94-10.75 8.19 8.19v-1.88l-5.78-5.78a.754.754 0 0 1 0-1.06l5.78-5.78v-1.88l-8.19 8.19ZM12.9 22.748a.753.753 0 0 1-.75-.75v-4c0-.2.08-.39.22-.53l5.47-5.47-5.47-5.47a.75.75 0 0 1-.22-.53v-4c0-.3.18-.58.46-.69.28-.12.6-.05.82.16l10 10c.29.29.29.77 0 1.06l-10 10a.75.75 0 0 1-.53.22Zm.75-4.44v1.88l8.19-8.19-8.19-8.19v1.88l5.78 5.78c.29.29.29.77 0 1.06l-5.78 5.78Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.9 15.748a.75.75 0 0 1-.53-.22l-3-3a.754.754 0 0 1 0-1.06l3-3a.751.751 0 0 1 1.28.53v6c0 .3-.18.58-.46.69-.1.04-.19.06-.29.06Zm-1.94-3.75 1.19 1.19v-2.38l-1.19 1.19Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.9 2 .9 12l10 10v-4l-6-6 6-6V2ZM12.9 2l10 10-10 10v-4l6-6-6-6V2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m10.9 9-3 3 3 3V9Z",
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

var TriangleLogo = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
TriangleLogo.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
TriangleLogo.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
TriangleLogo.displayName = 'TriangleLogo';

module.exports = TriangleLogo;