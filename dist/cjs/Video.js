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
    d: "M21.15 6.17c-.41-.22-1.27-.45-2.44.37l-1.47 1.04c-.11-3.11-1.46-4.33-4.74-4.33h-6C3.08 3.25 1.75 4.58 1.75 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.28 0 4.63-1.22 4.74-4.33l1.47 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.11.85-.21.41-.21 1.1-.78 1.1-2.21V8.38c0-1.43-.69-2-1.1-2.21ZM11 11.38c-1.03 0-1.88-.84-1.88-1.88S9.97 7.62 11 7.62c1.03 0 1.88.84 1.88 1.88s-.85 1.88-1.88 1.88Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 7.788c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.05 4.21-4.21 4.21H6.21c-3.16 0-4.21-2.1-4.21-4.21v-4.09",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.518 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM13 9.5c0-.83-.67-1.5-1.5-1.5S10 8.67 10 9.5s.67 1.5 1.5 1.5",
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
    d: "M13 3.25H7C3.58 3.25 2.25 4.58 2.25 8v8c0 2.3 1.25 4.75 4.75 4.75h6c3.42 0 4.75-1.33 4.75-4.75V8c0-3.42-1.33-4.75-4.75-4.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.501 11.381a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76ZM21.65 6.172c-.41-.21-1.27-.45-2.44.37l-1.48 1.04c.01.14.02.27.02.42v8c0 .15-.02.28-.02.42l1.48 1.04c.62.44 1.16.58 1.59.58.37 0 .66-.1.85-.2.41-.21 1.1-.78 1.1-2.21v-7.25c0-1.43-.69-2-1.1-2.21Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.53 20.42H6.21c-3.16 0-4.21-2.1-4.21-4.21V7.79c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.52 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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
    d: "M12.88 20.86H6.81C3.26 20.86 2 18.37 2 16.05v-8.1c0-3.46 1.35-4.81 4.81-4.81h6.07c3.46 0 4.81 1.35 4.81 4.81v8.1c0 3.46-1.35 4.81-4.81 4.81ZM6.81 4.66c-2.61 0-3.29.68-3.29 3.29v8.1c0 1.23.43 3.29 3.29 3.29h6.07c2.61 0 3.29-.68 3.29-3.29v-8.1c0-2.61-.68-3.29-3.29-3.29H6.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.78 18.108c-.43 0-.98-.14-1.61-.58l-2.67-1.87a.754.754 0 0 1-.32-.62v-6.08c0-.25.12-.48.32-.62l2.67-1.87c1.19-.83 2.06-.59 2.47-.38.41.22 1.11.79 1.11 2.24v7.33c0 1.45-.7 2.03-1.11 2.24-.19.11-.49.21-.86.21Zm-3.09-3.47 2.35 1.64c.45.31.77.34.9.27.14-.07.29-.35.29-.89v-7.32c0-.55-.16-.82-.29-.89-.13-.07-.45-.04-.9.27l-2.35 1.64v5.28ZM11.5 11.75c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.53 20.418H6.21c-3.16 0-4.21-2.1-4.21-4.21v-8.42c0-3.16 1.05-4.21 4.21-4.21h6.32c3.16 0 4.21 1.05 4.21 4.21v8.42c0 3.16-1.06 4.21-4.21 4.21Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m19.518 17.1-2.78-1.95V8.84l2.78-1.95c1.36-.95 2.48-.37 2.48 1.3v7.62c0 1.67-1.12 2.25-2.48 1.29ZM11.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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

var Video = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Video.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Video.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Video.displayName = 'Video';

module.exports = Video;