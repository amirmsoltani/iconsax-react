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
    fillRule: "evenodd",
    d: "M20.5 2H5.04c-.33 0-.65.17-.83.45l-1.54 2.3a.99.99 0 00-.17.55V18c0 .55.45 1 1 1h2c.55 0 1 .45 1 1v1c0 .55.45 1 1 1h1.46c.33 0 .65-.17.83-.45l1.41-2.11c.19-.28.5-.45.83-.45h4.05c.27 0 .52-.11.71-.29l4.41-4.41a.99.99 0 00.29-.71V3c.01-.55-.44-1-.99-1zm-9.71 10.86c0 .32-.26.57-.57.57H9.08a.57.57 0 01-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57v5.71zm5.71 0c0 .32-.26.57-.57.57h-1.14a.57.57 0 01-.57-.57V7.15c0-.32.26-.57.57-.57h1.14c.32 0 .57.26.57.57v5.71z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.5 7V5l2-3h17v12l-5 5h-5l-2 3h-3v-3h-4v-7.39",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 7H9v6h2V7ZM16 7h-2v6h2V7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.04 2H20.5c.55 0 1 .45 1 1v10.59c0 .27-.11.52-.29.71l-4.41 4.41a.99.99 0 0 1-.71.29h-4.05c-.33 0-.65.17-.83.45L9.8 21.56c-.19.28-.5.45-.83.45H7.51c-.55 0-1-.45-1-1v-1c0-.55-.45-1-1-1h-2c-.55 0-1-.45-1-1V5.31c0-.2.06-.39.17-.55l1.54-2.3A.94.94 0 0 1 5.04 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 7.14v5.71c0 .32.26.57.57.57h1.14c.32 0 .57-.26.57-.57V7.14a.57.57 0 0 0-.57-.57H9.07c-.31 0-.57.26-.57.57ZM14.21 7.14v5.71c0 .32.26.57.57.57h1.14c.32 0 .57-.26.57-.57V7.14a.57.57 0 0 0-.57-.57h-1.14c-.31 0-.57.26-.57.57Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "M4.5 2h17v12l-5 5h-5l-2 3h-3v-3h-4V5l2-3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 7H9v6h2V7ZM16 7h-2v6h2V7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.5 22.75h-3c-.41 0-.75-.34-.75-.75v-2.25H2.5c-.41 0-.75-.34-.75-.75V5c0-.15.04-.29.13-.42l2-3c.14-.21.37-.33.62-.33h17c.41 0 .75.34.75.75v12c0 .2-.08.39-.22.53l-5 5a.75.75 0 0 1-.53.22h-4.6l-1.78 2.67c-.14.2-.37.33-.62.33Zm-2.25-1.5H9.1l1.78-2.67c.14-.21.37-.33.62-.33h4.69l4.56-4.56V2.75H4.9L3.25 5.23v13.02H6.5c.41 0 .75.34.75.75v2.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11 13.75H9c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75Zm-1.25-1.5h.5v-4.5h-.5v4.5ZM16 13.75h-2c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75Zm-1.25-1.5h.5v-4.5h-.5v4.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    clipRule: "evenodd",
    d: "M4.5 2h17v12l-5 5h-5l-2 3h-3v-3h-4V5l2-3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M11 7H9v6h2V7ZM16 7h-2v6h2V7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Twitch = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Twitch.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Twitch.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Twitch.displayName = 'Twitch';

module.exports = Twitch;