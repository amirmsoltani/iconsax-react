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
    d: "M19.73 16.1c0-.03.02-.06.02-.1V6.5c0-1.52-1.23-2.75-2.75-2.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .04.02.07.02.1-1.3.33-2.27 1.5-2.27 2.9 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.97-2.57-2.27-2.9ZM13.48 18.92l-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.04-.02-.07-.02-.1C7.03 7.57 8 6.4 8 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.97 2.57 2.27 2.9 0 .03-.02.06-.02.1v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 12v5.5c0 1.1.9 2 2 2h5.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M17 3.75h-3.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25V16c0 .41.34.75.75.75s.75-.34.75-.75V6.5c0-1.52-1.23-2.75-2.75-2.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m13.48 18.92-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7c-.69 0-1.25-.56-1.25-1.25V8c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.5c0 1.52 1.23 2.75 2.75 2.75h3.93l-1.41 1.17c-.32.27-.36.74-.1 1.06.15.18.36.27.58.27.17 0 .34-.06.48-.17l3-2.5a.761.761 0 0 0 0-1.16Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14 2-3 2.5L14 7M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 8v9.5c0 1.1.9 2 2 2h5.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-5.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 0 1 0-1.16l3-2.5a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06L12.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25ZM12.5 20.25H7c-1.52 0-2.75-1.23-2.75-2.75V8c0-.41.34-.75.75-.75s.75.34.75.75v9.5c0 .69.56 1.25 1.25 1.25h5.5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 22.75a.75.75 0 0 1-.48-1.33l2.31-1.92-2.31-1.92a.758.758 0 0 1-.1-1.06c.27-.32.74-.36 1.06-.1l3 2.5a.761.761 0 0 1 0 1.16l-3 2.5c-.14.11-.31.17-.48.17ZM5 8.75C2.93 8.75 1.25 7.07 1.25 5c0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6C3.76 2.75 2.75 3.76 2.75 5S3.76 7.25 5 7.25 7.25 6.24 7.25 5 6.24 2.75 5 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-5.5"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14 2-3 2.5L14 7M5 8v9.5c0 1.1.9 2 2 2h5.5"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10 22 3-2.5-3-2.5"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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

var ProgrammingArrows = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
ProgrammingArrows.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
ProgrammingArrows.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ProgrammingArrows.displayName = 'ProgrammingArrows';

module.exports = ProgrammingArrows;
