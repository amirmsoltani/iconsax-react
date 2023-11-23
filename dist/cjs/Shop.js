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
    d: "m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25H6.59c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.26 0 2.47-.63 3.23-1.64A3.754 3.754 0 0 0 12 12.75c1.29 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85ZM11.35 16.66a2.495 2.495 0 0 0-2.23 2.49v2.74c0 .27.22.49.49.49h4.77c.27 0 .49-.22.49-.49V19.5c.01-2.09-1.22-3.08-3.52-2.84Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.37 14.398v2.98c0 2.76-2.24 5-5 5a.49.49 0 0 1-.49-.49v-2.39c0-1.28-.39-2.28-1.15-2.96-.67-.61-1.58-.91-2.71-.91-.25 0-.5.01-.77.04a3.485 3.485 0 0 0-3.13 3.48v2.74c0 .27-.22.49-.49.49-2.76 0-5-2.24-5-5v-2.96a1 1 0 0 1 1.34-.94c.27.09.54.16.82.2.12.02.25.04.37.04.16.02.32.03.48.03 1.16 0 2.3-.43 3.2-1.17.86.74 1.98 1.17 3.16 1.17 1.19 0 2.29-.41 3.15-1.15.9.73 2.02 1.15 3.16 1.15.18 0 .36-.01.53-.03a4.818 4.818 0 0 0 1.21-.26.997.997 0 0 1 1.32.94Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.01 15.709c0 4.49 1.8 6.29 6.29 6.29h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z",
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
    d: "M21.37 11.39v5.99c0 2.76-2.24 5-5 5H7.63c-2.76 0-5-2.24-5-5v-5.92c.76.82 1.84 1.29 3.01 1.29 1.26 0 2.47-.63 3.23-1.64A3.754 3.754 0 0 0 12 12.75c1.28 0 2.42-.6 3.11-1.6.77.99 1.96 1.6 3.2 1.6 1.21 0 2.31-.49 3.06-1.36Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.99 1.25h-6l-.74 7.36c-.06.68.04 1.32.29 1.9.58 1.36 1.94 2.24 3.46 2.24 1.54 0 2.87-.86 3.47-2.23.18-.43.29-.93.3-1.44v-.19l-.78-7.64Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".6",
    d: "m22.36 8.27-.29-2.77c-.42-3.02-1.79-4.25-4.72-4.25h-3.84l.74 7.5c.01.1.02.21.02.4.06.52.22 1 .46 1.43.72 1.32 2.12 2.17 3.58 2.17 1.33 0 2.53-.59 3.28-1.63.6-.8.87-1.81.77-2.85ZM6.59 1.25c-2.94 0-4.3 1.23-4.73 4.28l-.27 2.75c-.1 1.07.19 2.11.82 2.92.76.99 1.93 1.55 3.23 1.55 1.46 0 2.86-.85 3.57-2.15.26-.45.43-.97.48-1.51l.78-7.83H6.59v-.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.35 16.66a2.495 2.495 0 0 0-2.23 2.49v3.23h5.75V19.5c.01-2.09-1.22-3.08-3.52-2.84Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z",
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
    d: "M14.7 22.749H9.3c-4.94 0-7.04-2.11-7.04-7.04v-4.49c0-.41.34-.75.75-.75s.75.34.75.75v4.49c0 4.09 1.45 5.54 5.54 5.54h5.39c4.09 0 5.54-1.45 5.54-5.54v-4.49c0-.41.34-.75.75-.75s.75.34.75.75v4.49c.01 4.93-2.1 7.04-7.03 7.04Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.999 12.75c-1.1 0-2.1-.43-2.81-1.22s-1.04-1.82-.93-2.92l.67-6.68c.04-.38.36-.68.75-.68h4.67c.39 0 .71.29.75.68l.67 6.68c.11 1.1-.22 2.13-.93 2.92-.74.79-1.74 1.22-2.84 1.22Zm-1.65-10-.6 6.01c-.07.67.13 1.3.55 1.76.85.94 2.55.94 3.4 0 .42-.47.62-1.1.55-1.76l-.6-6.01h-3.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.31 12.75c-2.03 0-3.84-1.64-4.05-3.66l-.7-7.01c-.02-.21.05-.42.19-.58.14-.16.34-.25.56-.25h3.05c2.94 0 4.31 1.23 4.72 4.25l.28 2.78c.12 1.18-.24 2.3-1.01 3.15-.77.85-1.85 1.32-3.04 1.32Zm-3.17-10 .62 6.19c.13 1.25 1.29 2.31 2.55 2.31.76 0 1.44-.29 1.93-.82.48-.53.7-1.24.63-2l-.28-2.75c-.31-2.26-1.04-2.93-3.23-2.93h-2.22ZM5.639 12.75c-1.19 0-2.27-.47-3.04-1.32-.77-.85-1.13-1.97-1.01-3.15l.27-2.75c.42-3.05 1.79-4.28 4.73-4.28h3.05c.21 0 .41.09.56.25.15.16.21.37.19.58l-.7 7.01c-.21 2.02-2.02 3.66-4.05 3.66Zm.95-10c-2.19 0-2.92.66-3.24 2.95l-.27 2.73c-.08.76.15 1.47.63 2s1.16.82 1.93.82c1.26 0 2.43-1.06 2.55-2.31l.62-6.19h-2.22ZM14.5 22.75h-5c-.41 0-.75-.34-.75-.75v-2.5c0-2.1 1.15-3.25 3.25-3.25s3.25 1.15 3.25 3.25V22c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5V19.5c0-1.26-.49-1.75-1.75-1.75s-1.75.49-1.75 1.75v1.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12Z",
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
    d: "M3.01 11.219v4.49c0 4.49 1.8 6.29 6.29 6.29h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"
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

var Shop = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Shop.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Shop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Shop.displayName = 'Shop';

module.exports = Shop;