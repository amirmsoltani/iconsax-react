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
    d: "m17.6 5.311-5.65-3.04a2.02 2.02 0 0 0-1.91 0L4.4 5.311c-.41.23-.67.67-.67 1.15 0 .49.25.93.67 1.15l5.65 3.04a2 2 0 0 0 1.9 0l5.65-3.04c.41-.22.67-.66.67-1.15 0-.48-.26-.92-.67-1.15ZM9.12 11.71 3.87 9.09A1.286 1.286 0 0 0 2 10.24v4.96c0 .86.48 1.63 1.25 2.02l5.25 2.62c.18.09.38.14.58.14.23 0 .47-.07.68-.19.38-.24.61-.65.61-1.1v-4.96c-.01-.86-.49-1.63-1.25-2.02ZM20 10.24v2.46c-.48-.14-.99-.2-1.5-.2-1.36 0-2.69.47-3.74 1.31-1.44 1.13-2.26 2.84-2.26 4.69 0 .49.06.98.19 1.45-.15-.02-.3-.08-.44-.17-.38-.23-.61-.64-.61-1.09v-4.96c0-.86.48-1.63 1.24-2.02l5.25-2.62A1.286 1.286 0 0 1 20 10.24Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m22.58 21.499-.84-.84c.44-.66.7-1.46.7-2.31a4.22 4.22 0 1 0-4.22 4.22c.85 0 1.65-.26 2.31-.7l.84.84c.17.17.38.25.6.25.22 0 .44-.08.6-.25.34-.34.34-.88.01-1.21Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m3.172 7.441 8.83 5.11 8.77-5.08M12 21.613v-9.07M14.07 21.518c-.57.32-1.32.48-2.07.48-.75 0-1.5-.16-2.07-.48l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.61 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96c-1.14-.64-3-.64-4.14 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73M19.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM23 22l-1-1",
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
    d: "M20.098 6.94c0 .54-.29 1.03-.75 1.28l-1.74.94-1.48.79-3.07 1.66c-.33.18-.69.27-1.06.27-.37 0-.73-.09-1.06-.27l-6.29-3.39c-.46-.25-.75-.74-.75-1.28s.29-1.03.75-1.28l1.97-1.06 1.57-.85 2.75-1.48c.66-.36 1.46-.36 2.12 0l6.29 3.39c.46.25.75.74.75 1.28ZM9.899 12.788l-5.85-2.93c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.94-.52-1.8-1.38-2.23ZM22.03 11.15v5.53c0 .95-.529 1.81-1.389 2.24l-5.85 2.93a1.433 1.433 0 0 1-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l2.15-1.07 1.5-.75 2.2-1.1c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m22.598 21.639-.76-.76c.4-.6.63-1.32.63-2.09a3.82 3.82 0 1 0-3.82 3.82c.77 0 1.49-.23 2.09-.63l.76.76c.15.15.35.23.55.23a.78.78 0 0 0 .55-1.33Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.61 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96c-1.14-.64-3-.64-4.14 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73v5.66c0 1.38.99 3.06 2.2 3.73l5.34 2.96c.57.32 1.32.48 2.07.48.75 0 1.5-.16 2.07-.48",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM23 22l-1-1",
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
    d: "M12.001 13.3c-.13 0-.26-.03-.38-.1l-8.83-5.11a.752.752 0 0 1-.27-1.03.75.75 0 0 1 1.03-.27l8.45 4.89 8.4-4.86a.76.76 0 0 1 1.03.27c.21.36.08.82-.27 1.03l-8.77 5.08a.94.94 0 0 1-.39.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.36c-.41 0-.75-.34-.75-.75v-9.07c0-.41.34-.75.75-.75s.75.34.75.75v9.07c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.999 22.748c-.91 0-1.78-.21-2.44-.58l-5.34-2.96c-1.45-.8-2.59-2.73-2.59-4.39v-5.66c0-1.66 1.14-3.58 2.59-4.39l5.34-2.96c1.36-.76 3.5-.76 4.87 0l5.34 2.96c1.45.8 2.59 2.73 2.59 4.39v3.66c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.66c0-1.1-.85-2.54-1.81-3.07l-5.34-2.96c-.91-.51-2.5-.51-3.41 0l-5.34 2.96c-.97.54-1.81 1.97-1.81 3.07v5.66c0 1.1.85 2.54 1.81 3.07l5.34 2.96c.88.49 2.54.49 3.41 0 .36-.2.82-.07 1.02.29.2.36.07.82-.29 1.02-.66.38-1.53.59-2.44.59Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.2 22.15c-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95 3.95 1.77 3.95 3.95-1.77 3.95-3.95 3.95Zm0-6.4c-1.35 0-2.45 1.1-2.45 2.45s1.1 2.45 2.45 2.45 2.45-1.1 2.45-2.45-1.1-2.45-2.45-2.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M23.001 22.751c-.19 0-.38-.07-.53-.22l-1-1a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m3.172 7.441 8.83 5.11 8.77-5.08M12 21.613v-9.07",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.61 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96c-1.14-.64-3-.64-4.14 0L4.59 5.44c-1.21.67-2.2 2.35-2.2 3.73v5.66c0 1.38.99 3.06 2.2 3.73l5.34 2.96c.57.32 1.32.48 2.07.48.75 0 1.5-.16 2.07-.48",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM23 22l-1-1"
  })));
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

var BoxSearch = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BoxSearch.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
BoxSearch.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BoxSearch.displayName = 'BoxSearch';

module.exports = BoxSearch;
