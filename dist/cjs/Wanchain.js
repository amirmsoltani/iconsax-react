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
    d: "M11.75 9.43L8.5 15l-.63 1.09-2.47 4.22c-.18.32-.64.33-.84.02l-3.38-5.05a.516.516 0 010-.56l3.67-5.5c.09-.14.25-.22.42-.22h6.23l.25.43z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M22.84 14.73l-6.7-11.48a.473.473 0 00-.43-.25H8.87c-.39 0-.63.42-.43.75L11.5 9l.25.43 2.81 4.82c.2.33-.04.75-.43.75H8.5l-.63 1.09c.18-.32.64-.33.84-.02l3.14 4.71c.09.14.25.22.42.22h6.46c.17 0 .33-.08.42-.22l3.68-5.52c.1-.16.11-.36.01-.53z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.77 4.32-.63-1.07a.504.504 0 0 0-.43-.25H8.87c-.39 0-.63.42-.43.75L11.5 9H5.27c-.17 0-.32.08-.42.22l-3.67 5.5a.5.5 0 0 0 0 .55l3.37 5.06a.5.5 0 0 0 .85-.03l2.46-4.22c.19-.32.64-.33.85-.03l3.14 4.71c.09.14.25.22.42.22h6.46c.17 0 .32-.08.42-.22l3.68-5.52c.11-.16.11-.36.02-.53l-3.58-6.14-2.5-4.25ZM8.5 15l3.25-5.57 2.81 4.82c.19.33-.05.75-.43.75H8.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 9.159v3.83c0 .78-.85 1.26-1.51.86l-2.47-1.48c-.32-.19-.71-.19-1.03 0l-2.47 1.48a.996.996 0 0 1-1.51-.86v-3.83c0-.34.18-.66.46-.84l3.5-2.22c.33-.21.74-.21 1.07 0l3.5 2.22c.28.18.46.5.46.84ZM12 18.058c-.15 0-.29-.04-.42-.13l-2.25-1.5a.755.755 0 0 1-.21-1.04c.23-.35.7-.44 1.04-.21l1.83 1.22 1.83-1.22c.34-.23.81-.14 1.04.21.23.34.14.81-.21 1.04l-2.25 1.5a.62.62 0 0 1-.4.13Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 8.9 12 6.2 7.5 8.9M7.5 9v6.1l4.5-2.7 4.5 2.7V9M14.2 16.2 12 17.7l-2.2-1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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
    d: "M16.5 9.6c-.13 0-.26-.03-.39-.11L12 7.02 7.89 9.49a.751.751 0 1 1-.77-1.29l4.5-2.7c.24-.14.53-.14.77 0l4.5 2.7c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 15.9c-.13 0-.27-.04-.39-.11L12 13.32l-4.11 2.47c-.23.14-.52.14-.76.01a.752.752 0 0 1-.38-.65V9c0-.41.34-.75.75-.75s.75.34.75.75v4.83l3.36-2.02c.24-.14.53-.14.77 0l3.36 2.02V9c0-.41.34-.75.75-.75s.75.34.75.75v6.15c0 .27-.15.52-.38.65-.11.07-.23.1-.36.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 18.448c-.15 0-.29-.04-.42-.13l-2.25-1.5a.755.755 0 0 1-.21-1.04c.23-.35.7-.44 1.04-.21l1.83 1.22 1.83-1.22c.34-.23.81-.14 1.04.21.23.34.14.81-.21 1.04l-2.25 1.5a.62.62 0 0 1-.4.13Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.5 8.848-4.5-2.7-4.5 2.7M7.5 9v6.15l4.5-2.7 4.5 2.7V9"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.25 16.2 12 17.7l-2.25-1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var Wanchain = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Wanchain.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Wanchain.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Wanchain.displayName = 'Wanchain';

module.exports = Wanchain;