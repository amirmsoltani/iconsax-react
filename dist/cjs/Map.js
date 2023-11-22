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
    d: "M9.148 7.488c-.56 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.46 5.04C20.62 3.09 18.77 2 16.19 2H7.81C4.6 2 2 4.6 2 7.81v8.38c0 2.58 1.09 4.43 3.04 5.27.19.08.41.03.55-.11L21.35 5.59c.15-.15.2-.37.11-.55Zm-10.93 7.2c-.39.38-.9.56-1.41.56-.51 0-1.02-.19-1.41-.56C6.69 11.28 5.57 9.75 6 7.93c.38-1.65 1.84-2.39 3.12-2.39s2.74.74 3.12 2.4c.42 1.81-.7 3.34-1.71 4.3ZM19.469 20.53c.22.22.19.58-.08.73-.88.49-1.95.74-3.2.74h-8.38c-.29 0-.41-.34-.21-.54l6.04-6.04c.2-.2.51-.2.71 0l5.12 5.11ZM22.002 7.809v8.38c0 1.25-.25 2.33-.74 3.2-.15.27-.51.29-.73.08l-5.12-5.12c-.2-.2-.2-.51 0-.71l6.04-6.04c.21-.2.55-.08.55.21Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27L6.27 21.73C3.26 21.04 2 18.96 2 15v-2.06",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.241 7.979c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 0 1-2.48 0c-.95-.9-2.04-2.36-1.64-4.08Z",
    stroke: color,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.096 8.7h.01",
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
    d: "M19.882 20.939c-.95.7-2.2 1.06-3.69 1.06h-8.38c-.24 0-.48-.01-.71-.04l6.9-6.9 5.88 5.88ZM21.999 7.812v8.38c0 1.49-.36 2.74-1.06 3.69l-5.88-5.88 6.9-6.9c.03.23.04.47.04.71Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m15.06 14 5.88 5.88c-.29.42-.64.77-1.06 1.06L14 15.06l-6.9 6.9c-.64-.04-1.22-.17-1.75-.37C3.21 20.81 2 18.91 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38c2.72 0 4.62 1.21 5.4 3.35.2.53.33 1.11.37 1.75l-6.9 6.9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m15.062 14.002 5.88 5.88c-.29.42-.64.77-1.06 1.06l-5.88-5.88-6.9 6.9c-.64-.04-1.22-.17-1.75-.37l.39-.39 15.85-15.85c.2.53.33 1.11.37 1.75l-6.9 6.9ZM12.24 7.931c-.38-1.65-1.84-2.39-3.12-2.4-1.28 0-2.74.74-3.12 2.39-.42 1.83.7 3.36 1.71 4.32.4.38.9.56 1.41.56.51 0 1.01-.19 1.41-.56 1.01-.96 2.13-2.49 1.71-4.31Zm-3.09 1.56c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.73 6.27 6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 0 1-2.48 0c-.95-.9-2.04-2.36-1.64-4.08Z",
    stroke: color,
    strokeWidth: strokeWidth
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.095 8.7h.009",
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
    d: "M15.65 21.408c-.43 0-.86-.09-1.21-.26l-5.25-2.63c-.3-.15-.89-.14-1.18.03l-2.36 1.35c-1.02.58-2.07.66-2.86.19-.8-.46-1.25-1.4-1.25-2.58v-9.72c0-.91.6-1.94 1.39-2.39l4.33-2.48c.73-.42 1.84-.45 2.59-.07l5.25 2.63c.3.15.88.13 1.18-.03l2.35-1.34c1.02-.58 2.07-.66 2.86-.19.8.46 1.25 1.4 1.25 2.58v9.73c0 .91-.6 1.94-1.39 2.39l-4.33 2.48c-.38.2-.88.31-1.37.31Zm-7.01-4.49c.43 0 .86.09 1.21.26l5.25 2.63c.3.15.88.13 1.18-.03l4.33-2.48c.32-.18.63-.72.63-1.08v-9.73c0-.63-.18-1.1-.51-1.28-.32-.18-.82-.11-1.36.2l-2.35 1.34c-.73.42-1.84.45-2.59.07l-5.25-2.63c-.3-.15-.88-.13-1.18.03l-4.33 2.48c-.32.18-.63.72-.63 1.09v9.73c0 .63.18 1.1.5 1.28.32.19.82.11 1.37-.2l2.35-1.34c.39-.23.89-.34 1.38-.34Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.559 17.75c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v13c0 .41-.34.75-.75.75ZM15.73 20.751c-.41 0-.75-.34-.75-.75V6.621c0-.41.34-.75.75-.75s.75.34.75.75v13.38c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M22 9v6c0 2.5-.5 4.25-1.62 5.38L14 14l7.73-7.73c.18.79.27 1.69.27 2.73z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M21.73 6.27L6.27 21.73C3.26 21.04 2 18.96 2 15V9c0-5 2-7 7-7h6c3.96 0 6.04 1.26 6.73 4.27z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M20.38 20.38C19.25 21.5 17.5 22 15 22H9c-1.04 0-1.94-.09-2.73-.27L14 14l6.38 6.38z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeWidth: strokeWidth,
    d: "M6.24 7.98c.68-2.93 5.08-2.93 5.76 0 .39 1.72-.69 3.18-1.64 4.08a1.8 1.8 0 01-2.48 0c-.95-.9-2.04-2.36-1.64-4.08z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M9.094 8.7h.01",
    opacity: ".4"
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

var Map = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Map.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Map.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Map.displayName = 'Map';

module.exports = Map;
