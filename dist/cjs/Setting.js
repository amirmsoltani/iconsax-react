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
    d: "m18.94 5.421-5.17-2.99c-.99-.57-2.54-.57-3.53 0l-5.22 3.01c-2.07 1.4-2.19 1.61-2.19 3.84v5.43c0 2.23.12 2.45 2.23 3.87l5.17 2.99c.5.29 1.14.43 1.77.43.63 0 1.27-.14 1.76-.43l5.22-3.01c2.07-1.4 2.19-1.61 2.19-3.84v-5.44c0-2.23-.12-2.44-2.23-3.86ZM12 15.251c-1.79 0-3.25-1.46-3.25-3.25s1.46-3.25 3.25-3.25 3.25 1.46 3.25 3.25-1.46 3.25-3.25 3.25Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3 13.08v1.8C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3a2.996 2.996 0 0 0 4.17 2.76",
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
    d: "m18.94 5.421-5.17-2.99c-.99-.57-2.54-.57-3.53 0l-5.22 3.01c-2.07 1.4-2.19 1.61-2.19 3.84v5.43c0 2.23.12 2.45 2.23 3.87l5.17 2.99c.5.29 1.14.43 1.77.43.63 0 1.27-.14 1.76-.43l5.22-3.01c2.07-1.4 2.19-1.61 2.19-3.84v-5.44c0-2.23-.12-2.44-2.23-3.86Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 15.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M12 22.63c-.67 0-1.35-.15-1.88-.46L4.62 19c-2.24-1.51-2.38-1.74-2.38-4.11V9.11c0-2.37.13-2.6 2.33-4.09l5.54-3.2c1.05-.61 2.7-.61 3.75 0L19.38 5c2.24 1.51 2.38 1.74 2.38 4.11v5.77c0 2.37-.13 2.6-2.33 4.09l-5.54 3.2c-.54.31-1.22.46-1.89.46Zm0-19.76c-.42 0-.83.08-1.12.25L5.38 6.3C3.75 7.4 3.75 7.4 3.75 9.11v5.77c0 1.71 0 1.71 1.67 2.84l5.46 3.15c.59.34 1.66.34 2.25 0l5.5-3.18c1.62-1.1 1.62-1.1 1.62-2.81V9.11c0-1.71 0-1.71-1.67-2.84l-5.46-3.15c-.29-.17-.7-.25-1.12-.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 15.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3 9.11v5.77C3 17 3 17 5 18.35l5.5 3.18c.83.48 2.18.48 3 0l5.5-3.18c2-1.35 2-1.35 2-3.46V9.11C21 7 21 7 19 5.65l-5.5-3.18c-.82-.48-2.17-.48-3 0L5 5.65C3 7 3 7 3 9.11Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".34",
    d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    stroke: color,
    strokeWidth: strokeWidth,
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

var Setting = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Setting.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Setting.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Setting.displayName = 'Setting';

module.exports = Setting;
