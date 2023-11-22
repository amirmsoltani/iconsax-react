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
    d: "M12.676 19.959c.275.064.3.424.032.513l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l.524-.174c.403-.133.795.271.68.68-.056.202-.11.414-.164.634l-.98 4.19c-1.1 4.71.51 7.31 5.22 8.43l1.148.267Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m17.17 3.209-1.67-.39c-3.34-.79-5.33-.14-6.5 2.28-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27 3.12.3 4.78-1.16 5.62-4.77l.98-4.18c.98-4.18-.3-6.25-4.49-7.23Zm-1.88 10.12c-.09.34-.39.56-.73.56-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.41.1.65.51.55.91Zm2.93-3.38c-.09.34-.39.56-.73.56-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23c.41.09.65.5.55.91Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.058 19.392c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27ZM12.64 8.531l4.85 1.23M11.66 12.398l2.9.74",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.96 5.099c1.08 1.2 1.27 2.92.7 5.34l-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39",
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
    d: "m21.66 10.438-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.058 19.392c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27ZM17.49 10.512c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.561 13.889c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.06 19.39c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27ZM12.64 8.53l4.85 1.23M11.66 12.4l2.9.74",
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
    d: "M15.808 20.179c-.26 0-.53-.01-.82-.04-.52-.04-1.11-.14-1.72-.29l-1.68-.4c-4.61-1.09-6.12-3.53-5.04-8.13l.98-4.19c.22-.95.48-1.72.8-2.36 1.72-3.55 5.01-3.23 7.35-2.68l1.67.39c2.34.55 3.82 1.42 4.65 2.75.82 1.33.95 3.04.4 5.38l-.98 4.18c-.86 3.66-2.65 5.39-5.61 5.39Zm-2.69-16.93c-1.67 0-2.73.69-3.44 2.17-.26.54-.49 1.21-.69 2.05l-.98 4.19c-.89 3.78.14 5.43 3.92 6.33l1.68.4c.54.13 1.05.21 1.51.25 2.72.27 4.07-.92 4.83-4.19l.98-4.18c.45-1.93.39-3.28-.21-4.25-.6-.97-1.78-1.63-3.72-2.08l-1.67-.39c-.83-.2-1.57-.3-2.21-.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.33 22.252c-2.57 0-4.21-1.54-5.26-4.79l-1.28-3.95c-1.42-4.4-.15-6.88 4.23-8.3l1.58-.51c.52-.16.91-.27 1.26-.33.29-.06.57.05.74.28.17.23.2.53.08.79-.26.53-.49 1.2-.68 2.04l-.98 4.19c-.89 3.78.14 5.43 3.92 6.33l1.68.4c.54.13 1.05.21 1.51.25.32.03.58.25.67.56.08.31-.04.63-.3.81-.66.45-1.49.83-2.54 1.17l-1.58.52c-1.15.36-2.15.54-3.05.54Zm-.55-16.03-1.29.42c-3.57 1.15-4.42 2.83-3.27 6.41l1.28 3.95c1.16 3.57 2.84 4.43 6.41 3.28l1.58-.52c.06-.02.11-.04.17-.06l-1.06-.25c-4.61-1.09-6.12-3.53-5.04-8.13l.98-4.19c.07-.32.15-.63.24-.91ZM17.49 10.512c-.06 0-.12-.01-.19-.02l-4.85-1.23a.75.75 0 0 1 .37-1.45l4.85 1.23a.748.748 0 0 1-.18 1.47Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.561 13.889c-.06 0-.12-.01-.19-.02l-2.91-.74a.75.75 0 0 1 .37-1.45l2.91.74c.4.1.64.51.54.91-.08.34-.38.56-.72.56Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.66 10.438-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77-.5-.04-1.04-.13-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19c.2-.85.44-1.59.74-2.2 1.17-2.42 3.16-3.07 6.5-2.28l1.67.39c4.19.98 5.47 3.05 4.49 7.23Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.058 19.392c-.62.42-1.4.77-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-1.28-3.95c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52c.41-.13.8-.24 1.17-.31-.3.61-.54 1.35-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4c.58.14 1.12.23 1.62.27ZM12.64 8.531l4.85 1.23M11.66 12.398l2.9.74",
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

var Notepad2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Notepad2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Notepad2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Notepad2.displayName = 'Notepad2';

module.exports = Notepad2;
