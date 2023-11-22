'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17 3H7C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5Zm-6.51 13.81c-.03 0-.06.01-.1.01-.37 0-.69-.28-.74-.65-.13-1.02-.87-1.76-1.89-1.89a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 1.69.22 2.97 1.5 3.19 3.19.05.4-.24.78-.65.83Zm3.05-.51c-.03 0-.06.01-.1.01-.37 0-.69-.28-.74-.65-.31-2.38-2.04-4.12-4.43-4.43a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 3.08.4 5.33 2.64 5.73 5.73.05.4-.24.77-.65.83Zm2.7-.87c-.03 0-.06.01-.1.01-.37 0-.69-.28-.74-.65-.43-3.38-2.89-5.84-6.27-6.27a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 4.07.52 7.04 3.49 7.57 7.57.05.41-.24.78-.65.83Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 12.45V16c0 3-2 5-5 5h-1M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5M3.691 11.71c4.62.59 8.01 3.991 8.61 8.611M2.621 15.07c3.39.43 5.88 2.93 6.32 6.32M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16",
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
    d: "M2 9V8c0-2.76 2.24-5 5-5h10c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.138 15.439c-.37 0-.69-.28-.74-.65-.43-3.38-2.89-5.84-6.27-6.27a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 4.07.52 7.04 3.49 7.57 7.57.05.41-.24.79-.65.84h-.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.439 16.298c-.37 0-.69-.28-.74-.65-.31-2.38-2.04-4.12-4.43-4.43a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 3.08.4 5.33 2.64 5.73 5.73.05.41-.24.79-.65.84h-.1ZM10.39 16.809c-.37 0-.69-.28-.74-.65-.13-1.02-.87-1.76-1.89-1.89a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 1.69.22 2.97 1.5 3.19 3.19.05.41-.24.79-.65.84h-.1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.69 11.71c4.62.59 8.01 3.99 8.61 8.61M2.62 15.07c3.39.43 5.88 2.93 6.32 6.32M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16",
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
    d: "M17 21.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c2.58 0 4.25-1.67 4.25-4.25V8c0-2.58-1.67-4.25-4.25-4.25H7C4.42 3.75 2.75 5.42 2.75 8v1c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v8c0 3.44-2.31 5.75-5.75 5.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.29 21.059c-.37 0-.69-.28-.74-.65-.55-4.28-3.67-7.41-7.96-7.96a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 4.98.64 8.62 4.27 9.25 9.25.05.41-.24.79-.65.84-.02.01-.06.01-.09.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.929 22.128c-.37 0-.69-.28-.74-.65-.39-3.05-2.62-5.28-5.67-5.67a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 3.75.48 6.48 3.22 6.96 6.96.05.41-.24.79-.65.84-.03.01-.06.01-.09.01ZM5.13 22.769c-.37 0-.69-.28-.74-.65-.17-1.35-1.16-2.34-2.51-2.51a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 2.02.26 3.55 1.79 3.81 3.81.05.41-.24.79-.65.84h-.1Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9V8c0-3 2-5 5-5h10c3 0 5 2 5 5v8c0 3-2 5-5 5h-1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M3.69 11.71c4.62.59 8.01 3.991 8.61 8.611M2.62 15.07c3.39.43 5.88 2.93 6.32 6.32M1.98 18.86c1.69.22 2.94 1.46 3.16 3.16",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var MirroringScreen = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
MirroringScreen.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MirroringScreen.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MirroringScreen.displayName = 'MirroringScreen';

module.exports = MirroringScreen;
