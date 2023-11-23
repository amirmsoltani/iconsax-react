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
    d: "M20.97 10.37v3.19a4.2 4.2 0 0 1-4.2 4.2h-3.56c-.55 0-1 .44-1 1v.82c0 .55.45 1 1 1h2.26c.39 0 .71.31.71.71 0 .39-.32.71-.71.71H7.53c-.39 0-.71-.32-.71-.71 0-.4.32-.71.71-.71h2.26c.55 0 1-.45 1-1v-.82c0-.56-.45-1-1-1h-3.6c-2.31 0-4.19-1.88-4.19-4.2V7.19C2 4.88 3.88 3 6.19 3h4.31c.55 0 1 .45 1 1v2.15c0 1.93 1.29 3.22 3.21 3.22h5.26c.55 0 1 .45 1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.99 2.36-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 6.44C2 2.89 2.89 2 6.44 2H8M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44v-1.99M12 17.219v4.78M2 13h20M7.5 22h9M17.86 9.372H13.1c-1.38 0-1.84-.92-1.84-1.84v-3.52c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.919l-1.21-.85v-2.76l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z",
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
    d: "M20.97 7.19v6.18H2V7.19C2 4.88 3.88 3 6.19 3h10.59c2.31 0 4.19 1.88 4.19 4.19Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 13.371v.19c0 2.32 1.88 4.19 4.19 4.19h3.6c.55 0 1 .45 1 1v.82c0 .55-.45 1-1 1H7.53c-.39 0-.71.32-.71.71 0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71 0-.39-.32-.71-.71-.71h-2.25c-.55 0-1-.45-1-1v-.82c0-.55.45-1 1-1h3.57c2.32 0 4.19-1.88 4.19-4.19v-.19H2ZM21.99 2.36l-1.13.79v-.42c0-.95-.77-1.71-1.71-1.71h-4.28C13.84 1.01 13 1.85 13 2.88v3.28c0 .86.43 1.71 1.71 1.71h4.43c.95 0 1.71-.77 1.71-1.71v-.43l1.13.79c.57.39 1.02.15 1.02-.53v-3.1c0-.68-.45-.91-1.01-.53Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2H8M12 17.22V22M2 13h20M7.5 22h9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.86 9.37H13.1c-1.38 0-1.84-.92-1.84-1.84V4.01c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.92l-1.21-.85V4.31l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z",
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
    d: "M17.56 17.97H6.44c-3.98 0-5.19-1.21-5.19-5.19V6.44c0-3.98 1.21-5.19 5.19-5.19H8c.41 0 .75.34.75.75s-.34.75-.75.75H6.44c-3.14 0-3.69.55-3.69 3.69v6.33c0 3.14.55 3.69 3.69 3.69h11.11c3.14 0 3.69-.55 3.69-3.69v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89c.01 3.99-1.2 5.2-5.18 5.2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.749c-.41 0-.75-.34-.75-.75v-4.78c0-.41.34-.75.75-.75s.75.34.75.75v4.78c0 .41-.34.75-.75.75ZM22 13.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.5 22.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.86 10.122H13.1c-1.57 0-2.59-1.02-2.59-2.59v-3.52c0-1.52 1.23-2.75 2.75-2.75h4.6a2.59 2.59 0 0 1 2.59 2.59v3.68a2.59 2.59 0 0 1-2.59 2.59Zm-4.6-7.36c-.69 0-1.25.56-1.25 1.25v3.52c0 .98.62 1.09 1.09 1.09h4.76c.6 0 1.09-.49 1.09-1.09v-3.68c0-.6-.49-1.09-1.09-1.09h-4.6Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.45 8.872c-.32 0-.65-.11-.97-.34l-1.21-.85a.75.75 0 0 1-.32-.61v-2.76c0-.24.12-.47.32-.61l1.21-.85c.52-.37 1.08-.44 1.54-.2.46.24.72.74.72 1.38v3.33c0 .64-.26 1.14-.72 1.38-.17.09-.36.13-.57.13Zm-1-2.19.8.56v-3.1l-.8.56v1.98Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 11.89v.89c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2H8",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12 17.219v4.78M2 13h20",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.5 22h9M17.86 9.372H13.1c-1.38 0-1.84-.92-1.84-1.84v-3.52c0-1.1.9-2 2-2h4.6c1.02 0 1.84.82 1.84 1.84v3.68c0 1.02-.82 1.84-1.84 1.84ZM20.91 7.919l-1.21-.85v-2.76l1.21-.85c.6-.41 1.09-.16 1.09.57v3.33c0 .73-.49.98-1.09.56Z",
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

var MonitorRecorder = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MonitorRecorder.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MonitorRecorder.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MonitorRecorder.displayName = 'MonitorRecorder';

module.exports = MonitorRecorder;