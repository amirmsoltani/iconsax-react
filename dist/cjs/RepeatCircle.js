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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.19 13.94c-.04.09-.09.17-.16.24l-1.69 1.69c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l.41-.41H9.1c-1.3 0-2.35-1.06-2.35-2.35v-1.77c0-.41.34-.75.75-.75s.75.34.75.75v1.77c0 .47.38.85.85.85h5.59l-.41-.41a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.69 1.69c.07.07.12.15.16.24.08.19.08.4 0 .58zm.06-4.22c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.95a.85.85 0 00-.85-.85H9.31l.41.4c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22L6.97 8.87a.776.776 0 01-.16-.24.707.707 0 010-.57c.04-.09.09-.18.16-.25l1.69-1.69c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.41.41h5.59c1.3 0 2.35 1.06 2.35 2.35v1.78z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M14.81 17.34l1.69-1.68-1.69-1.69"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M14.9 7.59H9.31l.41-.41c.29-.29.29-.77 0-1.06a.754.754 0 00-1.06 0L6.97 7.81c-.07.07-.12.15-.16.24-.08.18-.08.39 0 .57.04.09.09.17.16.24l1.69 1.69c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.41-.41h5.59c.47 0 .85.38.85.85v1.77c0 .41.34.75.75.75s.75-.34.75-.75V9.93c0-1.28-1.06-2.34-2.35-2.34zM17.19 15.37a.776.776 0 00-.16-.24l-1.69-1.69a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l.41.41H9.1a.85.85 0 01-.85-.85v-1.77c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.77c0 1.3 1.06 2.35 2.35 2.35h5.59l-.41.41c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.69-1.69c.07-.07.12-.15.16-.24a.73.73 0 000-.58z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M14.81 17.34l1.69-1.68-1.69-1.69"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M16.5 12.47c-.41 0-.75-.34-.75-.75V9.95a.85.85 0 00-.85-.85H7.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.4c1.3 0 2.35 1.06 2.35 2.35v1.77c0 .41-.34.75-.75.75z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M9.19 10.78c-.19 0-.38-.07-.53-.22L6.97 8.87a.754.754 0 010-1.06l1.69-1.69c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.56 8.34 9.72 9.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22zM16.5 16.41H9.1c-1.3 0-2.35-1.06-2.35-2.35v-1.77c0-.41.34-.75.75-.75s.75.34.75.75v1.77c0 .47.38.85.85.85h7.4c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M14.81 18.09c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l1.16-1.16-1.16-1.16a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l1.69 1.69c.29.29.29.77 0 1.06l-1.69 1.69c-.14.15-.34.22-.53.22z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M7.5 8.34h7.4c.89 0 1.6.72 1.6 1.6v1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M9.19 6.66L7.5 8.34l1.69 1.69M16.5 15.66H9.1c-.89 0-1.6-.72-1.6-1.6v-1.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M14.81 17.34l1.69-1.68-1.69-1.69"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
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

var RepeatCircle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
RepeatCircle.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
RepeatCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RepeatCircle.displayName = 'RepeatCircle';

module.exports = RepeatCircle;
