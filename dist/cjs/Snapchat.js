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
    fill: color,
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.31 13.31c-.29.16-.53.23-.73.28-.17.04-.31.08-.43.16-.13.08-.14.21-.16.33-.02.11-.03.2-.11.26-.09.06-.26.07-.49.08-.3.02-.68.03-1.14.17-.22.08-.42.2-.62.32-.4.25-.85.52-1.64.52-.78 0-1.23-.27-1.63-.52-.2-.13-.4-.25-.63-.33a4.13 4.13 0 00-1.14-.17c-.23-.01-.39-.02-.49-.08-.08-.05-.09-.15-.11-.26-.02-.12-.03-.25-.16-.33-.12-.08-.27-.12-.43-.17-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35-.09-.09-.4-.29-.65-.45-.11-.08-.21-.14-.27-.17-.28-.2-.4-.39-.31-.64.06-.17.22-.23.38-.23.05 0 .11.01.15.02.18.04.36.11.52.17.11.05.2.08.27.1.02.01.05.01.06.01.1 0 .13-.05.12-.15 0-.03 0-.06-.01-.09-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63.16-.18.89-.95 2.28-.95 1.4 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03c-.01.11.02.15.12.15.02 0 .04 0 .06-.01.07-.02.16-.05.27-.09.15-.06.33-.13.52-.17.05-.02.1-.02.15-.02.17 0 .32.07.38.24.09.24-.03.43-.31.63-.05.04-.15.11-.27.17-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "M17.31 15.309c-.29.16-.53.23-.73.28-.17.04-.31.08-.43.16-.13.08-.14.21-.16.33-.02.11-.03.2-.11.26-.09.06-.26.07-.49.08-.3.02-.68.03-1.14.17-.22.08-.42.2-.62.32-.4.25-.85.52-1.64.52-.78 0-1.23-.27-1.63-.52-.2-.13-.4-.25-.63-.33a4.13 4.13 0 0 0-1.14-.17c-.23-.01-.39-.02-.49-.08-.08-.05-.09-.15-.11-.26-.02-.12-.03-.25-.16-.33-.12-.08-.27-.12-.43-.17-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35-.09-.09-.4-.29-.65-.45-.11-.08-.21-.14-.27-.17-.28-.2-.4-.39-.31-.64.06-.17.22-.23.38-.23.05 0 .11.01.15.02.18.04.36.11.52.17.11.05.2.08.27.1.02.01.05.01.06.01.1 0 .13-.05.12-.15 0-.03 0-.06-.01-.09-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63.16-.18.89-.95 2.28-.95 1.39 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03c-.01.11.02.15.12.15.02 0 .04 0 .06-.01.07-.02.16-.05.27-.09.15-.06.33-.13.52-.17.05-.02.1-.02.15-.02.17 0 .32.07.38.24.09.24-.03.43-.31.63-.05.04-.15.11-.27.17-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.31 15.309c-.29.16-.53.23-.73.28-.17.04-.31.08-.43.16-.13.08-.14.21-.16.33-.02.11-.03.2-.11.26-.09.06-.26.07-.49.08-.3.02-.68.03-1.14.17-.22.08-.42.2-.62.32-.4.25-.85.52-1.64.52-.78 0-1.23-.27-1.63-.52-.2-.13-.4-.25-.63-.33a4.13 4.13 0 0 0-1.14-.17c-.23-.01-.39-.02-.49-.08-.08-.05-.09-.15-.11-.26-.02-.12-.03-.25-.16-.33-.12-.08-.27-.12-.43-.17-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35-.09-.09-.4-.29-.65-.45-.11-.08-.21-.14-.27-.17-.28-.2-.4-.39-.31-.64.06-.17.22-.23.38-.23.05 0 .11.01.15.02.18.04.36.11.52.17.11.05.2.08.27.1.02.01.05.01.06.01.1 0 .13-.05.12-.15 0-.03 0-.06-.01-.09-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63.16-.18.89-.95 2.28-.95 1.39 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03c-.01.11.02.15.12.15.02 0 .04 0 .06-.01.07-.02.16-.05.27-.09.15-.06.33-.13.52-.17.05-.02.1-.02.15-.02.17 0 .32.07.38.24.09.24-.03.43-.31.63-.05.04-.15.11-.27.17-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "M17.3 15.3c-.3.2-.5.2-.7.3-.2 0-.3.1-.4.2-.2 0-.2.2-.2.3 0 .1 0 .2-.1.3-.1.1-.3.1-.5.1-.3 0-.7 0-1.1.2l-.6.3c-.4.3-.8.5-1.6.5s-1.2-.3-1.6-.5c-.2-.1-.4-.3-.6-.3-.4-.1-.8-.2-1.1-.2-.2 0-.4 0-.5-.1-.3-.1-.3-.2-.3-.3 0-.1 0-.3-.2-.3-.1-.1-.3-.1-.4-.2-.2-.1-.4-.1-.7-.3-.3-.2-.1-.3 0-.4 1.9-.9 2.2-2.4 2.2-2.5 0-.1 0-.2-.1-.3-.1-.1-.4-.3-.7-.4-.1-.1-.2-.1-.3-.2-.3-.2-.4-.4-.3-.6.1-.2.2-.2.4-.2h.2c.2 0 .4.1.5.2.1 0 .2.1.3.1H9c.1 0 .1 0 .1-.2v-.1c0-.3-.1-1 0-1.5.1-.8.3-1.3.7-1.6.2-.2.9-.9 2.3-.9s2.1.8 2.3.9c.3.4.6.8.7 1.6.1.6 0 1.2 0 1.6 0 .1 0 .2.1.2h.1c.1 0 .2-.1.3-.1.2-.1.3-.1.5-.2h.2c.2 0 .3.1.4.2.1.2 0 .4-.3.6-.1 0-.2.1-.3.2-.2.2-.6.4-.7.4-.1.1-.1.2-.1.3 0 .1.3 1.5 2.2 2.5 0 .1.2.2-.2.4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 18.18c-1.02 0-1.63-.38-2.03-.63-.19-.12-.33-.2-.47-.25-.33-.11-.64-.12-.91-.14-.31-.01-.62-.02-.89-.2a1 1 0 0 1-.41-.64c-.02-.01-.04-.01-.06-.02-.26-.07-.55-.15-.9-.34-.52-.29-.58-.68-.58-.89.01-.2.09-.58.59-.81 1.21-.58 1.63-1.39 1.76-1.74-.11-.07-.24-.15-.36-.23l-.31-.2c-.82-.57-.68-1.25-.58-1.51.16-.44.57-.71 1.08-.71.1 0 .19.01.28.03.02 0 .03.01.05.01 0-.31 0-.58.02-.82.1-1.07.48-1.64.85-2.06.32-.36 1.23-1.21 2.85-1.21 1.11 0 2.15.43 2.84 1.18.4.47.77 1.03.86 2.08.02.28.03.56.03.82h.02c.04-.02.17-.04.3-.04.51 0 .92.28 1.08.73.1.25.24.92-.58 1.5-.06.04-.17.12-.31.2-.13.08-.25.16-.35.23.14.36.57 1.16 1.77 1.75.48.26.58.59.58.83 0 .25-.1.6-.58.86-.35.19-.65.28-.9.35-.02 0-.04.01-.07.02-.05.21-.14.45-.39.62-.29.19-.59.2-.89.21a3.4 3.4 0 0 0-.94.14c-.12.04-.26.13-.43.23-.42.28-1.01.65-2.02.65Zm-3.31-2.51c.34.02.78.05 1.28.21.3.1.54.24.8.4.33.21.64.4 1.23.4.58 0 .89-.19 1.24-.41.25-.15.49-.29.78-.39.54-.17.99-.2 1.3-.21.06-.19.19-.39.43-.55.08-.05.15-.09.24-.13-1.42-1.08-1.62-2.35-1.63-2.42v-.04c-.03-.19-.06-.59.32-.96a.763.763 0 0 1-.26-.19c-.12-.12-.25-.34-.22-.69.02-.42.06-.98.02-1.48-.06-.67-.26-.95-.49-1.22-.22-.24-.76-.68-1.71-.68-1.03 0-1.58.53-1.72.69-.22.25-.42.54-.48 1.2-.03.37-.03.85.01 1.4.01.05.01.11.01.14.02.29-.11.51-.23.63a.83.83 0 0 1-.26.19c.39.37.35.78.32.97v.04c-.01.06-.21 1.33-1.62 2.41.08.04.17.08.25.14.21.16.33.37.39.55Zm8.62-.36-.35-.66s-.01 0-.01.01l.36.65-.36-.65.36.65Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M17.31 15.309c-.29.16-.53.23-.73.28-.17.04-.31.08-.43.16-.13.08-.14.21-.16.33-.02.11-.03.2-.11.26-.09.06-.26.07-.49.08-.3.02-.68.03-1.14.17-.22.08-.42.2-.62.32-.4.25-.85.52-1.64.52-.78 0-1.23-.27-1.63-.52-.2-.13-.4-.25-.63-.33a4.13 4.13 0 0 0-1.14-.17c-.23-.01-.39-.02-.49-.08-.08-.05-.09-.15-.11-.26-.02-.12-.03-.25-.16-.33-.12-.08-.27-.12-.43-.17-.2-.05-.44-.11-.73-.27-.34-.19-.14-.3-.03-.36 1.93-.93 2.23-2.37 2.24-2.48v-.02c.02-.12.03-.22-.11-.35-.09-.09-.4-.29-.65-.45-.11-.08-.21-.14-.27-.17-.28-.2-.4-.39-.31-.64.06-.17.22-.23.38-.23.05 0 .11.01.15.02.18.04.36.11.52.17.11.05.2.08.27.1.02.01.05.01.06.01.1 0 .13-.05.12-.15 0-.03 0-.06-.01-.09-.02-.35-.05-.96-.01-1.52.08-.84.35-1.27.67-1.63.16-.18.89-.95 2.28-.95 1.39 0 2.12.77 2.28.94.32.37.59.79.67 1.64.05.59.01 1.22-.02 1.57v.03c-.01.11.02.15.12.15.02 0 .04 0 .06-.01.07-.02.16-.05.27-.09.15-.06.33-.13.52-.17.05-.02.1-.02.15-.02.17 0 .32.07.38.24.09.24-.03.43-.31.63-.05.04-.15.11-.27.17-.24.16-.56.36-.65.45-.14.13-.13.23-.11.35v.02c.02.11.32 1.55 2.24 2.48.15.06.35.18.01.37Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Snapchat = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Snapchat.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Snapchat.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Snapchat.displayName = 'Snapchat';

module.exports = Snapchat;
