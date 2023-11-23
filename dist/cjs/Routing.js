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
    d: "M8.88 4.599c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82Zm-3.37 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1s-.44 1-1 1ZM21.91 16.599c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82Zm-3.38 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.55 0 1 .45 1 1s-.45 1-1 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.94 9.419c-.82.78-2.11.77-2.93 0-1.12-1.07-2.41-2.79-1.94-4.82.8-3.46 6.01-3.46 6.8 0 .12.49.13.95.07 1.4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.07 16.599c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82Z",
    stroke: color,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.486 5.5h.011M18.486 17.5h.011",
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
    d: "M8.88 4.599c-.8-3.46-6.01-3.47-6.81 0-.47 2.03.82 3.75 1.94 4.82.82.77 2.11.77 2.93 0 1.12-1.07 2.4-2.79 1.94-4.82Zm-3.37 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1s-.44 1-1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.51 5.2c0 .55-.44 1-1 1-.55 0-1-.45-1-1s.44-1 .99-1h.01c.56 0 1 .45 1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.91 16.599c-.8-3.46-6.03-3.47-6.84 0-.47 2.03.82 3.75 1.95 4.82.82.77 2.12.77 2.94 0 1.13-1.07 2.42-2.79 1.95-4.82Zm-3.38 1.6c-.55 0-1-.45-1-1s.44-1 .99-1h.01c.55 0 1 .45 1 1s-.45 1-1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.53 17.2c0 .55-.45 1-1 1s-1-.45-1-1 .44-1 .99-1h.01c.55 0 1 .45 1 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6ZM15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82Z",
    stroke: color,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.486 5.5h.012M18.486 17.5h.012",
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
    d: "M5.47 10.75c-.71 0-1.43-.26-1.98-.79C1.65 8.21.91 6.3 1.34 4.43c.51-2.2 2.44-3.18 4.13-3.18s3.63.99 4.13 3.18c.43 1.87-.32 3.78-2.15 5.53-.55.53-1.26.79-1.98.79ZM2.8 4.77c-.38 1.67.73 3.15 1.73 4.1.53.51 1.36.5 1.89 0 1-.95 2.11-2.43 1.72-4.11-.34-1.48-1.65-2.01-2.66-2.01-1.02 0-2.33.53-2.68 2.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.51 6.2c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1.01 1ZM18.49 22.748c-.71 0-1.43-.26-1.99-.79-1.85-1.75-2.6-3.66-2.16-5.54.51-2.19 2.45-3.18 4.15-3.18 1.7 0 3.64.99 4.15 3.18.43 1.87-.32 3.79-2.17 5.53-.55.54-1.26.8-1.98.8Zm0-8c-1.02 0-2.34.53-2.69 2.02-.39 1.67.73 3.16 1.73 4.11.53.51 1.37.51 1.91 0 1-.95 2.12-2.43 1.73-4.1-.33-1.5-1.65-2.03-2.68-2.03Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.53 18.2c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 19.75H9.32c-1.16 0-2.17-.7-2.57-1.78-.41-1.08-.11-2.27.76-3.04l7.99-6.99c.48-.42.49-.99.35-1.38-.15-.39-.53-.81-1.17-.81H12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.68c1.16 0 2.17.7 2.57 1.78.41 1.08.11 2.27-.76 3.04L8.5 16.06c-.48.42-.49.99-.35 1.38.15.39.53.81 1.17.81H12c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeWidth: strokeWidth,
    d: "M2.07 4.6c.8-3.46 6.01-3.46 6.8 0 .47 2.03-.82 3.75-1.94 4.82-.82.78-2.11.77-2.93 0C2.89 8.35 1.6 6.63 2.07 4.6zM15.07 16.6c.8-3.46 6.04-3.46 6.84 0 .47 2.03-.82 3.75-1.95 4.82-.82.78-2.12.77-2.94 0-1.13-1.07-2.42-2.79-1.95-4.82z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 5h2.68c1.85 0 2.71 2.29 1.32 3.51L8.01 15.5C6.62 16.71 7.48 19 9.32 19H12"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M5.486 5.5h.011M18.486 17.5h.011"
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

var Routing = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Routing.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Routing.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Routing.displayName = 'Routing';

module.exports = Routing;