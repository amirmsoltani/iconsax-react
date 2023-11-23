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
    d: "M20 6v.24h-5.13c-2.97 0-4.35 1.38-4.35 4.35v5.11h-.77v3.55h.77v1.5H4.95c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.3V15.7H6c-3.13 0-3.97-.77-4-3.8V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4v-1.65M9 15.7V20M2 11.898h10M5.95 20H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.15 17.007c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
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
    d: "M16 2H6c-3.2 0-4 .8-4 4v5.9c.03 3.03.87 3.8 4 3.8h2.25v3.55h-3.3c-.41 0-.75.34-.75.75s.34.75.75.75h7.3c-.15-.39-.22-.88-.23-1.5H9.75V15.7h2.27V10.59c0-2.14.71-2.85 2.85-2.85h4.28c.31 0 .6.02.85.05V6c0-3.2-.8-4-4-4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66c.01.62.08 1.11.23 1.5.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.3c.87 0 1.57.7 1.57 1.57 0 .87-.7 1.57-1.57 1.57-.87 0-1.57-.7-1.57-1.57 0-.87.7-1.57 1.57-1.57Zm0 9.06c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M19.15 17.011c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 13.23a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 6v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4ZM9 15.7V20M2 11.9h10M5.95 20H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14 1.071 1.071 0 0 1 0-2.14Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.15 17.01c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color,
      _ref5$strokeWidth = _ref5.strokeWidth,
      strokeWidth = _ref5$strokeWidth === void 0 ? 2 : _ref5$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.02 16.45H6c-3.6 0-4.75-1.15-4.75-4.75V6C1.25 2.4 2.4 1.25 6 1.25h10c3.6 0 4.75 1.15 4.75 4.75v1.79c0 .21-.09.42-.25.56-.16.14-.37.21-.59.18-.22-.03-.48-.04-.76-.04h-4.28c-1.73 0-2.1.37-2.1 2.1v5.11c0 .41-.34.75-.75.75ZM6 2.75c-2.79 0-3.25.46-3.25 3.25v5.7c0 2.79.46 3.25 3.25 3.25h5.27v-4.36c0-2.56 1.04-3.6 3.6-3.6h4.38V6c0-2.79-.46-3.25-3.25-3.25H6Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 20.75c-.41 0-.75-.34-.75-.75v-4.3c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75ZM12 12.648H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 20.75H5.95c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H12c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 7.788c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.56c0 2.14.71 2.85 2.85 2.85h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8Zm-2.99 2.8a1.071 1.071 0 0 1 0 2.14c-.59 0-1.07-.48-1.07-1.07 0-.59.48-1.07 1.07-1.07Zm0 8.56c-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62 0 1.18-.96 2.14-2.14 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.011 19.901c-1.59 0-2.89-1.3-2.89-2.89 0-.64.22-1.27.61-1.77a2.88 2.88 0 0 1 2.28-1.12c.69 0 1.37.25 1.89.7.64.57 1 1.36 1 2.19 0 1.59-1.3 2.89-2.89 2.89Zm0-4.28c-.43 0-.83.2-1.1.54-.19.24-.29.54-.29.85 0 .77.62 1.39 1.39 1.39.77 0 1.39-.62 1.39-1.39 0-.4-.18-.78-.49-1.06-.24-.21-.57-.33-.9-.33ZM17.01 13.48c-1 0-1.82-.82-1.82-1.82s.82-1.82 1.82-1.82 1.82.82 1.82 1.82-.82 1.82-1.82 1.82Zm0-2.14c-.18 0-.32.14-.32.32s.14.32.32.32.32-.14.32-.32-.14-.32-.32-.32Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 6v1.79c-.25-.03-.54-.05-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6c-3.2 0-4-.8-4-4V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M2 11.898h10",
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
    d: "M9 15.7V20M5.95 20H12"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 10.588v8.56c0 2.14-.71 2.85-2.85 2.85h-4.28c-2.14 0-2.85-.71-2.85-2.85v-8.56c0-2.14.71-2.85 2.85-2.85h4.28c.31 0 .6.02.85.05 1.48.19 2 .97 2 2.8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.15 17.011c0 1.18-.96 2.14-2.14 2.14-1.18 0-2.14-.96-2.14-2.14a2.142 2.142 0 0 1 3.54-1.62c.45.4.74.98.74 1.62ZM17.01 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14Z",
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

var Devices = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Devices.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Devices.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Devices.displayName = 'Devices';

module.exports = Devices;
