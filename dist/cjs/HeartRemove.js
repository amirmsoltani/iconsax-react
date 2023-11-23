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
    d: "M20.69 13.918c-.01 0-.01-.01-.01-.01v-.01c-.88-.92-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2.88.98 2.15 1.6 3.57 1.6 2.65 0 4.8-2.15 4.8-4.8 0-1.27-.5-2.42-1.31-3.28Zm-1.68 5.15c-.14.14-.34.22-.53.22s-.38-.08-.53-.22l-.74-.74-.76.77c-.15.14-.34.22-.53.22-.1 0-.19-.02-.28-.06a.669.669 0 0 1-.25-.16c-.3-.3-.3-.77 0-1.06l.76-.77-.73-.74c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.73.74.71-.71c.3-.29.77-.29 1.06 0 .17.17.24.39.21.61-.01.17-.08.33-.21.45l-.71.71.74.74c.3.29.3.76 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 17.198c0 2.65-2.15 4.8-4.8 4.8-1.42 0-2.69-.62-3.57-1.6a4.79 4.79 0 0 1-1.23-3.2c0-2.65 2.15-4.8 4.8-4.8 1.37 0 2.61.58 3.49 1.51-.01 0-.01 0 0 .01.81.86 1.31 2.01 1.31 3.28ZM18.48 18.54 15.95 16M18.45 16.031l-2.53 2.54",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.56 3.102c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59 0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-1.55.62-2.95 1.63-3.96",
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
    d: "M22 8.692c0 1.19-.19 2.29-.52 3.31-.21.67-.48 1.31-.8 1.9-.88-.93-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.41-.82-7.28-3.81-8.86-8.81-.33-1.02-.52-2.12-.52-3.31 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.69 13.918c-.01 0-.01-.01-.01-.01v-.01c-.88-.92-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2.88.98 2.15 1.6 3.57 1.6 2.65 0 4.8-2.15 4.8-4.8 0-1.27-.5-2.42-1.31-3.28Zm-1.68 5.15c-.14.14-.34.22-.53.22s-.38-.08-.53-.22l-.74-.74-.76.77c-.15.14-.34.22-.53.22a.67.67 0 0 1-.28-.06.669.669 0 0 1-.25-.16c-.3-.3-.3-.77 0-1.06l.76-.77-.73-.74c-.3-.29-.3-.77 0-1.06.29-.29.76-.29 1.06 0l.73.74.71-.71c.3-.29.77-.29 1.06 0 .17.17.24.39.21.61-.01.17-.08.33-.21.45l-.71.71.74.74c.3.29.3.76 0 1.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 17.2c0 2.65-2.15 4.8-4.8 4.8-1.42 0-2.69-.62-3.57-1.6a4.79 4.79 0 0 1-1.23-3.2c0-2.65 2.15-4.8 4.8-4.8 1.37 0 2.61.58 3.49 1.51-.01 0-.01 0 0 .01.81.86 1.31 2.01 1.31 3.28ZM18.48 18.54 15.95 16M18.45 16.03l-2.53 2.54",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69Z",
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
    d: "M17.2 22.748c-1.57 0-3.07-.67-4.13-1.85a5.541 5.541 0 0 1-1.42-3.7c0-3.06 2.49-5.55 5.55-5.55 1.54 0 2.97.62 4.04 1.74a.7.7 0 0 1 .08.1c.94 1.06 1.43 2.35 1.43 3.7 0 3.07-2.49 5.56-5.55 5.56Zm0-9.6c-2.23 0-4.05 1.82-4.05 4.05 0 .99.37 1.95 1.04 2.7a4.05 4.05 0 0 0 3.01 1.35c2.23 0 4.05-1.82 4.05-4.05 0-1.03-.39-2.01-1.11-2.77-.02-.02-.04-.05-.06-.07a4.016 4.016 0 0 0-2.88-1.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.479 19.291c-.19 0-.38-.07-.53-.22l-2.54-2.54a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.54 2.54c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.92 19.319c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.54-2.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.54 2.54c-.15.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 21.652c-.31 0-.62-.04-.87-.13-2.56-.87-9.88-5.11-9.88-12.83 0-3.5 2.83-6.34 6.31-6.34 1.67 0 3.27.67 4.44 1.84a6.308 6.308 0 0 1 4.44-1.84c3.48 0 6.31 2.84 6.31 6.34 0 1.95-.47 3.82-1.4 5.57a.74.74 0 0 1-.56.39.757.757 0 0 1-.65-.23 4.05 4.05 0 0 0-2.95-1.28c-2.23 0-4.05 1.82-4.05 4.05 0 .99.37 1.95 1.04 2.7.16.18.22.42.17.65-.05.23-.21.43-.42.53-.4.18-.76.33-1.09.44-.23.1-.53.14-.84.14Zm-4.44-17.8c-2.65 0-4.81 2.17-4.81 4.84 0 6.84 6.57 10.62 8.87 11.41.18.07.57.06.75 0l.09-.03c-.52-.86-.81-1.85-.81-2.87a5.557 5.557 0 0 1 8.79-4.51c.54-1.28.81-2.62.81-4 0-2.67-2.16-4.84-4.81-4.84-1.5 0-2.94.72-3.84 1.93-.28.38-.92.38-1.2 0a4.812 4.812 0 0 0-3.84-1.93Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 17.198c0 2.65-2.15 4.8-4.8 4.8-1.42 0-2.69-.62-3.57-1.6a4.79 4.79 0 0 1-1.23-3.2c0-2.65 2.15-4.8 4.8-4.8 1.37 0 2.61.58 3.49 1.51-.01 0-.01 0 0 .01.81.86 1.31 2.01 1.31 3.28ZM18.48 18.54 15.95 16M18.45 16.031l-2.53 2.54",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M22 8.692c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z",
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

var HeartRemove = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
HeartRemove.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
HeartRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
HeartRemove.displayName = 'HeartRemove';

module.exports = HeartRemove;
