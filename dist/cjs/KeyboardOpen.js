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
    d: "M17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 2H6C3.79 2 2 3.79 2 6v9c0 2.21 1.79 4 4 4h12c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4ZM9.99 7.32c.56 0 1.01.45 1.01 1s-.45 1-1 1-1-.45-1-1 .44-1 .99-1Zm-3.15 0c.56 0 1.01.45 1.01 1s-.45 1-1 1-1-.45-1-1 .43-1 .99-1Zm10.42 7.54H6.76c-.42 0-.76-.34-.76-.75s.33-.75.74-.75h10.53c.41 0 .75.34.75.75s-.34.75-.76.75Zm0-5.79h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 7.26c0-3.56.75-4.86 3.52-5.17C6.04 2.02 6.61 2 7.27 2h9.47c.65 0 1.23.02 1.75.09 2.77.31 3.52 1.61 3.52 5.17v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.27c-.65 0-1.23-.02-1.75-.09C2.75 18.44 2 17.14 2 13.58V11.1M13.58 8.32h3.68M6.74 14.11h10.53M7 22h10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.194 8.3h.009M10.495 8.3h.009",
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
    d: "M17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18 19H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v9c0 2.21-1.79 4-4 4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.26 9.07h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5ZM10 9.32c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1ZM6.85 9.32c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM17.26 14.86H6.75c-.41 0-.76-.34-.76-.75s.33-.75.74-.75h10.53a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 2h9.47c.65 0 1.23.02 1.75.09C21.25 2.4 22 3.7 22 7.26v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.26c-.65 0-1.23-.02-1.75-.09-2.77-.31-3.52-1.61-3.52-5.17V7.26c0-3.56.75-4.86 3.52-5.17.52-.07 1.1-.09 1.75-.09ZM13.58 8.32h3.68M6.74 14.11h10.53M7 22h10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.195 8.3h.009M10.495 8.3h.009",
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
    d: "M16.74 19.59H7.27c-.79 0-1.36-.03-1.85-.1-3.47-.38-4.16-2.46-4.16-5.91V7.26c0-3.45.68-5.53 4.18-5.91.48-.07 1.05-.1 1.83-.1h9.47c.78 0 1.35.03 1.85.1 3.48.38 4.16 2.46 4.16 5.91v6.32c0 3.45-.68 5.53-4.18 5.91-.47.07-1.04.1-1.83.1ZM7.26 2.75c-.71 0-1.22.03-1.64.09-2.16.24-2.87.91-2.87 4.43v6.32c0 3.51.71 4.19 2.85 4.42.44.06.95.09 1.67.09h9.47c.72 0 1.22-.03 1.64-.09 2.16-.24 2.87-.91 2.87-4.43V7.26c0-3.51-.71-4.19-2.85-4.42-.45-.06-.95-.09-1.67-.09H7.26Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.26 9.07h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5ZM10 9.32c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1ZM6.85 9.32c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM17.26 14.86H6.75c-.41 0-.76-.34-.76-.75s.33-.75.74-.75h10.53a.749.749 0 1 1 0 1.5ZM17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.26 2h9.47c.65 0 1.23.02 1.75.09C21.25 2.4 22 3.7 22 7.26v6.32c0 3.56-.75 4.86-3.52 5.17-.52.07-1.09.09-1.75.09H7.26c-.65 0-1.23-.02-1.75-.09-2.77-.31-3.52-1.61-3.52-5.17V7.26c0-3.56.75-4.86 3.52-5.17.52-.07 1.1-.09 1.75-.09Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M13.58 8.32h3.68M6.74 14.11h10.53M7 22h10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M7.194 8.3h.009M10.495 8.3h.009",
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

var KeyboardOpen = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
KeyboardOpen.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
KeyboardOpen.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
KeyboardOpen.displayName = 'KeyboardOpen';

module.exports = KeyboardOpen;