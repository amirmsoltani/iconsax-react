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
    d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35Zm-.4 8.89c-.02.04-.05.08-.08.11l-1.87 2.19c-.15.17-.36.26-.57.26-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.27.51.27 1.11-.02 1.62Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M11.27 12c.77 0 1.25.83.87 1.5L10 16M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5M2 10c0-4 1-5 5-5M7 19c-4 0-5-1-5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5",
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
    d: "M12.93 4.79H7.35C3.25 4.79 2 6.04 2 10.14v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.42 9c-.14-.01-.32-.02-.52-.02-.39 0-.7.31-.7.7v4.65c0 .39.31.7.7.7.2 0 .37-.01.54-.02C22 14.83 22 13.73 22 12.93v-1.86c0-.8 0-1.9-1.58-2.07ZM10.01 16.24c-.17 0-.35-.06-.49-.18A.756.756 0 0 1 9.44 15l1.8-2.11c.01-.03 0-.06-.02-.09-.02-.04-.06-.06-.11-.06H9.12c-.59 0-1.11-.3-1.41-.81-.29-.51-.29-1.11 0-1.62l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19c.03-.04.03 0 .05.05.02.04.06.06.11.06h2.01c.59 0 1.11.3 1.41.81.29.51.29 1.11 0 1.62-.02.04-.05.08-.08.11l-1.87 2.19c-.16.18-.37.26-.59.26Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5",
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
    d: "M20.5 15.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.59 0 .72-.09.73-.09.02-.06.02-.41.02-.66v-2c0-.25 0-.59-.04-.68-.01.01-.16-.07-.71-.07-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.08 0 2.25 1.02 2.25 2.25v2c0 1.23-.17 2.25-2.25 2.25ZM10 16.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l2.08-2.43c.03-.09 0-.17-.02-.21a.238.238 0 0 0-.22-.12h-2.3c-.63 0-1.2-.33-1.52-.87-.32-.54-.32-1.2 0-1.75L9.4 7.55a.75.75 0 0 1 1.2.9l-1.89 2.5c-.01.03.03.12.05.17.03.05.09.12.22.12h2.3c.63 0 1.2.33 1.52.87.32.54.32 1.2 0 1.75-.02.04-.05.08-.08.11l-2.14 2.5c-.16.19-.37.28-.58.28Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7 19.75c-4.41 0-5.75-1.34-5.75-5.75v-4c0-4.41 1.34-5.75 5.75-5.75.41 0 .75.34.75.75s-.34.75-.75.75c-3.57 0-4.25.68-4.25 4.25v4c0 3.57.68 4.25 4.25 4.25.41 0 .75.34.75.75s-.34.75-.75.75ZM13 19.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.57 0 4.25-.68 4.25-4.25v-4c0-3.57-.68-4.25-4.25-4.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.41 0 5.75 1.34 5.75 5.75v4c0 4.41-1.34 5.75-5.75 5.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".34",
    d: "M20.5 9.5C22 9.5 22 10 22 11v2c0 1 0 1.5-1.5 1.5M10 8l-1.89 2.5c-.39.67.09 1.5.86 1.5h2.3c.77 0 1.25.83.87 1.5L10 16",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5M13 5c4 0 5 1 5 5v4c0 4-1 5-5 5",
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

var BatteryCharging = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BatteryCharging.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
BatteryCharging.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BatteryCharging.displayName = 'BatteryCharging';

module.exports = BatteryCharging;