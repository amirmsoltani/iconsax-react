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
    d: "M13.18 11.86c-.4 0-.76-.22-.93-.58L10.8 8.39l-.42.78c-.23.43-.69.7-1.18.7h-.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.64l.79-1.46c.19-.34.57-.57.93-.55.39 0 .74.23.92.57l1.43 2.86.34-.69c.23-.46.68-.74 1.2-.74h.81c.41 0 .75.34.75.75s-.34.75-.75.75h-.71l-.71 1.41c-.18.37-.53.59-.93.59Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.02 12.22C1.91 6.6 6.35 2.05 11.97 2.05c5.62 0 10.05 4.55 10.05 10.06v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.48 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-2.37M11.54 8.192l-.46-.92c-.11-.21-.41-.22-.52-.01l-.84 1.55c-.1.19-.3.31-.52.31h-.73M15.53 9.121h-.81a.61.61 0 0 0-.53.32l-.75 1.5c-.11.22-.42.22-.53 0",
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
    d: "M13.18 11.86c-.4 0-.76-.22-.93-.58L10.8 8.39l-.42.78c-.23.43-.69.7-1.18.7h-.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.64l.79-1.46c.19-.34.57-.57.93-.55.39 0 .74.23.92.57l1.43 2.86.34-.69c.23-.46.68-.74 1.2-.74h.81c.41 0 .75.34.75.75s-.34.75-.75.75h-.71l-.71 1.41c-.18.37-.53.59-.93.59Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M2.75 18.65c-.41 0-.75-.34-.75-.75v-5.7c-.05-2.71.96-5.27 2.84-7.19 1.88-1.91 4.4-2.96 7.11-2.96C17.49 2.05 22 6.56 22 12.1v5.7c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.7c0-4.71-3.83-8.55-8.55-8.55-2.31 0-4.45.89-6.04 2.51-1.6 1.63-2.45 3.8-2.41 6.12v5.71c0 .42-.33.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.94 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81ZM18.19 12.45h-.13c-2.1 0-3.81 1.71-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.48 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.91 6.6 6.35 2.05 11.97 2.05c5.62 0 10.05 4.55 10.05 10.06v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.53 9.12h-.81a.61.61 0 0 0-.53.32l-.75 1.5c-.11.22-.42.22-.53 0l-1.84-3.67c-.11-.21-.41-.22-.52-.01l-.84 1.55c-.1.19-.3.31-.52.31h-.73",
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
    d: "M5.59 22.7c-2.34 0-4.32-1.98-4.32-4.32v-6.16C1.21 9.31 2.3 6.56 4.32 4.49 6.34 2.43 9.06 1.3 11.97 1.3c5.96 0 10.8 4.85 10.8 10.81v6.16c0 2.38-1.94 4.32-4.32 4.32-2.38 0-4.32-1.94-4.32-4.32v-2.81a2.59 2.59 0 0 1 5.18 0v3.03c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.03c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.81c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-6.16c0-5.13-4.17-9.31-9.3-9.31-2.51 0-4.84.97-6.58 2.74-1.74 1.77-2.67 4.14-2.62 6.66v6.17c0 1.53 1.29 2.82 2.82 2.82 1.53 0 2.82-1.29 2.82-2.82v-2.81c0-.68-.55-1.09-1.09-1.09-.68 0-1.09.55-1.09 1.09v2.92c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.92c0-1.45 1.14-2.59 2.59-2.59a2.59 2.59 0 0 1 2.59 2.59v2.81a4.33 4.33 0 0 1-4.32 4.33Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.179 11.86c-.4 0-.76-.22-.93-.58l-1.45-2.89-.42.78c-.23.43-.69.7-1.18.7h-.73c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.64l.79-1.46c.19-.34.54-.52.93-.55.39 0 .74.23.92.57l1.43 2.86.34-.69c.23-.46.68-.74 1.2-.74h.81c.41 0 .75.34.75.75s-.34.75-.75.75h-.71l-.71 1.41c-.18.37-.53.59-.93.59Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M5.48 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.91 6.6 6.35 2.05 11.97 2.05c5.62 0 10.05 4.55 10.05 10.06v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.53 9.122h-.81a.61.61 0 0 0-.53.32l-.75 1.5c-.11.22-.42.22-.53 0l-1.839-3.67c-.11-.21-.41-.22-.52-.01l-.84 1.55c-.1.19-.3.31-.52.31h-.73",
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

var MusicPlay = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MusicPlay.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MusicPlay.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MusicPlay.displayName = 'MusicPlay';

module.exports = MusicPlay;