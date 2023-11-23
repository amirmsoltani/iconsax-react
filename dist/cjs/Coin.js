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
    d: "M12 22.748c-4 0-7.25-2.87-7.25-6.4v-3.7c0-.41.34-.75.75-.75s.75.34.75.75c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6c0-.41.34-.75.75-.75s.75.34.75.75v3.7c0 3.53-3.25 6.4-7.25 6.4Zm-5.75-6.29c.07 2.65 2.62 4.79 5.75 4.79s5.68-2.14 5.75-4.79c-1.3 1.41-3.36 2.29-5.75 2.29s-4.44-.88-5.75-2.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 13.75c-2.76 0-5.24-1.24-6.45-3.24-.52-.85-.8-1.84-.8-2.86 0-1.72.77-3.34 2.16-4.56C8.27 1.9 10.08 1.25 12 1.25s3.72.65 5.09 1.83c1.39 1.23 2.16 2.85 2.16 4.57 0 1.02-.28 2-.8 2.86-1.21 2-3.69 3.24-6.45 3.24Zm0-11c-1.56 0-3.02.52-4.11 1.48-1.06.92-1.64 2.14-1.64 3.42 0 .75.2 1.45.58 2.08.95 1.56 2.93 2.52 5.17 2.52 2.24 0 4.22-.97 5.17-2.52.39-.63.58-1.33.58-2.08 0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 18.75c-4.13 0-7.25-2.62-7.25-6.1v-5c0-3.53 3.25-6.4 7.25-6.4 1.92 0 3.72.65 5.09 1.83 1.39 1.23 2.16 2.85 2.16 4.57v5c0 3.48-3.12 6.1-7.25 6.1Zm0-16c-3.17 0-5.75 2.2-5.75 4.9v5c0 2.62 2.47 4.6 5.75 4.6s5.75-1.98 5.75-4.6v-5c0-1.28-.58-2.5-1.65-3.44-1.09-.94-2.54-1.46-4.1-1.46Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 21.998c3.59 0 6.5-2.53 6.5-5.65v-3.7c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v3.7c0 1.71.87 3.24 2.25 4.27",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
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
    d: "M18.5 12.648v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7c0 3.12 2.91 5.35 6.5 5.35s6.5-2.23 6.5-5.35Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.5 7.648v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5c0 .91.25 1.75.69 2.47 1.07 1.76 3.27 2.88 5.81 2.88 2.54 0 4.74-1.12 5.81-2.88.44-.72.69-1.56.69-2.47Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 12.65v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7C5.5 15.77 8.41 18 12 18s6.5-2.23 6.5-5.35Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
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
    d: "M10.84 13.54h-1.5c-1.15 0-2.08-.96-2.08-2.15 0-.41.34-.75.75-.75s.75.34.75.75c0 .36.26.65.58.65h1.5c.23 0 .41-.21.41-.47 0-.35-.06-.37-.29-.45l-2.41-.84c-.87-.3-1.3-.91-1.3-1.86 0-1.08.86-1.97 1.91-1.97h1.5c1.15 0 2.08.96 2.08 2.15 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.36-.26-.65-.58-.65h-1.5c-.23 0-.41.21-.41.47 0 .35.06.37.29.45l2.41.84c.87.31 1.29.92 1.29 1.86.01 1.09-.85 1.97-1.9 1.97Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 14.342c-.41 0-.75-.34-.75-.75v-.74c0-.41.34-.75.75-.75s.75.34.75.75v.74c0 .42-.34.75-.75.75ZM10 7.94c-.41 0-.75-.34-.75-.75v-.78c0-.41.34-.75.75-.75s.75.34.75.75v.78c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.99 18.718c-4.82 0-8.74-3.92-8.74-8.74s3.92-8.74 8.74-8.74 8.74 3.92 8.74 8.74-3.93 8.74-8.74 8.74Zm0-15.97c-3.99 0-7.24 3.25-7.24 7.24s3.25 7.23 7.24 7.23 7.24-3.25 7.24-7.24-3.25-7.23-7.24-7.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.021 22.718a5.7 5.7 0 0 1-4.66-2.42.753.753 0 1 1 1.23-.87 4.197 4.197 0 0 0 7.63-2.42c0-1.35-.66-2.63-1.76-3.42a.751.751 0 1 1 .88-1.22 5.72 5.72 0 0 1 2.38 4.64 5.7 5.7 0 0 1-5.7 5.71Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.5 12.648v3.7c0 3.12-2.91 5.65-6.5 5.65s-6.5-2.53-6.5-5.65v-3.7c0 3.12 2.91 5.35 6.5 5.35s6.5-2.23 6.5-5.35Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65c0 .91-.25 1.75-.69 2.47C16.74 11.88 14.54 13 12 13c-2.54 0-4.74-1.12-5.81-2.88-.44-.72-.69-1.56-.69-2.47 0-1.56.73-2.97 1.9-3.99C8.58 2.63 10.2 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 7.65v5c0 3.12-2.91 5.35-6.5 5.35s-6.5-2.23-6.5-5.35v-5C5.5 4.53 8.41 2 12 2c1.8 0 3.42.63 4.6 1.65 1.17 1.03 1.9 2.44 1.9 4Z",
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

var Coin = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Coin.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Coin.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Coin.displayName = 'Coin';

module.exports = Coin;