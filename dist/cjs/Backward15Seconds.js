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
    d: "M14.431 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56ZM9.54 16.92c-.41 0-.75-.34-.75-.75v-3.39L8.6 13c-.28.31-.75.33-1.06.06A.755.755 0 0 1 7.49 12l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c-.01.41-.34.74-.76.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.002 3.48c-.08 0-.16.01-.24.01l.82-1.02c.26-.32.21-.8-.12-1.05a.747.747 0 0 0-1.05.12L9.442 4c-.01.01-.01.02-.02.04-.03.04-.05.09-.07.13-.02.05-.04.09-.05.13-.01.05-.01.09-.01.14v.2c.01.03.03.05.04.08.02.05.04.09.06.14.03.04.06.08.1.11.02.03.03.06.06.08.02.01.03.02.05.03.02.02.05.03.08.04.05.03.11.05.16.06.04.02.07.02.1.02s.05.01.08.01.05-.01.07-.02c.03 0 .06.01.09 0 .64-.15 1.24-.22 1.81-.22 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.14-8.14 8.14-8.14-3.65-8.14-8.14c0-1.74.57-3.42 1.65-4.86a.75.75 0 0 0-1.2-.9c-1.28 1.7-1.95 3.69-1.95 5.76 0 5.31 4.32 9.64 9.64 9.64s9.64-4.32 9.64-9.64-4.32-9.63-9.63-9.63Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.02 4.47 12 2M3.988 16.959a8.89 8.89 0 0 0 16.9-3.85 8.89 8.89 0 0 0-8.89-8.89c-.68 0-1.34.09-1.98.24M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.96 10.828H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29M9.54 16.168v-5.34l-1.5 1.67",
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
    d: "M14.431 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56ZM9.541 16.92c-.41 0-.75-.34-.75-.75v-3.39l-.19.22c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .41-.33.74-.75.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12 3.48c-.08 0-.16.01-.24.01l.82-1.02c.26-.32.21-.8-.12-1.05a.747.747 0 0 0-1.05.12L9.43 4.01c-.01.01-.01.03-.02.04-.03.04-.05.09-.07.14-.02.04-.04.08-.05.13-.01.05-.01.09-.01.14v.2c.01.03.03.06.04.09.02.05.04.09.06.14.03.04.06.08.1.11.02.02.04.05.06.08.01.01.03.01.04.02.03.02.06.03.09.05.05.03.11.05.16.06.03.01.06.01.1.02.03 0 .05.01.08.01s.05-.01.07-.02c.03 0 .06.01.09 0 .64-.15 1.24-.22 1.81-.22 4.49 0 8.14 3.65 8.14 8.14s-3.65 8.14-8.14 8.14-8.14-3.65-8.14-8.14c0-1.74.57-3.42 1.65-4.86a.75.75 0 0 0-1.2-.9c-1.28 1.7-1.95 3.69-1.95 5.76 0 5.31 4.32 9.64 9.64 9.64s9.64-4.32 9.64-9.64S17.31 3.48 12 3.48Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29M9.54 16.17v-5.34l-1.5 1.67M10.02 4.47 12 2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.91 7.8c-1.11 1.48-1.8 3.31-1.8 5.31A8.89 8.89 0 0 0 12 22a8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.22c-.68 0-1.34.09-1.98.24",
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
    d: "M14.431 16.92h-2.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.29a.781.781 0 0 0 0-1.56h-2.29c-.24 0-.47-.12-.61-.31a.746.746 0 0 1-.1-.68l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.279 2.279 0 1 1 0 4.56ZM9.541 16.92c-.41 0-.75-.34-.75-.75v-3.39l-.19.22c-.28.31-.75.33-1.06.06a.756.756 0 0 1-.06-1.06l1.5-1.67c.21-.23.54-.31.83-.2.29.11.48.39.48.7v5.35c0 .41-.33.74-.75.74ZM10.022 5.218a.7.7 0 0 1-.47-.17.757.757 0 0 1-.12-1.05l1.98-2.47c.26-.32.73-.37 1.05-.12.32.25.37.73.12 1.05l-1.98 2.47a.72.72 0 0 1-.58.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.749c-5.31 0-9.64-4.32-9.64-9.64 0-2.07.67-4.06 1.95-5.76a.75.75 0 0 1 1.2.9c-1.08 1.44-1.65 3.12-1.65 4.86 0 4.49 3.65 8.14 8.14 8.14s8.14-3.65 8.14-8.14-3.65-8.14-8.14-8.14c-.58 0-1.17.07-1.81.22a.75.75 0 0 1-.34-1.46 9.7 9.7 0 0 1 2.15-.26c5.31 0 9.64 4.32 9.64 9.64s-4.33 9.64-9.64 9.64Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.96 10.828H12.9l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29M9.54 16.168v-5.34l-1.5 1.67",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.02 4.47 12 2M4.91 7.799c-1.11 1.48-1.8 3.31-1.8 5.31a8.89 8.89 0 0 0 8.89 8.89 8.89 8.89 0 0 0 8.89-8.89A8.89 8.89 0 0 0 12 4.219c-.68 0-1.34.09-1.98.24",
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

var Backward15Seconds = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Backward15Seconds.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Backward15Seconds.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Backward15Seconds.displayName = 'Backward15Seconds';

module.exports = Backward15Seconds;