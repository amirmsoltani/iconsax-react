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
    d: "M9 2C6.38 2 4.25 4.13 4.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C13.75 4.13 11.62 2 9 2ZM14.08 14.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21ZM19.99 7.338c.16 1.94-1.22 3.64-3.13 3.87h-.05c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8a4.64 4.64 0 0 0-.77-2.18 3.592 3.592 0 0 1 5.15 2.92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.988 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.679 3.96c.48.71.76 1.56.76 2.48-.01 2.4-1.9 4.35-4.28 4.43-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43c0-2.45 1.98-4.44 4.44-4.44M16.411 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.159 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86",
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
    d: "M9 2C6.38 2 4.25 4.13 4.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C13.75 4.13 11.62 2 9 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.08 14.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M19.99 7.338c.16 1.94-1.22 3.64-3.13 3.87h-.05c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8a4.64 4.64 0 0 0-.77-2.18 3.592 3.592 0 0 1 5.15 2.92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.988 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86",
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
    d: "M9.159 11.62h-.08a.543.543 0 0 0-.18 0c-2.9-.09-5.09-2.37-5.09-5.18 0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03Zm-.16-8.87a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.06-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68a3.7 3.7 0 0 0-3.69-3.69ZM16.538 11.75c-.03 0-.06 0-.09-.01-.41.04-.83-.25-.87-.66-.04-.41.21-.78.62-.83.12-.01.25-.01.36-.01 1.46-.08 2.6-1.28 2.6-2.75 0-1.52-1.23-2.75-2.75-2.75a.74.74 0 0 1-.75-.74c0-.41.34-.75.75-.75a4.26 4.26 0 0 1 4.25 4.25c0 2.3-1.8 4.16-4.09 4.25h-.03ZM9.172 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0ZM18.338 20.75c-.35 0-.66-.24-.73-.6a.76.76 0 0 1 .58-.89c.63-.13 1.21-.38 1.66-.73.57-.43.88-.97.88-1.54 0-.57-.31-1.11-.87-1.53-.44-.34-.99-.58-1.64-.73a.756.756 0 0 1-.57-.9c.09-.4.49-.66.9-.57.86.19 1.61.53 2.22 1 .93.7 1.46 1.69 1.46 2.73s-.54 2.03-1.47 2.74c-.62.48-1.4.83-2.26 1-.06.02-.11.02-.16.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.159 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43c0-2.45 1.98-4.44 4.44-4.44a4.435 4.435 0 0 1 .16 8.87Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M16.411 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.159 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86",
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

var Profile2User = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Profile2User.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Profile2User.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Profile2User.displayName = 'Profile2User';

module.exports = Profile2User;