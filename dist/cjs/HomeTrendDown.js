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
    d: "m20.04 6.822-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78Zm-3.16 9.37c0 .09-.02.18-.05.27-.07.17-.21.31-.38.38-.09.04-.18.05-.27.05h-1.86c-.39 0-.7-.31-.7-.7 0-.39.31-.7.7-.7h.18l-2.11-2.11-1.02 1.52c-.12.17-.3.29-.51.31a.676.676 0 0 1-.56-.2l-2.98-2.98a.706.706 0 0 1 0-.99c.27-.28.71-.27.99 0l2.38 2.38 1.02-1.52c.12-.17.3-.29.51-.31.22-.02.41.05.56.2l2.72 2.72v-.18c0-.39.31-.7.7-.7.39 0 .7.31.7.7v1.86h-.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 10.498c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12l-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-3.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m11.17 14-.47.7-3.2-3.2M16.5 16.5l-1.51-1.51L14 14M14.5 16.5h2v-2",
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
    d: "m20.04 6.822-5.76-4.03c-1.57-1.1-3.98-1.04-5.49.13l-5.01 3.91c-1 .78-1.79 2.38-1.79 3.64v6.9c0 2.55 2.07 4.63 4.62 4.63h10.78c2.55 0 4.62-2.07 4.62-4.62v-6.78c0-1.35-.87-3.01-1.97-3.78Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.88 14.332c0-.39-.31-.7-.7-.7-.39 0-.7.31-.7.7v.18l-2.72-2.72a.688.688 0 0 0-.56-.2c-.21.02-.4.13-.51.31l-1.02 1.52-2.38-2.38a.706.706 0 0 0-.99 0c-.27.27-.27.71 0 .99l2.98 2.98c.15.15.35.22.56.2.21-.02.4-.13.51-.31l1.02-1.52 2.11 2.11h-.18c-.39 0-.7.31-.7.7 0 .39.31.7.7.7h1.86c.09 0 .18-.02.27-.05.17-.07.31-.21.38-.38.04-.09.05-.18.05-.27v-1.86h.02Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.5 16.5-4.2-4.2-1.6 2.4-3.2-3.2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.5 16.5h2v-2",
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
    d: "M17.79 22.738H6.21c-2.74 0-4.96-2.23-4.96-4.97v-7.41c0-1.36.84-3.07 1.92-3.91l5.39-4.2c1.62-1.26 4.21-1.32 5.89-.14l6.18 4.33c1.19.83 2.12 2.61 2.12 4.06v7.28c0 2.73-2.22 4.96-4.96 4.96ZM9.48 3.428l-5.39 4.2c-.71.56-1.34 1.83-1.34 2.73v7.41a3.47 3.47 0 0 0 3.46 3.47h11.58c1.91 0 3.46-1.55 3.46-3.46v-7.28c0-.96-.69-2.29-1.48-2.83l-6.18-4.33c-1.14-.8-3.02-.76-4.11.09Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 17.251c-.19 0-.38-.07-.53-.22l-3.55-3.55-1.09 1.64c-.12.19-.33.31-.55.33a.73.73 0 0 1-.6-.22l-3.2-3.2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.55 2.55 1.09-1.64c.12-.19.33-.31.55-.33.23-.02.45.06.6.22l4.2 4.2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 17.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.25V14.5c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.02 2.838-5.39 4.2c-.9.7-1.63 2.19-1.63 3.32v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21v-7.28c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z",
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
    d: "m16.5 16.5-4.2-4.2-1.6 2.4-3.2-3.2"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.5 16.5h2v-2"
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

var HomeTrendDown = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
HomeTrendDown.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
HomeTrendDown.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
HomeTrendDown.displayName = 'HomeTrendDown';

module.exports = HomeTrendDown;