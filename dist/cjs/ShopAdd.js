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
    d: "M7.8 22.148c-2.65 0-4.81-2.15-4.81-4.81v-2.84a.96.96 0 0 1 1.29-.9c.26.09.52.15.79.19.12.02.24.04.36.04.15.02.31.03.46.03 1.11 0 2.21-.41 3.08-1.12.83.71 1.9 1.12 3.04 1.12 1.14 0 2.2-.39 3.03-1.11.86.7 1.94 1.11 3.04 1.11.17 0 .35-.01.51-.03.12-.01.22-.02.33-.04.3-.04.57-.12.84-.21a.96.96 0 0 1 1.27.9v2.86c0 2.65-2.15 4.81-4.81 4.81H7.8Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.98 8.592-.28-2.66c-.4-2.9-1.72-4.08-4.54-4.08H6.82c-2.82 0-4.13 1.18-4.54 4.11l-.26 2.64c-.1 1.03.18 2.03.79 2.81.73.95 1.85 1.49 3.1 1.49 1.21 0 2.37-.61 3.1-1.58.65.97 1.77 1.58 3.01 1.58 1.24 0 2.33-.58 2.99-1.54.74.95 1.88 1.54 3.08 1.54 1.28 0 2.43-.57 3.15-1.57.58-.77.84-1.74.74-2.74Zm-8.48-.86h-.75v.78a.749.749 0 1 1-1.5 0v-.78h-.75a.749.749 0 1 1 0-1.5h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.04 15.519v-4.3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19ZM6.49 18.98H3.51M5 17.52v2.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.21 19.672c-.92 1.62-2.67 2.33-5.49 2.33H9.33c-.58 0-1.11-.03-1.6-.1M21.01 11.219v4.49M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99ZM2.64 5.6l-.28 2.75C2.16 10.36 3.64 12 5.66 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.61c-.91 0-1.63.12-2.19.39",
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
    d: "M21.05 11.71v5.99c0 2.76-2.24 5-5 5H7.31c-.23 0-.46-.02-.68-.05.37-.16.7-.38 1-.65.04-.03.07-.06.1-.1.27-.23.5-.52.69-.84.37-.6.58-1.31.58-2.06 0-1.05-.41-2-1.07-2.72-.1-.11-.21-.22-.33-.31C6.9 15.36 6 15 5 15c-.71 0-1.38.19-1.96.52-.19.1-.37.22-.54.36-.07.05-.13.11-.19.17v-4.27c.76.82 1.84 1.29 3.01 1.29 1.26 0 2.47-.63 3.23-1.64a3.754 3.754 0 0 0 3.13 1.64c1.28 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.21 0 2.31-.49 3.06-1.36Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.669 1.57h-6l-.74 7.36c-.06.68.04 1.32.29 1.9.58 1.36 1.94 2.24 3.46 2.24 1.54 0 2.87-.86 3.47-2.23.18-.43.29-.93.3-1.44v-.19l-.78-7.64Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".6",
    d: "m22.04 8.589-.28-2.78c-.42-3.02-1.79-4.25-4.72-4.25H13.2l.74 7.5c.01.1.02.21.02.4.06.52.22 1 .46 1.43.72 1.32 2.12 2.17 3.58 2.17 1.33 0 2.53-.59 3.28-1.63.59-.79.86-1.8.76-2.84ZM6.27 1.57c-2.94 0-4.3 1.23-4.73 4.28L1.27 8.6c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.46 0 2.86-.85 3.57-2.15.26-.45.43-.97.48-1.51l.78-7.83H6.27v-.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.93 16.28c-.1-.11-.21-.22-.33-.31C6.9 15.36 6 15 5 15c-.71 0-1.38.19-1.96.52-.19.1-.37.22-.54.36A3.97 3.97 0 0 0 1 19c0 .75.21 1.46.58 2.06.09.16.2.31.32.45.02.03.05.05.07.08C2.69 22.45 3.78 23 5 23c1.01 0 1.93-.37 2.63-1 .04-.03.07-.06.1-.1.27-.23.5-.52.69-.84.37-.6.58-1.31.58-2.06 0-1.05-.41-2-1.07-2.72ZM6.5 19.73h-.75v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.01 11.22v4.49c0 4.49-1.79 6.29-6.29 6.29H9.33c-.58 0-1.11-.03-1.6-.1M3.04 15.52v-4.3M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99ZM5.67 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.62C4 2 3 3 2.64 5.6l-.28 2.75C2.16 10.36 3.65 12 5.67 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19ZM6.49 18.98H3.51M5 17.52v2.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.72 22.751H9.33c-.64 0-1.2-.04-1.71-.11a.754.754 0 0 1-.64-.85c.06-.41.43-.71.85-.64.44.06.93.09 1.49.09h5.39c4.09 0 5.54-1.45 5.54-5.54v-4.49c0-.41.34-.75.75-.75s.75.34.75.75v4.49c.01 4.94-2.1 7.05-7.03 7.05ZM3.04 16.269c-.41 0-.75-.34-.75-.75v-4.3c0-.41.34-.75.75-.75s.75.34.75.75v4.3c0 .41-.34.75-.75.75ZM12.03 12.75c-1.1 0-2.1-.43-2.81-1.22s-1.04-1.82-.93-2.92l.67-6.68c.04-.38.36-.68.75-.68h4.67c.39 0 .71.29.75.68l.67 6.68c.11 1.1-.22 2.13-.93 2.92-.74.79-1.74 1.22-2.84 1.22Zm-1.66-10-.6 6.01c-.07.67.13 1.3.55 1.76.85.94 2.55.94 3.4 0 .42-.47.62-1.1.55-1.76l-.6-6.01h-3.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.33 12.75c-2.03 0-3.84-1.64-4.05-3.66l-.7-7.01c-.02-.21.05-.42.19-.58.14-.16.34-.25.56-.25h3.05c2.94 0 4.31 1.23 4.72 4.25l.28 2.78c.12 1.18-.24 2.3-1.01 3.15-.77.85-1.85 1.32-3.04 1.32Zm-3.17-10 .62 6.19c.13 1.25 1.3 2.31 2.55 2.31.76 0 1.44-.29 1.93-.82.48-.53.7-1.24.63-2l-.28-2.75c-.31-2.26-1.04-2.93-3.23-2.93h-2.22ZM5.67 12.75c-1.19 0-2.27-.47-3.04-1.32-.77-.85-1.13-1.97-1.01-3.15l.28-2.75c.42-3.05 1.79-4.28 4.73-4.28h3.05c.21 0 .41.09.56.25.14.16.21.37.19.58l-.7 7.01c-.22 2.02-2.04 3.66-4.06 3.66Zm.95-10c-2.19 0-2.92.66-3.24 2.95l-.27 2.72c-.08.76.15 1.47.63 2s1.17.82 1.93.82c1.26 0 2.43-1.06 2.55-2.31l.62-6.19H6.62v.01ZM5 23.75c-1.4 0-2.71-.61-3.61-1.68-.01-.01-.05-.05-.08-.1-.15-.18-.28-.36-.38-.55-.44-.71-.68-1.55-.68-2.43a4.712 4.712 0 0 1 2.44-4.15c.69-.39 1.5-.61 2.31-.61 1.16 0 2.23.4 3.09 1.15.11.08.26.23.39.37.81.89 1.26 2.03 1.26 3.22 0 .87-.24 1.72-.69 2.45-.22.38-.49.71-.79.97-.06.06-.12.12-.19.17-.79.77-1.9 1.19-3.07 1.19Zm-2.52-2.71c.03.03.08.08.12.15.55.65 1.45 1.07 2.4 1.07.79 0 1.55-.29 2.13-.81.03-.04.07-.08.12-.11.2-.17.37-.39.53-.65.31-.51.48-1.08.48-1.68 0-.81-.31-1.6-.87-2.21-.07-.08-.14-.16-.23-.22-1.08-.93-2.56-1.07-3.74-.4-.16.09-.3.18-.43.29-.78.62-1.23 1.54-1.23 2.54 0 .59.16 1.17.47 1.67.08.14.16.25.25.35-.01 0 0 0 0 .01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.5 19.73H3.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H6.5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 21.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.01 11.219v4.49c0 4.49-1.79 6.29-6.29 6.29H9.33c-.58 0-1.11-.03-1.6-.1M3.04 15.519v-4.3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.03 12c1.83 0 3.18-1.49 3-3.32L14.36 2H9.69l-.67 6.68C8.84 10.51 10.2 12 12.03 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.33 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.99 3 19.99 2 17.37 2h-3.05l.7 7.01c.18 1.65 1.66 2.99 3.31 2.99ZM5.67 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.62C4 2 3 3 2.64 5.6l-.28 2.75C2.16 10.36 3.65 12 5.67 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 19c0 .75-.21 1.46-.58 2.06-.19.32-.42.61-.69.84-.03.04-.06.07-.1.1-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45C1.21 20.46 1 19.75 1 19c0-1.26.58-2.39 1.5-3.12.17-.14.35-.26.54-.36C3.62 15.19 4.29 15 5 15c1 0 1.9.36 2.6.97.12.09.23.2.33.31C8.59 17 9 17.95 9 19Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.49 18.98H3.51M5 17.52v2.99"
  })));
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

var ShopAdd = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
ShopAdd.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
ShopAdd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ShopAdd.displayName = 'ShopAdd';

module.exports = ShopAdd;
