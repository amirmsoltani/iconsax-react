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
    d: "M16.8 2h-2.6C11 2 9 4 9 7.2v4.05h4.44l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H9v4.05C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2zM2.75 11.25c-.41 0-.75.34-.75.75s.34.75.75.75H9v-1.5H2.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M2 12h12.88M12.65 8.65L16 12l-3.35 3.35M21.5 13v2.26c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M9 7.2v9.59C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2h-2.6C11 2 9 4 9 7.2z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12.43 8.12l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06l2.07-2.07H2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.69l-2.07-2.07a.742.742 0 01-.22-.53c0-.19.07-.38.22-.53.29-.3.76-.3 1.06 0z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99M2 12h12.88"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12.65 8.65L16 12l-3.35 3.35"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.41-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.39.72-.82.68a.751.751 0 01-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M14.88 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12.88a.749.749 0 110 1.5z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12.65 16.1c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06L14.94 12l-2.82-2.82a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.35 3.35c.29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.9 7.56c.31-3.6 2.16-5.07 6.21-5.07h.13c4.47 0 6.26 1.79 6.26 6.26v6.52c0 4.47-1.79 6.26-6.26 6.26h-.13c-4.02 0-5.87-1.45-6.2-4.99"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M2 12h12.88M12.65 8.65L16 12l-3.35 3.35"
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

var LoginCurve = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
LoginCurve.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
LoginCurve.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
LoginCurve.displayName = 'LoginCurve';

module.exports = LoginCurve;
