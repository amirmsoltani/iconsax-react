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
    d: "m19.23 4.18.13-.24a.76.76 0 0 0-.09-.85.74.74 0 0 0-.83-.21 18.76 18.76 0 0 1-12.88 0 .744.744 0 0 0-.83.21c-.2.24-.24.57-.09.85l.13.23a16.826 16.826 0 0 1-.1 15.88.76.76 0 0 0 .09.85c.2.24.53.32.82.21 4.13-1.51 8.69-1.51 12.83 0 .08.03.17.05.26.05.21 0 .42-.09.57-.26.2-.24.24-.57.09-.85a16.834 16.834 0 0 1-.1-15.87Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.7 4.332c-.31 0-.59-.19-.7-.49-.14-.39.06-.82.44-.96 1.08-.4 2.14-.91 3.18-1.52.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03a20.98 20.98 0 0 1-3.42 1.64c-.1.03-.18.04-.27.04ZM5.3 4.33c-.09 0-.17-.01-.26-.05-1.16-.42-2.31-.98-3.42-1.64a.73.73 0 0 1-.26-1.02c.21-.36.67-.47 1.03-.26 1.03.61 2.1 1.12 3.18 1.52.38.14.58.57.43.96-.11.3-.4.49-.7.49ZM22 22.75a.67.67 0 0 1-.38-.11c-1.03-.61-2.1-1.13-3.2-1.53a.75.75 0 1 1 .51-1.41c1.19.43 2.35.99 3.46 1.65.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM2 22.75c-.25 0-.5-.13-.64-.37-.21-.36-.1-.82.26-1.03 1.11-.66 2.27-1.22 3.46-1.65a.75.75 0 1 1 .51 1.41c-1.1.4-2.18.92-3.2 1.53-.13.08-.26.11-.39.11Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 2a19.45 19.45 0 0 0 20 0M2 22.002a19.45 19.45 0 0 1 20 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.87 7.512c1.13 4.3.62 8.91-1.53 12.89M18.67 20.408a17.683 17.683 0 0 1-.1-16.59l.13-.24",
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
    d: "m19.23 4.18.13-.24a.76.76 0 0 0-.09-.85.74.74 0 0 0-.83-.21 18.76 18.76 0 0 1-12.88 0 .765.765 0 0 0-.83.21c-.2.24-.24.57-.09.85l.13.23a16.826 16.826 0 0 1-.1 15.88.76.76 0 0 0 .09.85c.2.24.53.32.82.21 4.13-1.51 8.69-1.51 12.83 0 .08.03.17.05.26.05.21 0 .42-.09.57-.26.2-.24.24-.57.09-.85a16.834 16.834 0 0 1-.1-15.87Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.7 4.332c-.31 0-.59-.19-.7-.49-.14-.39.06-.82.44-.96 1.08-.4 2.14-.91 3.18-1.52.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03a20.98 20.98 0 0 1-3.42 1.64c-.1.03-.18.04-.27.04ZM5.3 4.328c-.09 0-.17-.01-.26-.05a20.98 20.98 0 0 1-3.42-1.64.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26 1.03.61 2.1 1.12 3.18 1.52.39.14.59.58.44.96a.77.77 0 0 1-.71.5ZM22 22.75a.67.67 0 0 1-.38-.11c-1.03-.61-2.1-1.13-3.2-1.53a.75.75 0 1 1 .51-1.41c1.19.43 2.35.99 3.46 1.65.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM2 22.75c-.25 0-.5-.13-.64-.37-.21-.36-.1-.82.26-1.03 1.11-.66 2.27-1.22 3.46-1.65a.75.75 0 1 1 .51 1.41c-1.1.4-2.18.92-3.2 1.53-.13.08-.26.11-.39.11Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 2a19.45 19.45 0 0 0 20 0M2 22a19.45 19.45 0 0 1 20 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m5.3 3.58.13.24a17.627 17.627 0 0 1-.1 16.59M18.67 20.41a17.683 17.683 0 0 1-.1-16.59l.13-.24",
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
    d: "M12 5.53c-3.59 0-7.18-.96-10.39-2.88a.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26 5.93 3.56 13.3 3.56 19.23 0a.751.751 0 1 1 .77 1.29C19.18 4.57 15.59 5.53 12 5.53ZM22 22.749c-.13 0-.26-.03-.39-.11a18.647 18.647 0 0 0-19.23 0c-.35.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03a20.164 20.164 0 0 1 20.77 0c.36.21.47.67.26 1.03-.14.24-.39.37-.64.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.33 21.16c-.12 0-.24-.03-.36-.09-.36-.2-.5-.65-.3-1.02 2.68-4.96 2.71-10.9.09-15.88l-.12-.24a.746.746 0 0 1 .32-1.01c.37-.19.82-.05 1.01.32l.12.24a18.38 18.38 0 0 1-.1 17.29c-.13.25-.39.39-.66.39ZM18.671 21.16c-.27 0-.52-.14-.66-.39a18.38 18.38 0 0 1-.1-17.29l.12-.24a.75.75 0 1 1 1.33.69l-.12.24a16.882 16.882 0 0 0 .09 15.88c.2.37.06.82-.3 1.02-.12.06-.24.09-.36.09Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 2a19.45 19.45 0 0 0 20 0M2 22.002a19.45 19.45 0 0 1 20 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m5.3 3.578.13.24a17.627 17.627 0 0 1-.1 16.59M18.67 20.408a17.683 17.683 0 0 1-.1-16.59l.13-.24",
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

var Gemini = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Gemini.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Gemini.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Gemini.displayName = 'Gemini';

module.exports = Gemini;
