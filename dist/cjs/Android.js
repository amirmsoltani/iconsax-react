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
    d: "M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2zM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2zM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2zM5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1zM9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4S8 3.79 8 6c0 .88.72 1.6 1.6 1.6z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM7 11c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-.71M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM13 18h-2M9.6 6.998h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .88.72 1.6 1.6 1.6Z",
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
    d: "M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M9.6 7.6h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4S8 3.79 8 6c0 .88.72 1.6 1.6 1.6Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 18v3c0 .5-.4 1-1 1s-1-.5-1-1v-3h2ZM15 18v3c0 .5-.4 1-1 1s-1-.5-1-1v-3h2ZM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2ZM5 11v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1ZM21 11v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1ZM13 18h-2M9.6 7h4.8c.9 0 1.6-.75 1.6-1.714C16 2.929 14.2 1 12 1S8 2.929 8 5.286C8 6.25 8.7 7 9.6 7Z",
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
    d: "M10 22.75c-.96 0-1.75-.79-1.75-1.75v-3c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v3c0 .96-.79 1.75-1.75 1.75Zm-.25-4V21c0 .27.5.27.5 0v-2.25h-.5ZM14 22.75c-.96 0-1.75-.79-1.75-1.75v-3c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v3c0 .96-.79 1.75-1.75 1.75Zm-.25-4V21c0 .27.5.27.5 0v-2.25h-.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15 18.75H9c-1.52 0-2.75-1.23-2.75-2.75v-5c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75v5c0 1.52-1.23 2.75-2.75 2.75Zm-6-9c-.69 0-1.25.56-1.25 1.25v5c0 .69.56 1.25 1.25 1.25h6c.69 0 1.25-.56 1.25-1.25v-5c0-.69-.56-1.25-1.25-1.25H9ZM4 16.75c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75Zm0-6c-.14 0-.25.11-.25.25v4c0 .28.5.28.5 0v-4c0-.14-.11-.25-.25-.25ZM20 16.75c-.96 0-1.75-.79-1.75-1.75v-4c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75v4c0 .96-.79 1.75-1.75 1.75Zm0-6c-.14 0-.25.11-.25.25v4c0 .28.5.28.5 0v-4c0-.14-.11-.25-.25-.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13 18.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.4 7.748H9.6c-1.3 0-2.35-1.05-2.35-2.35 0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75c0 1.3-1.05 2.35-2.35 2.35Zm-2.4-5.6c-1.79 0-3.25 1.46-3.25 3.25 0 .47.38.85.85.85h4.8c.47 0 .85-.38.85-.85 0-1.79-1.46-3.25-3.25-3.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM15 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2ZM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1ZM21 11v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13 18h-2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M9.6 6.998h4.8c.88 0 1.6-.72 1.6-1.6 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .88.72 1.6 1.6 1.6Z",
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

var Android = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Android.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Android.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Android.displayName = 'Android';

module.exports = Android;