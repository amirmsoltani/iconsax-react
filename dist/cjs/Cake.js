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
    d: "M20.89 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35-.74 0-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35-.74 0-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89.28-.07.57-.11.88-.11h11.12c.31 0 .6.04.88.11 1.41.34 2.45 1.51 2.45 2.89ZM18.44 7.17v1.41c-.29-.06-.58-.08-.88-.08H6.44c-.3 0-.59.03-.88.09V7.17C5.56 5.97 6.64 5 7.98 5h8.04c1.34 0 2.42.97 2.42 2.17Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.75 3.548v1.46h-.77c-.26 0-.5.03-.73.09v-1.55c0-.35.34-.65.75-.65s.75.3.75.65ZM16.75 3.328v1.77c-.23-.07-.47-.1-.73-.1h-.77v-1.67c0-.41.34-.75.75-.75s.75.34.75.75ZM12.75 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82ZM22 21.25c0 .41-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.36v-5.02h.61v.07c0 1.34.88 2.58 2.19 2.87 1.02.24 1.99-.09 2.65-.74.38-.38 1-.39 1.38-.01.52.51 1.23.83 2.01.83.78 0 1.49-.31 2.01-.83.38-.37.99-.37 1.38.01.65.65 1.62.98 2.65.74 1.31-.29 2.19-1.53 2.19-2.87v-.05h.71v5h.36c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 22h20M17.56 10c1.84 0 3.33 1.34 3.33 3v9M3.11 22v-9c0-1.66 1.49-3 3.33-3h6.86M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.47 14h-.45c-.74 0-1.35.6-1.35 1.35v.31a1.35 1.35 0 0 1-2.7 0v-.31a1.35 1.35 0 0 0-2.7 0v.31a1.35 1.35 0 0 1-2.7 0v-.31C10.6 14.6 10 14 9.26 14c-.74 0-1.35.6-1.35 1.35M3.53 13.98l.37.01c.74.01 1.33.61 1.33 1.35v.33c0 .74.6 1.35 1.35 1.35M8 5V3M16 5V3M12 5V2",
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
    d: "M20.89 13v1h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35-.74 0-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35-.74 0-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79V13c0-1.38 1.04-2.55 2.45-2.89.28-.07.57-.11.88-.11h11.12c.31 0 .6.04.88.11 1.41.34 2.45 1.51 2.45 2.89Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.44 7.17v2.94c-.28-.07-.57-.11-.88-.11H6.44c-.31 0-.6.04-.88.11V7.17C5.56 5.97 6.64 5 7.98 5h8.04c1.34 0 2.42.97 2.42 2.17Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.75 3.548v1.46h-.77c-.26 0-.5.03-.73.09v-1.55c0-.35.34-.65.75-.65s.75.3.75.65ZM16.75 3.328v1.77c-.23-.07-.47-.1-.73-.1h-.77v-1.67c0-.41.34-.75.75-.75s.75.34.75.75ZM12.75 2.82V5h-1.5V2.82c0-.45.34-.82.75-.82s.75.37.75.82Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.25 20.5h-.36V14h-.87c-.74 0-1.34.6-1.34 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.3c0-.75-.61-1.35-1.35-1.35-.74 0-1.34.6-1.34 1.35v.3a1.35 1.35 0 0 1-2.7 0v-.3c0-.75-.6-1.35-1.34-1.35-.74 0-1.35.6-1.35 1.35v.3a1.344 1.344 0 1 1-2.69 0v-.32c0-.74-.59-1.34-1.32-1.35h-.79v6.52h-.36c-.41 0-.75.34-.75.75s.34.75.75.75h18.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2",
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
    d: "M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.89 22.75c-.41 0-.75-.34-.75-.75v-9c0-1.24-1.16-2.25-2.58-2.25H6.44c-1.42 0-2.58 1.01-2.58 2.25v9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-9c0-2.07 1.83-3.75 4.08-3.75h11.11c2.25 0 4.08 1.68 4.08 3.75v9a.74.74 0 0 1-.74.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.44 10.75c-.41 0-.75-.34-.75-.75V7.17c0-.78-.75-1.42-1.66-1.42H7.98c-.92 0-1.66.64-1.66 1.42V10c0 .41-.34.75-.75.75s-.76-.34-.76-.75V7.17c0-1.61 1.42-2.92 3.16-2.92h8.05c1.74 0 3.16 1.31 3.16 2.92V10a.74.74 0 0 1-.74.75ZM17.33 17.749a2.1 2.1 0 0 1-2.1-2.1v-.31c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v.31a2.1 2.1 0 1 1-4.2 0v-.31c0-.33-.27-.6-.6-.6-.33 0-.6.27-.6.6v.31a2.1 2.1 0 1 1-4.2 0v-.33c0-.32-.26-.59-.59-.6h-.37a.756.756 0 0 1-.74-.76c.01-.41.34-.74.75-.74h.38c1.14.02 2.07.96 2.07 2.1v.33c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-.31a2.1 2.1 0 1 1 4.2 0v.31c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-.31a2.1 2.1 0 1 1 4.2 0v.31c0 .33.27.6.6.6.33 0 .6-.27.6-.6v-.31c0-1.16.94-2.1 2.1-2.1h.45c.41 0 .75.34.75.75s-.34.75-.75.75h-.45c-.33 0-.6.27-.6.6v.31a2.1 2.1 0 0 1-2.1 2.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8 5.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 22h20M3.11 22v-9c0-1.66 1.49-3 3.33-3h11.11c1.84 0 3.33 1.34 3.33 3v9M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5h8.05c1.33 0 2.41.97 2.41 2.17V10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".34",
    d: "m3.53 13.98.37.01c.74.01 1.33.61 1.33 1.35v.33a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31a1.35 1.35 0 0 1 2.7 0v.31a1.35 1.35 0 0 0 2.7 0v-.31c0-.74.6-1.35 1.35-1.35h.45M8 5V3M16 5V3M12 5V2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
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

var Cake = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Cake.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Cake.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Cake.displayName = 'Cake';

module.exports = Cake;
