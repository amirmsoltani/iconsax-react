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
    d: "M18.328 5.67 6.588 17.41c-.44.44-1.18.38-1.54-.14-1.24-1.81-1.97-3.95-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5.12 5.12 0 0 1 3.92 0l4.05 1.65c.66.27.83 1.13.33 1.63ZM19.27 7.042c.65-.55 1.64-.08 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.03 0a11.3 11.3 0 0 1-3.87-1.95c-.48-.37-.53-1.07-.11-1.5 2.18-2.23 8.56-8.73 11.77-11.44Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.09 6.61c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06V11c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0C6.65 20.47 3.1 15.89 3.1 11",
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
    d: "M18.328 5.67 6.588 17.41c-.44.44-1.18.38-1.54-.14-1.24-1.81-1.97-3.95-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5.12 5.12 0 0 1 3.92 0l4.04 1.65c.67.27.84 1.13.34 1.63Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.27 7.042c.65-.55 1.64-.08 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.03 0a11.3 11.3 0 0 1-3.87-1.95c-.48-.37-.53-1.07-.11-1.5 2.18-2.23 8.56-8.73 11.77-11.44Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39Z",
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
    d: "M12 22.75c-.24 0-.48-.03-.71-.1-5.19-1.43-8.95-6.28-8.95-11.54V6.72c0-1.12.81-2.33 1.85-2.76l5.57-2.28a5.89 5.89 0 0 1 4.48 0l5.57 2.28c1.04.43 1.85 1.64 1.85 2.76v4.39c0 5.25-3.77 10.1-8.95 11.54-.23.07-.47.1-.71.1Zm0-20a4.4 4.4 0 0 0-1.67.33L4.76 5.36c-.48.2-.92.85-.92 1.37v4.39c0 4.59 3.3 8.83 7.85 10.09.2.06.42.06.62 0 4.55-1.26 7.85-5.5 7.85-10.09V6.73c0-.52-.44-1.17-.92-1.37l-5.57-2.28A4.4 4.4 0 0 0 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.91 11.12c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06l-.01 4.39Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.04 2.39c1.25-.51 2.66-.51 3.91 0l5.57 2.28c.76.31 1.39 1.24 1.39 2.06v4.39c0 4.89-3.55 9.47-8.4 10.81-.33.09-.69.09-1.02 0-4.85-1.34-8.4-5.92-8.4-10.81",
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

var Security = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Security.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Security.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Security.displayName = 'Security';

module.exports = Security;