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
    d: "M20.17 17.57c-.53.49-1.14.86-1.8 1.11-.66.25-1.37-.23-1.37-.94v-1.32a3.53 3.53 0 0 0-3.53-3.53h-2.94A3.53 3.53 0 0 0 7 16.42V18c0 .55-.45 1-1 1h-.45C3.1 18.63 2 16.64 2 14.86c0-1.68.98-3.54 3.11-4.06-.59-2.33-.09-4.52 1.43-6.11 1.73-1.81 4.49-2.53 6.87-1.79 2.19.67 3.73 2.47 4.28 4.97 1.91.43 3.44 1.87 4.05 3.87.66 2.17.06 4.4-1.57 5.83Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.5 4.55c.25.25.25.66 0 .91a.667.667 0 0 1-.91 0L12 18.79l-1.05 1.06a.667.667 0 0 1-.91 0 .646.646 0 0 1 0-.91l1.06-1.06-1.06-1.05a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0L12 16.98l1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91l-1.06 1.05 1.06 1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m12.389 18.59-2.83 2.82M12.389 21.41l-2.83-2.82M11.998 3.98c-3.99-.34-8.34 3.11-6.38 8.58M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-.24-1.45-.77-2.59-1.48-3.45M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.82 9.89c.52-.26 1.08-.4 1.66-.41",
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
    d: "M13.47 14.39h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.5 4.55c.25.25.25.66 0 .91a.667.667 0 0 1-.91 0L12 18.79l-1.05 1.06a.667.667 0 0 1-.91 0 .646.646 0 0 1 0-.91l1.06-1.06-1.06-1.05a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0L12 16.98l1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91l-1.06 1.05 1.06 1.06Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.74 11.74c-.61-2-2.13-3.44-4.04-3.87-.56-2.5-2.1-4.29-4.28-4.97-2.38-.73-5.14-.02-6.87 1.79-1.53 1.59-2.03 3.78-1.44 6.11C2.98 11.32 2 13.18 2 14.86c0 1.88 1.23 3.99 3.97 4.18H8.5v-2.63c0-1.27.76-2.03 2.03-2.03h2.94c1.27 0 2.03.76 2.03 2.03v2.63H16.35c1.42 0 2.78-.53 3.82-1.48 1.63-1.42 2.23-3.65 1.57-5.82Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.61 20c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14C15.9.13 2.43 3.67 5.62 12.56",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41M12.39 18.59l-2.83 2.82M12.39 21.41l-2.83-2.82",
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
    d: "M16.652 20.752h-.04c-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.04c1.14 0 2.23-.42 3.07-1.2 1.55-1.36 1.66-3.3 1.24-4.67-.42-1.37-1.58-2.92-3.61-3.18a.753.753 0 0 1-.65-.62c-.4-2.39-1.69-4.04-3.63-4.64-2.02-.62-4.35-.01-5.81 1.52-1.42 1.49-1.75 3.56-.93 5.85a.75.75 0 1 1-1.41.51c-1.01-2.81-.55-5.5 1.26-7.39 1.84-1.93 4.79-2.7 7.34-1.91 2.33.72 3.98 2.64 4.57 5.3 2.04.46 3.67 2 4.32 4.13.71 2.32.06 4.7-1.67 6.22a6.136 6.136 0 0 1-4.1 1.58Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.568 20.749h-.05c-2.88-.2-4.19-2.46-4.19-4.47s1.31-4.26 4.19-4.47c.75-.01 1.47.16 2.11.48.37.19.51.64.33 1.01-.19.37-.64.51-1.01.33-.42-.22-.91-.31-1.36-.32-1.89.14-2.75 1.59-2.75 2.97 0 1.38.86 2.83 2.8 2.97.41.03.72.39.69.8-.04.4-.37.7-.76.7ZM15.819 10.639c-.27 0-.54-.15-.67-.42a.746.746 0 0 1 .34-1.01c.61-.31 1.3-.48 1.98-.49.39.02.76.32.76.74.01.41-.32.76-.74.76-.46.01-.92.12-1.34.33-.1.07-.22.09-.33.09ZM9.56 22.16c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.83-2.83c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.83 2.83c-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.39 22.16c-.19 0-.38-.07-.53-.22l-2.83-2.83a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.83 2.83c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.61 19.999c1.34.01 2.63-.49 3.62-1.39 3.27-2.86 1.52-8.6-2.79-9.14-1.54-9.34-15.01-5.8-11.82 3.09",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.28 12.97c-.53-.27-1.12-.41-1.71-.4-4.66.33-4.65 7.11 0 7.44M15.82 9.89c.52-.26 1.08-.4 1.66-.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m12.393 18.59-2.83 2.82M12.393 21.41l-2.83-2.82"
  })));
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

var CloudCross = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
CloudCross.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
CloudCross.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CloudCross.displayName = 'CloudCross';

module.exports = CloudCross;
