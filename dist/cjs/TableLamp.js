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
    d: "m20.43 11.78-2.2-8.08c-.25-.93-1.26-1.7-2.22-1.7H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.08c-.44 1.6.56 2.91 2.22 2.91h5.46v5.81H8c-.41 0-.75.34-.75.75s.34.75.75.75h8c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.25v-5.81h5.46c1.66 0 2.66-1.31 2.22-2.91Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.94 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.6.56 2.91 2.23 2.91h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07c-.27-.93-1.28-1.7-2.24-1.7M12 15v7M8 22h8",
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
    d: "M18.21 14.69H5.79c-1.66 0-2.66-1.31-2.22-2.91l2.2-8.08C6.02 2.77 7.03 2 7.99 2h8.02c.96 0 1.97.77 2.22 1.7l2.2 8.08c.44 1.6-.56 2.91-2.22 2.91Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.75 21.251c0 .41-.34.75-.75.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.25v-5.81h1.5v5.81H16c.41 0 .75.34.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.79 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07C17.98 2.77 16.97 2 16.01 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92ZM12 15v7M8 22h8",
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
    d: "M18.209 15.44H5.789c-1.03 0-1.94-.42-2.5-1.15s-.72-1.72-.45-2.71l2.2-8.08c.34-1.26 1.64-2.25 2.95-2.25h8.01c1.31 0 2.6.99 2.95 2.25l2.2 8.08c.27.99.11 1.98-.45 2.71s-1.46 1.15-2.49 1.15ZM7.989 2.75c-.63 0-1.34.54-1.5 1.15l-2.2 8.08c-.15.54-.08 1.04.2 1.41.28.37.74.56 1.3.56h12.42c.56 0 1.03-.2 1.3-.56.27-.36.35-.86.2-1.41l-2.2-8.08c-.17-.61-.87-1.15-1.5-1.15h-8.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 22.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.79 14.69h12.42c1.66 0 2.66-1.31 2.23-2.91l-2.2-8.07C17.98 2.77 16.97 2 16.01 2H7.99c-.96 0-1.97.77-2.22 1.7l-2.2 8.07c-.44 1.61.56 2.92 2.22 2.92Z",
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
    d: "M12 15v7M8 22h8"
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

var TableLamp = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
TableLamp.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
TableLamp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
TableLamp.displayName = 'TableLamp';

module.exports = TableLamp;
