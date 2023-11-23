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
    d: "m13.89 2.878-4.69-.74c-3.91-.61-5.72.71-6.34 4.62l-.74 4.69c-.4 2.56.02 4.22 1.47 5.23.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07-.13-2.5-1.6-3.78-4.74-4.27Zm-5.65 6.47c-1.17 0-2.12-.95-2.12-2.11 0-1.17.95-2.12 2.12-2.12 1.16 0 2.11.95 2.11 2.12 0 1.16-.95 2.11-2.11 2.11Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m20.5 13.469-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-1.41-.47-2.43-1.05-3.09-1.78.63.25 1.36.44 2.19.57l4.7.74c.64.1 1.24.15 1.8.15 3.3 0 5.07-1.78 5.68-5.61l.73-4.69c.1-.58.14-1.09.14-1.56 1.52 1.25 1.74 3.03.87 5.66Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.89 2.878c3.14.49 4.61 1.77 4.74 4.27.04.61-.01 1.3-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69-.74c-1.35-.21-2.39-.57-3.15-1.11-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m20.5 13.468-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32ZM8.24 8.98a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48Z",
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
    d: "m13.89 2.878-4.69-.74c-3.91-.61-5.72.71-6.34 4.62l-.74 4.69c-.4 2.56.02 4.22 1.47 5.23.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07-.13-2.5-1.6-3.78-4.74-4.27Zm-5.65 6.47c-1.17 0-2.12-.95-2.12-2.11 0-1.17.95-2.12 2.12-2.12 1.16 0 2.11.95 2.11 2.12 0 1.16-.95 2.11-2.11 2.11Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m20.5 13.468-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32ZM10.351 7.241c0 1.16-.95 2.11-2.11 2.11-1.17 0-2.12-.95-2.12-2.11 0-1.17.95-2.12 2.12-2.12 1.16 0 2.11.95 2.11 2.12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.63 7.15c.04.61-.01 1.3-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69-.74c-1.35-.21-2.39-.57-3.15-1.11-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62l4.69.74c3.14.49 4.61 1.77 4.74 4.27Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.5 13.47 19 17.98c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32ZM8.24 8.98a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48Z",
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
    d: "M13.05 19.42c-.54 0-1.11-.05-1.73-.15l-4.69-.74c-1.48-.23-2.62-.64-3.47-1.24-2.19-1.52-2.06-4.13-1.78-5.96l.74-4.69c.68-4.3 2.9-5.91 7.2-5.24l4.69.74c2.21.35 5.18 1.24 5.37 4.97.04.64 0 1.37-.14 2.23l-.73 4.69c-.58 3.67-2.29 5.39-5.46 5.39ZM7.53 2.75c-2.38 0-3.46 1.21-3.93 4.13l-.74 4.69c-.46 2.95.38 3.95 1.16 4.5.66.47 1.59.79 2.84.98l4.69.74c3.49.55 4.93-.5 5.48-4l.73-4.69c.12-.75.16-1.38.12-1.91v-.01c-.11-2.1-1.3-3.13-4.11-3.57l-4.68-.73c-.58-.09-1.09-.13-1.56-.13Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.681 22.749c-.85 0-1.81-.18-2.92-.55l-4.51-1.5c-2.57-.85-3.96-2.07-4.38-3.85-.07-.3.05-.62.31-.79.26-.17.6-.17.85.01.66.47 1.58.79 2.83.98l4.69.74c3.49.55 4.93-.5 5.48-4l.73-4.69c.12-.75.16-1.38.12-1.91-.01-.26.12-.52.35-.67a.74.74 0 0 1 .76-.03c2.68 1.43 3.39 3.72 2.23 7.22l-1.5 4.51c-.71 2.12-1.64 3.42-2.94 4.07-.63.31-1.32.46-2.1.46Zm-8.95-4.39c.48.32 1.12.63 1.99.92l4.51 1.5c1.72.57 2.95.62 3.87.17.92-.46 1.62-1.48 2.19-3.2l1.5-4.51c.82-2.48.5-3.8-.45-4.69-.02.25-.06.51-.1.79l-.73 4.69c-.68 4.3-2.9 5.91-7.2 5.25l-4.69-.74c-.31-.06-.61-.12-.89-.18ZM8.24 9.718c-1.37 0-2.49-1.12-2.49-2.49s1.12-2.49 2.49-2.49 2.49 1.12 2.49 2.49-1.12 2.49-2.49 2.49Zm0-3.47c-.54 0-.99.44-.99.99s.44.99.99.99c.54 0 .99-.44.99-.99s-.45-.99-.99-.99Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.63 7.148c.04.61-.01 1.3-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69-.74c-1.35-.21-2.39-.57-3.15-1.11-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62l4.69.74c3.14.49 4.61 1.77 4.74 4.27Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m20.5 13.468-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31.76.54 1.8.9 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69c.12-.77.17-1.46.13-2.07 2.39 1.27 2.91 3.19 1.87 6.32ZM8.24 8.98a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48Z",
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

var Clipboard = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Clipboard.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Clipboard.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Clipboard.displayName = 'Clipboard';

module.exports = Clipboard;