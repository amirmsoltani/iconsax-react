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
    d: "m20.02 10.7-2.12 1.34c-.4.25-.91.19-1.24-.14l-4.53-4.53a.998.998 0 0 1-.14-1.24l1.34-2.12c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.12 1.13 1.05 2.89-.16 3.66ZM14.71 19.95l-8.72 1.02c-.077.01-.154.017-.23.022-.684.04-.854-.767-.369-1.253l2.59-2.59c.32-.31.32-.8 0-1.11a.779.779 0 0 0-1.11 0l-2.59 2.59c-.485.486-1.285.315-1.249-.37a3.47 3.47 0 0 1 .019-.22l1.03-8.72c.26-2.18 1.06-2.9 3.36-2.76l1.5.09c.49.03.95.24 1.3.59l6.55 6.55c.35.35.56.81.58 1.3l.09 1.5c.23 2.31-.56 3.11-2.75 3.36Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.79 7.268-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.65 6.808c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93M4.61 19.419l3.03-3.04",
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
    d: "m20.02 10.7-2.8 1.77-5.66-5.66 1.76-2.8c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.13 1.13 1.06 2.89-.15 3.66Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.71 19.95 6 20.98c-.6.07-1.14-.02-1.59-.24a2.39 2.39 0 0 1-1.11-1.11c-.22-.45-.3-.99-.24-1.58L4.1 9.33c.25-2.18 1.06-2.89 3.36-2.76l4.12.25 5.66 5.66.24 4.12c.21 2.3-.58 3.1-2.77 3.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.98 17.15 4.4 20.73a2.39 2.39 0 0 1-1.11-1.11l3.59-3.59c.31-.3.81-.3 1.11 0 .31.32.31.81-.01 1.12Z",
    fill: color
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
    strokeWidth: strokeWidth,
    d: "M19.79 7.27l-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M11.58 7.05l-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93M4.61 19.42l3.03-3.04"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.98 13.201c-.19 0-.39-.08-.53-.22l-5.4-5.41a.742.742 0 0 1-.1-.93l1.69-2.67c.47-.74 1.18-1.2 2.01-1.29.93-.09 1.89.27 2.64 1.02l3.03 3.03c.72.72 1.08 1.69.97 2.65-.09.84-.54 1.57-1.24 2.01l-2.67 1.69c-.12.08-.26.12-.4.12Zm-4.45-6.26 4.56 4.56 2.17-1.37c.31-.2.51-.52.55-.91.06-.5-.15-1.03-.54-1.42l-3.03-3.03c-.43-.43-.95-.66-1.42-.59-.38.04-.69.25-.91.6l-1.38 2.16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.89 21.339c-.89 0-1.69-.32-2.29-.91-.7-.7-1.01-1.67-.88-2.75l.98-8.33c.3-2.52 1.41-3.44 4-3.29l3.92.23c.41.03.73.38.7.79-.03.41-.38.73-.79.7l-3.92-.22c-1.78-.11-2.22.24-2.42 1.97l-.98 8.32c-.07.61.09 1.15.45 1.51.37.36.91.53 1.52.45l8.32-.98c1.75-.21 2.14-.67 1.97-2.39l-.24-3.95c-.02-.41.29-.77.7-.79.41-.03.77.29.79.7l.23 3.92c.24 2.49-.74 3.69-3.29 4l-8.32.98c-.14.03-.3.04-.45.04Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.61 20.17c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.79 7.268-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m11.58 7.052-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m4.61 19.419 3.03-3.04",
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

var PathTool = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
PathTool.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
PathTool.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
PathTool.displayName = 'PathTool';

module.exports = PathTool;