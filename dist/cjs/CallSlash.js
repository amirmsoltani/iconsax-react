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
    d: "M22 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.26.38-1.96.38-1.02 0-2.11-.24-3.26-.73a17.63 17.63 0 01-3.45-1.98c-.58-.43-1.15-.87-1.7-1.35l3.26-3.26c.01 0 .01 0 .02.01.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.32 2.35c.26.18.44.39.55.64.1.25.16.5.16.78zM10.76 13.24L7.5 16.5c-.01 0-.01 0-.02-.01a29.544 29.544 0 01-2.8-3.27c-.81-1.12-1.46-2.25-1.94-3.36-.01-.02-.01-.03-.02-.05C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.2-.51.5-.99.91-1.42.07-.08.15-.17.24-.25.16-.16.32-.3.49-.41h.01C4.51 2.17 5.04 2 5.6 2c.28 0 .56.06.81.18.24.11.45.27.62.5.02.02.03.04.05.06L9.4 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58l.02.02z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 001.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.32 18.97c.14.11.28.21.43.32 1.14.83 2.29 1.49 3.44 1.98s2.24.73 3.26.73c.7 0 1.35-.13 1.95-.38.61-.25 1.15-.64 1.64-1.18.29-.32.51-.66.68-1.02.17-.36.25-.73.25-1.09 0-.28-.06-.53-.16-.78-.11-.25-.29-.46-.55-.64l-3.31-2.35c-.25-.17-.48-.3-.7-.39-.22-.09-.42-.13-.61-.13-.25 0-.48.07-.71.21-.23.12-.47.31-.72.56l-.76.75a.55.55 0 0 1-.41.17.69.69 0 0 1-.25-.04c-.07-.03-.13-.06-.18-.08-.19-.1-.41-.24-.65-.42M7.07 2.74a1.63 1.63 0 0 0-.67-.56A1.88 1.88 0 0 0 5.59 2c-.74 0-1.44.31-2.08.94-.53.5-.91 1.06-1.15 1.67-.24.6-.36 1.25-.36 1.93 0 1.04.24 2.13.72 3.27.48 1.13 1.14 2.27 1.96 3.41.83 1.14 1.76 2.23 2.79 3.27M10.73 13.222c-.52-.53-1-1.06-1.45-1.58-.44-.52-.75-.95-.93-1.28-.02-.06-.05-.12-.08-.2a.908.908 0 0 1-.03-.23c0-.16.05-.29.16-.4l.76-.79c.24-.24.43-.48.56-.71.14-.23.21-.47.21-.71 0-.19-.05-.4-.14-.61-.09-.22-.22-.45-.4-.7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 2 2 22",
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
    d: "M22 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.26.38-1.96.38-1.02 0-2.11-.24-3.26-.73a17.63 17.63 0 0 1-3.45-1.98c-.58-.43-1.15-.87-1.7-1.35l3.26-3.26c.01 0 .01 0 .02.01.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.32 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M10.76 13.24 7.5 16.5c-.01 0-.01 0-.02-.01a29.544 29.544 0 0 1-2.8-3.27c-.81-1.12-1.46-2.25-1.94-3.36-.01-.02-.01-.03-.02-.05C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.2-.51.5-.99.91-1.42.07-.08.15-.17.24-.25.16-.16.32-.3.49-.41h.01C4.51 2.17 5.04 2 5.6 2c.28 0 .56.06.81.18.24.11.45.27.62.5.02.02.03.04.05.06L9.4 6.01c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58l.02.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.77 2.229c-.3-.3-.79-.3-1.09 0L2.23 20.689c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.32 18.97c.14.11.28.21.43.32 1.14.83 2.29 1.49 3.44 1.98s2.24.73 3.26.73c.7 0 1.35-.13 1.95-.38.61-.25 1.15-.64 1.64-1.18.29-.32.51-.66.68-1.02.17-.36.25-.73.25-1.09 0-.28-.06-.53-.16-.78-.11-.25-.29-.46-.55-.64l-3.31-2.35c-.25-.17-.48-.3-.7-.39-.22-.09-.42-.13-.61-.13-.25 0-.48.07-.71.21-.23.12-.47.31-.72.56l-.76.75a.55.55 0 0 1-.41.17.69.69 0 0 1-.25-.04c-.07-.03-.13-.06-.18-.08-.19-.1-.41-.24-.65-.42M10.73 13.22c-.52-.53-1-1.06-1.45-1.58-.44-.52-.75-.95-.93-1.28-.02-.06-.05-.12-.08-.2a.908.908 0 0 1-.03-.23c0-.16.05-.29.16-.4l.76-.79c.24-.24.43-.48.56-.71.14-.23.21-.47.21-.71 0-.19-.05-.4-.14-.61-.09-.22-.22-.45-.4-.7L7.07 2.74a1.63 1.63 0 0 0-.67-.56A1.88 1.88 0 0 0 5.59 2c-.74 0-1.44.31-2.08.94-.53.5-.91 1.06-1.15 1.67-.24.6-.36 1.25-.36 1.93 0 1.04.24 2.13.72 3.27.48 1.13 1.14 2.27 1.96 3.41.83 1.14 1.76 2.23 2.79 3.27",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 2 2 22",
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
    d: "M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06l-.44-.33a.749.749 0 1 1 .91-1.19l.42.31c1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5-.02-.05-.09-.17-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.26-.1-.43-.11-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3-.02-.01-.12-.05-.14-.06-.01-.01-.12-.05-.13-.06-.22-.11-.46-.27-.74-.47a.751.751 0 1 1 .88-1.22c.21.15.4.27.56.36l-.01.06.73-.73c.31-.31.61-.54.9-.69.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.36.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41-.21.45-.47.84-.8 1.2-.57.63-1.19 1.08-1.91 1.37-.69.29-1.44.44-2.23.44Zm-3.5-7.74-.16.68.27-.7c-.04-.01-.09 0-.11.02ZM7.47 17.24c-.19 0-.39-.07-.53-.22a28.11 28.11 0 0 1-2.86-3.36c-.86-1.2-1.55-2.39-2.04-3.56-.53-1.23-.79-2.43-.79-3.56 0-.78.14-1.52.41-2.21.29-.72.73-1.37 1.34-1.94.77-.75 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.48.56.95 1.06 1.41 1.54.29.3.29.77-.01 1.06-.3.29-.77.29-1.06-.01-.49-.5-.97-1.03-1.48-1.62-.47-.55-.81-1.02-1.02-1.41-.02-.04-.04-.08-.05-.12l-.07-.17a1.75 1.75 0 0 1-.08-.49c0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.08-.19-.19-.36-.33-.56L6.46 3.17a.922.922 0 0 0-.37-.31c-.15-.07-.32-.11-.5-.11-.55 0-1.06.24-1.55.72-.45.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26.8 1.1 1.71 2.17 2.71 3.18.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M10.32 18.97c.14.11.28.21.43.32 1.14.83 2.29 1.49 3.44 1.98s2.24.73 3.26.73c.7 0 1.35-.13 1.95-.38.61-.25 1.15-.64 1.64-1.18.29-.32.51-.66.68-1.02.17-.36.25-.73.25-1.09 0-.28-.06-.53-.16-.78-.11-.25-.29-.46-.55-.64l-3.31-2.35c-.25-.17-.48-.3-.7-.39-.22-.09-.42-.13-.61-.13-.25 0-.48.07-.71.21-.23.12-.47.31-.72.56l-.76.75a.55.55 0 0 1-.41.17.69.69 0 0 1-.25-.04c-.07-.03-.13-.06-.18-.08-.19-.1-.41-.24-.65-.42",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.73 13.22c-.52-.53-1-1.06-1.45-1.58-.44-.52-.75-.95-.93-1.28-.02-.06-.05-.12-.08-.2a.908.908 0 0 1-.03-.23c0-.16.05-.29.16-.4l.76-.79c.24-.24.43-.48.56-.71.14-.23.21-.47.21-.71 0-.19-.05-.4-.14-.61-.09-.22-.22-.45-.4-.7L7.07 2.74a1.63 1.63 0 0 0-.67-.56A1.88 1.88 0 0 0 5.59 2c-.74 0-1.44.31-2.08.94-.53.5-.91 1.06-1.15 1.67-.24.6-.36 1.25-.36 1.93 0 1.04.24 2.13.72 3.27.48 1.13 1.14 2.27 1.96 3.41.83 1.14 1.76 2.23 2.79 3.27",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 2 2 22",
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

var CallSlash = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
CallSlash.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
CallSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CallSlash.displayName = 'CallSlash';

module.exports = CallSlash;
