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
    d: "M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.86 7.678c-.59-.45-1.4-.54-2.35-.28l-4.35 1.18c-1.17.32-1.89 1.27-1.89 2.47v6.23c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-5.65l6.48-1.77v3.43c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-8.5c0-1.01-.3-1.75-.89-2.19Zm-10.02 13.57a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Zm7.98-1.45a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 3h3M8 3h14M2 9h9M2 15h6M2 21h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 18.369v-8.51c0-1.81-1.14-2.06-2.29-1.75l-4.35 1.19c-.79.22-1.34.84-1.34 1.75v8.77",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.82 20.547a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36ZM20.371 11.868l1.63-.45M14.02 13.6l2.35-.64",
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
    d: "M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.86 7.678c-.59-.45-1.4-.54-2.35-.28l-4.35 1.18c-1.17.32-1.89 1.27-1.89 2.47v6.23c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-5.65l6.48-1.77v3.43c-.42-.24-.91-.39-1.43-.39-1.61 0-2.93 1.31-2.93 2.93 0 1.61 1.31 2.93 2.93 2.93s2.93-1.31 2.93-2.93v-8.5c0-1.01-.3-1.75-.89-2.19Zm-10.02 13.57a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Zm7.98-1.45a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 3h20M2 9h9M2 15h6M2 21h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 18.37V9.86c0-1.81-1.14-2.06-2.29-1.75L15.36 9.3c-.79.22-1.34.84-1.34 1.75v8.77",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.82 20.55a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36ZM14.02 13.6 22 11.42",
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
    d: "M22 3.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM11 9.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 15.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM11.84 22.75c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93Zm0-4.35a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.02 20.571c-.41 0-.75-.34-.75-.75v-8.77c0-1.21.72-2.16 1.89-2.47l4.35-1.19c.95-.26 1.77-.16 2.35.29.58.45.88 1.18.88 2.19v8.51c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-8.51c0-.5-.1-.85-.29-.99-.19-.15-.58-.16-1.05-.03l-4.35 1.19c-.29.08-.78.32-.78 1.03v8.77c0 .4-.34.73-.75.73Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.82 21.301c-1.61 0-2.93-1.31-2.93-2.93 0-1.61 1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93-1.31 2.93-2.93 2.93Zm0-4.35a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86ZM14.02 14.349a.747.747 0 0 1-.19-1.47l7.98-2.18a.75.75 0 1 1 .39 1.45l-7.98 2.18c-.07.01-.14.02-.2.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 3h20M2 9h9M2 15h6M2 21h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.84 22a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36Z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 18.369v-8.51c0-1.81-1.14-2.06-2.29-1.75l-4.35 1.19c-.79.22-1.34.84-1.34 1.75v8.77"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.82 20.547a2.18 2.18 0 1 0 0-4.36 2.18 2.18 0 0 0 0 4.36ZM14.02 13.598l7.98-2.18"
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

var MusicFilter = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MusicFilter.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MusicFilter.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MusicFilter.displayName = 'MusicFilter';

module.exports = MusicFilter;
