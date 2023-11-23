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
    d: "M19.5 3.67c0-.01 0-.02-.02-.03-.22-.28-.51-.43-.85-.43-.53 0-1.17.35-1.86 1.09-.82.88-2.08.81-2.8-.15l-1.01-1.34c-.4-.54-.93-.81-1.46-.81-.53 0-1.06.27-1.46.81L9.02 4.16c-.71.95-1.96 1.02-2.78.15l-.01-.01C5.1 3.09 4.09 2.91 3.52 3.64c-.02.01-.02.02-.02.03-.36.77-.5 1.85-.5 3.37v9.92c0 1.52.14 2.6.5 3.37 0 .01.01.03.02.04.58.72 1.58.54 2.71-.67l.01-.01c.82-.87 2.07-.8 2.78.15l1.02 1.35c.4.54.93.81 1.46.81.53 0 1.06-.27 1.46-.81l1.01-1.34c.72-.96 1.98-1.03 2.8-.15.69.74 1.33 1.09 1.86 1.09.34 0 .63-.14.85-.42.01-.01.02-.03.02-.04.36-.77.5-1.85.5-3.37V7.04c0-1.52-.14-2.6-.5-3.37ZM14 14.5H8c-.41 0-.75-.34-.75-.75S7.59 13 8 13h6c.41 0 .75.34.75.75s-.34.75-.75.75Zm2-3.5H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3 7.04c0-1.52.14-2.6.5-3.37 0-.01 0-.02.02-.03.57-.73 1.58-.55 2.71.66l.01.01c.82.87 2.07.8 2.78-.15l1.02-1.35c.4-.54.93-.81 1.46-.81.53 0 1.06.27 1.46.81l1.01 1.34c.72.96 1.98 1.03 2.8.15.69-.74 1.33-1.09 1.86-1.09.34 0 .63.15.85.43.02.01.02.02.02.03.36.77.5 1.85.5 3.37v9.92c0 1.52-.14 2.6-.5 3.37 0 .01-.01.03-.02.04-.22.28-.51.42-.85.42-.53 0-1.17-.35-1.86-1.09-.82-.88-2.08-.81-2.8.15l-1.01 1.34c-.4.54-.93.81-1.46.81-.53 0-1.06-.27-1.46-.81l-1.02-1.35c-.71-.95-1.96-1.02-2.78-.15l-.01.01c-1.13 1.21-2.13 1.39-2.71.67a.076.076 0 0 1-.02-.04c-.36-.77-.5-1.85-.5-3.37v-5.99M15 10.25h1M8 10.25h4M8 13.75h6",
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
    d: "M20 7.04v9.92c0 1.52-.14 2.6-.5 3.37 0 .01-.01.03-.02.04-.22.28-.51.42-.85.42-.53 0-1.17-.35-1.86-1.09-.82-.88-2.08-.81-2.8.15l-1.01 1.34c-.4.54-.93.81-1.46.81-.53 0-1.06-.27-1.46-.81l-1.02-1.35c-.71-.95-1.96-1.02-2.78-.15l-.01.01c-1.13 1.21-2.13 1.39-2.71.67a.076.076 0 0 1-.02-.04c-.36-.77-.5-1.85-.5-3.37V7.04c0-1.52.14-2.6.5-3.37 0-.01 0-.02.02-.03.57-.73 1.58-.55 2.71.66l.01.01c.82.87 2.07.8 2.78-.15l1.02-1.35c.4-.54.93-.81 1.46-.81.53 0 1.06.27 1.46.81l1.01 1.34c.72.96 1.98 1.03 2.8.15.69-.74 1.33-1.09 1.86-1.09.34 0 .63.15.85.43.02.01.02.02.02.03.36.77.5 1.85.5 3.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 11H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.5H8c-.41 0-.75-.34-.75-.75S7.59 13 8 13h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.04v9.92c0 1.52-.14 2.6-.5 3.37 0 .01-.01.03-.02.04-.22.28-.51.42-.85.42-.53 0-1.17-.35-1.86-1.09-.82-.88-2.08-.81-2.8.15l-1.01 1.34c-.4.54-.93.81-1.46.81-.53 0-1.06-.27-1.46-.81l-1.02-1.35c-.71-.95-1.96-1.02-2.78-.15l-.01.01c-1.13 1.21-2.13 1.39-2.71.67a.076.076 0 0 1-.02-.04c-.36-.77-.5-1.85-.5-3.37V7.04c0-1.52.14-2.6.5-3.37 0-.01 0-.02.02-.03.57-.73 1.58-.55 2.71.66l.01.01c.82.87 2.07.8 2.78-.15l1.02-1.35c.4-.54.93-.81 1.46-.81.53 0 1.06.27 1.46.81l1.01 1.34c.72.96 1.98 1.03 2.8.15.69-.74 1.33-1.09 1.86-1.09.34 0 .63.15.85.43.02.01.02.02.02.03.36.77.5 1.85.5 3.37ZM8 10.25h8M8 13.75h6",
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
    d: "M11.502 22.752c-.79 0-1.54-.41-2.06-1.11l-1.02-1.34c-.21-.28-.49-.44-.79-.46-.29-.02-.6.12-.85.37-.86.92-1.7 1.36-2.49 1.34-.54-.02-1.01-.26-1.37-.7a.862.862 0 0 1-.11-.19c-.39-.84-.57-1.98-.57-3.69v-9.92c0-1.71.18-2.84.57-3.69.03-.06.06-.12.11-.17.35-.45.82-.69 1.36-.72.8-.03 1.65.43 2.49 1.33.25.27.55.4.85.38.3-.02.58-.18.79-.46l1.02-1.35c.52-.7 1.27-1.11 2.06-1.11s1.54.41 2.06 1.11l1.01 1.34c.21.29.5.45.81.47.29.02.6-.12.85-.38.82-.88 1.63-1.33 2.41-1.33.56 0 1.08.25 1.44.72.04.05.08.11.11.18.39.84.57 1.98.57 3.69v9.92c0 1.71-.18 2.84-.57 3.69-.04.09-.09.17-.16.24-.31.4-.82.65-1.39.65-.78 0-1.59-.45-2.41-1.33-.24-.26-.57-.4-.85-.38-.31.02-.59.18-.81.47l-1.01 1.34c-.51.68-1.26 1.09-2.05 1.09Zm-3.92-4.42h.13c.74.04 1.43.43 1.9 1.06l1.02 1.35c.49.66 1.23.66 1.72.01l1.01-1.34c.48-.64 1.18-1.02 1.92-1.06.74-.04 1.48.27 2.02.85.74.79 1.19.85 1.31.85.08 0 .15-.02.22-.08.28-.63.4-1.58.4-3v-9.92c0-1.4-.13-2.35-.4-2.98a.271.271 0 0 0-.22-.1c-.12 0-.57.06-1.31.85-.54.58-1.28.89-2.02.85-.75-.04-1.45-.43-1.93-1.06l-1.01-1.34c-.49-.66-1.23-.66-1.72 0l-1.02 1.36c-.47.63-1.16 1.01-1.9 1.05-.74.04-1.48-.27-2.02-.84-.61-.66-1.08-.88-1.34-.87-.06 0-.13.02-.21.1-.27.63-.4 1.58-.4 2.98v9.92c0 1.41.13 2.36.4 2.99.09.08.15.09.21.1.25.01.72-.21 1.33-.86.53-.57 1.22-.87 1.91-.87Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 11H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.5H8c-.41 0-.75-.34-.75-.75S7.59 13 8 13h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.04v9.92c0 1.52-.14 2.6-.5 3.37 0 .01-.01.03-.02.04-.22.28-.51.42-.85.42-.53 0-1.17-.35-1.86-1.09-.82-.88-2.08-.81-2.8.15l-1.01 1.34c-.4.54-.93.81-1.46.81-.53 0-1.06-.27-1.46-.81l-1.02-1.35c-.71-.95-1.96-1.02-2.78-.15l-.01.01c-1.13 1.21-2.13 1.39-2.71.67a.076.076 0 0 1-.02-.04c-.36-.77-.5-1.85-.5-3.37V7.04c0-1.52.14-2.6.5-3.37 0-.01 0-.02.02-.03.57-.73 1.58-.55 2.71.66l.01.01c.82.87 2.07.8 2.78-.15l1.02-1.35c.4-.54.93-.81 1.46-.81.53 0 1.06.27 1.46.81l1.01 1.34c.72.96 1.98 1.03 2.8.15.69-.74 1.33-1.09 1.86-1.09.34 0 .63.15.85.43.02.01.02.02.02.03.36.77.5 1.85.5 3.37Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8 10.25h8M8 13.75h6",
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

var Receipt2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Receipt2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Receipt2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Receipt2.displayName = 'Receipt2';

module.exports = Receipt2;
