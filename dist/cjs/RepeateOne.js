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
    d: "M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.94-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.15.14-.34.21-.53.21ZM10 21.75a.75.75 0 0 1-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.12-.28.4-.43.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.12.48.39.48.71v5.35c0 .41-.34.74-.75.74Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.5 5.32C4.93 5.32 2 8.25 2 11.84c0 1.79.73 3.42 1.91 4.6M14 3l2.44 2.34-3.51-.01M9.999 20.999l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.25 14.668v-5.34l-1.5 1.67",
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
    d: "M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM10 21.75c-.19 0-.37-.07-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.12-.28.4-.43.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M10 21l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.25 14.67V9.33L10.75 11",
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
    d: "M3.91 17.181c-.19 0-.38-.07-.53-.22a7.244 7.244 0 0 1-2.13-5.13c0-4.01 3.25-7.27 7.25-7.27l6.07.02-1.09-1.04a.746.746 0 0 1-.02-1.06c.29-.3.76-.31 1.06-.02l2.44 2.34c.22.21.29.54.18.82-.11.28-.39.47-.7.47l-7.95-.02c-3.17 0-5.75 2.59-5.75 5.77 0 1.53.6 2.98 1.69 4.07.29.29.29.77 0 1.06-.14.14-.33.21-.52.21ZM10 21.75c-.19 0-.37-.07-.52-.21L7.04 19.2a.76.76 0 0 1-.18-.82c.11-.28.39-.47.7-.47l7.95.02c3.17 0 5.75-2.59 5.75-5.77 0-1.53-.6-2.98-1.69-4.07a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0a7.244 7.244 0 0 1 2.13 5.13c0 4.01-3.25 7.27-7.25 7.27l-6.07-.02 1.09 1.04c.3.29.31.76.02 1.06-.16.16-.35.24-.55.24Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.248 15.42c-.41 0-.75-.34-.75-.75v-3.39l-.19.21c-.28.31-.75.33-1.06.06a.755.755 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m13.998 3 2.44 2.34-7.95-.02c-3.57 0-6.5 2.93-6.5 6.52 0 1.79.73 3.42 1.91 4.6M9.999 20.999l-2.44-2.34 7.95.02c3.57 0 6.5-2.93 6.5-6.52 0-1.79-.73-3.42-1.91-4.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12.25 14.668v-5.34l-1.5 1.67",
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

var RepeateOne = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
RepeateOne.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
RepeateOne.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RepeateOne.displayName = 'RepeateOne';

module.exports = RepeateOne;