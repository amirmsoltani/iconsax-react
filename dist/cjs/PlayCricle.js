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
    d: "M19.072 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.299 3.34c-.08 0-.17-.01-.25-.04a9.04 9.04 0 0 0-3.05-.51c-1.07 0-2.09.18-3.05.51-.4.13-.82-.07-.96-.46s.07-.82.46-.96c1.12-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59a.75.75 0 0 1-.25 1.46ZM8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14M4.929 4.93c-3.91 3.91-3.91 10.24 0 14.14M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55M8.7 2.59c1.07-.37 2.18-.55 3.3-.55 1.12 0 2.23.18 3.3.55",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.738 10.33c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89",
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
    d: "M19.072 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.3 3.34c-.08 0-.17-.01-.25-.04a9.399 9.399 0 0 0-6.109 0 .763.763 0 0 1-.96-.46c-.14-.39.07-.82.46-.96 1.11-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59.39.14.6.57.46.96-.1.31-.39.5-.7.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14M4.93 4.93c-3.91 3.91-3.91 10.24 0 14.14M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55M8.7 2.59c1.07-.37 2.18-.55 3.3-.55 1.12 0 2.23.18 3.3.55",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.74 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z",
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
    d: "M19.068 19.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06c3.61-3.61 3.61-9.48 0-13.08a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 4.19 4.19 4.19 11.01 0 15.2-.15.15-.34.22-.53.22ZM4.93 19.821c-.19 0-.38-.07-.53-.22-4.19-4.19-4.19-11.01 0-15.2.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06-3.61 3.61-3.61 9.48 0 13.08.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM11.999 22.712c-1.25-.01-2.44-.21-3.55-.6a.754.754 0 0 1-.46-.96c.14-.39.56-.6.96-.46.96.33 1.98.51 3.06.51 1.07 0 2.1-.18 3.05-.51.39-.13.82.07.96.46s-.07.82-.46.96c-1.12.39-2.31.6-3.56.6ZM15.3 3.34c-.08 0-.17-.01-.25-.04a9.399 9.399 0 0 0-6.109 0 .763.763 0 0 1-.96-.46c-.14-.39.07-.82.46-.96 1.11-.39 2.31-.59 3.55-.59 1.24 0 2.44.2 3.55.59.39.14.6.57.46.96-.1.31-.39.5-.7.5ZM10.562 16.761c-.44 0-.86-.11-1.23-.32-.86-.5-1.34-1.48-1.34-2.76v-3.35c0-1.28.47-2.26 1.34-2.76.86-.5 1.95-.42 3.06.22l2.9 1.67c1.11.64 1.72 1.54 1.72 2.54s-.61 1.9-1.72 2.54l-2.9 1.67c-.63.37-1.26.55-1.83.55Zm0-8.02c-.18 0-.35.04-.48.12-.37.22-.59.75-.59 1.46v3.35c0 .71.21 1.25.59 1.46.37.21.94.13 1.56-.22l2.9-1.67c.62-.36.97-.81.97-1.24 0-.43-.35-.88-.97-1.24l-2.9-1.67c-.4-.23-.77-.35-1.08-.35Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.07 19.07c3.91-3.91 3.91-10.24 0-14.14M4.929 4.93c-3.91 3.91-3.91 10.24 0 14.14M8.7 21.41c1.07.37 2.18.55 3.3.55 1.12-.01 2.23-.18 3.3-.55M8.7 2.59c1.07-.37 2.18-.55 3.3-.55 1.12 0 2.23.18 3.3.55",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8.738 12v-1.67c0-2.08 1.47-2.93 3.27-1.89l1.45.84 1.45.84c1.8 1.04 1.8 2.74 0 3.78l-1.45.84-1.45.84c-1.8 1.04-3.27.19-3.27-1.89V12Z",
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

var PlayCricle = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
PlayCricle.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
PlayCricle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
PlayCricle.displayName = 'PlayCricle';

module.exports = PlayCricle;