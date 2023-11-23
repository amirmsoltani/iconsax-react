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
    d: "M14.54 1.879c-1.23 0-2.23 1-2.23 2.23v4.64c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-4.64c0-1.22-1-2.23-2.23-2.23zM20.18 7.11c-1.07 0-1.94.87-1.94 1.94v1.57c0 .21.17.38.38.38h1.57c1.07 0 1.94-.87 1.94-1.94 0-1.07-.88-1.95-1.95-1.95zM8.5 6.988H3.86c-1.23 0-2.23 1-2.23 2.23s1 2.23 2.23 2.23H8.5c1.23 0 2.23-1 2.23-2.23s-1-2.23-2.23-2.23zM8.79 1.621c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94h1.57c.21 0 .38-.17.38-.38v-1.57a1.962 1.962 0 00-1.95-1.93zM9.43 13.031c-1.23 0-2.23 1-2.23 2.23v4.64c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-4.64c0-1.23-1-2.23-2.23-2.23zM5.36 13.031H3.79c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94 1.07 0 1.94-.87 1.94-1.94v-1.57c0-.2-.17-.37-.37-.37zM20.11 12.57h-4.64c-1.23 0-2.23 1-2.23 2.23s1 2.23 2.23 2.23h4.64c1.23 0 2.23-1 2.23-2.23s-1-2.23-2.23-2.23zM15.18 18.469h-1.57a.38.38 0 00-.38.38v1.57c0 1.07.87 1.94 1.94 1.94 1.07 0 1.94-.87 1.94-1.94a1.93 1.93 0 00-1.93-1.95z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.54 2.262c-1.03 0-1.86.83-1.86 1.86v4.64c0 1.03.83 1.86 1.86 1.86 1.03 0 1.86-.83 1.86-1.86v-4.64c0-1.03-.83-1.86-1.86-1.86ZM18.62 10.62h1.57c.87 0 1.57-.7 1.57-1.57 0-.87-.7-1.57-1.57-1.57-.87 0-1.57.7-1.57 1.57v1.57ZM3.86 7.371c-1.03 0-1.86.83-1.86 1.86 0 1.03.83 1.86 1.86 1.86H8.5c1.03 0 1.86-.83 1.86-1.86 0-1.03-.83-1.86-1.86-1.86h-.75M10.36 5.128v-1.57c0-.87-.7-1.57-1.57-1.57-.87 0-1.57.7-1.57 1.57 0 .87.7 1.57 1.57 1.57h1.57ZM9.43 21.77c1.03 0 1.86-.83 1.86-1.86v-4.64c0-1.03-.83-1.86-1.86-1.86-1.03 0-1.86.83-1.86 1.86v4.64c0 1.02.83 1.86 1.86 1.86ZM5.36 13.41H3.79c-.87 0-1.57.7-1.57 1.57 0 .87.7 1.57 1.57 1.57.87 0 1.57-.7 1.57-1.57v-1.57ZM21.97 14.801c0-1.03-.83-1.86-1.86-1.86h-4.64c-1.03 0-1.86.83-1.86 1.86 0 1.03.83 1.86 1.86 1.86h4.64c1.03 0 1.86-.83 1.86-1.86ZM13.61 18.84v1.57c0 .87.7 1.57 1.57 1.57.87 0 1.57-.7 1.57-1.57 0-.87-.7-1.57-1.57-1.57h-1.57Z",
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
    d: "M14.54 1.879c-1.23 0-2.23 1-2.23 2.23v4.64c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-4.64c0-1.22-1-2.23-2.23-2.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.18 7.11c-1.07 0-1.94.87-1.94 1.94v1.57c0 .21.17.38.38.38h1.57c1.07 0 1.94-.87 1.94-1.94 0-1.07-.88-1.95-1.95-1.95Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.5 6.988H3.86c-1.23 0-2.23 1-2.23 2.23s1 2.23 2.23 2.23H8.5c1.23 0 2.23-1 2.23-2.23s-1-2.23-2.23-2.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8.79 1.621c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94h1.57c.21 0 .38-.17.38-.38v-1.57a1.962 1.962 0 0 0-1.95-1.93Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.43 13.031c-1.23 0-2.23 1-2.23 2.23v4.64c0 1.23 1 2.23 2.23 2.23s2.23-1 2.23-2.23v-4.64c0-1.23-1-2.23-2.23-2.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5.36 13.031H3.79c-1.07 0-1.94.87-1.94 1.94 0 1.07.87 1.94 1.94 1.94 1.07 0 1.94-.87 1.94-1.94v-1.57c0-.2-.17-.37-.37-.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.11 12.57h-4.64c-1.23 0-2.23 1-2.23 2.23s1 2.23 2.23 2.23h4.64c1.23 0 2.23-1 2.23-2.23s-1-2.23-2.23-2.23Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.18 18.469h-1.57a.38.38 0 0 0-.38.38v1.57c0 1.07.87 1.94 1.94 1.94 1.07 0 1.94-.87 1.94-1.94a1.93 1.93 0 0 0-1.93-1.95Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.5 2.3c-1 0-1.9.8-1.9 1.9v4.6c0 1 .8 1.9 1.9 1.9 1 0 1.9-.8 1.9-1.9V4.1c0-1-.8-1.8-1.9-1.8ZM18.6 10.6h1.6c.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6v1.6ZM2 9.2c0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.8 1.9-1.9 0-1-.8-1.9-1.9-1.9H3.9C2.8 7.4 2 8.2 2 9.2ZM10.4 5.1V3.6c0-.9-.7-1.6-1.6-1.6-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6h1.6v-.1ZM9.4 21.8c1 0 1.9-.8 1.9-1.9v-4.6c0-1-.8-1.9-1.9-1.9-1 0-1.9.8-1.9 1.9v4.6c.1 1 .9 1.9 1.9 1.9ZM5.4 13.4H3.8c-.9 0-1.6.7-1.6 1.6 0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6v-1.6ZM22 14.8c0-1-.8-1.9-1.9-1.9h-4.6c-1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.9 1.9-1.9ZM13.6 18.8v1.6c0 .9.7 1.6 1.6 1.6.9 0 1.6-.7 1.6-1.6 0-.9-.7-1.6-1.6-1.6h-1.6Z",
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
    d: "M14.54 11.372c-1.44 0-2.61-1.17-2.61-2.61v-4.64c0-1.44 1.17-2.61 2.61-2.61s2.61 1.17 2.61 2.61v4.64c0 1.44-1.17 2.61-2.61 2.61Zm0-8.36c-.61 0-1.11.5-1.11 1.11v4.64c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-4.64c0-.61-.5-1.11-1.11-1.11ZM20.18 11.37h-1.57c-.41 0-.75-.34-.75-.75V9.05c0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32 0 1.28-1.04 2.32-2.32 2.32Zm-.81-1.5h.82c.45 0 .82-.37.82-.82 0-.45-.37-.82-.82-.82-.45 0-.82.37-.82.82v.82ZM8.5 11.83H3.86c-1.44 0-2.61-1.17-2.61-2.61s1.17-2.61 2.61-2.61H8.5c1.44 0 2.61 1.17 2.61 2.61s-1.17 2.61-2.61 2.61ZM3.86 8.12c-.61 0-1.11.5-1.11 1.11 0 .61.5 1.11 1.11 1.11H8.5c.61 0 1.11-.5 1.11-1.11 0-.61-.5-1.11-1.11-1.11H3.86ZM10.36 5.878H8.79c-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32 1.28 0 2.32 1.04 2.32 2.32v1.57c0 .42-.34.75-.75.75Zm-1.57-3.13c-.45 0-.82.37-.82.82 0 .45.37.82.82.82h.82v-.82c0-.45-.37-.82-.82-.82ZM9.43 22.52c-1.44 0-2.61-1.17-2.61-2.61v-4.64c0-1.44 1.17-2.61 2.61-2.61s2.61 1.17 2.61 2.61v4.64c0 1.44-1.17 2.61-2.61 2.61Zm0-8.36c-.61 0-1.11.5-1.11 1.11v4.64c0 .61.5 1.11 1.11 1.11.61 0 1.11-.5 1.11-1.11v-4.64c0-.62-.5-1.11-1.11-1.11ZM3.79 17.288c-1.28 0-2.32-1.04-2.32-2.32 0-1.28 1.04-2.32 2.32-2.32h1.57c.41 0 .75.34.75.75v1.57c0 1.28-1.04 2.32-2.32 2.32Zm0-3.13c-.45 0-.82.37-.82.82 0 .45.37.82.82.82.45 0 .82-.37.82-.82v-.82h-.82ZM20.11 17.411h-4.64c-1.44 0-2.61-1.17-2.61-2.61s1.17-2.61 2.61-2.61h4.64c1.44 0 2.61 1.17 2.61 2.61s-1.17 2.61-2.61 2.61Zm-4.64-3.72c-.61 0-1.11.5-1.11 1.11 0 .61.5 1.11 1.11 1.11h4.64c.61 0 1.11-.5 1.11-1.11 0-.61-.5-1.11-1.11-1.11h-4.64ZM15.18 22.73c-1.28 0-2.32-1.04-2.32-2.32v-1.57c0-.41.34-.75.75-.75h1.57c1.28 0 2.32 1.04 2.32 2.32 0 1.28-1.05 2.32-2.32 2.32Zm-.82-3.14v.82c0 .45.37.82.82.82.45 0 .82-.37.82-.82 0-.45-.37-.82-.82-.82h-.82Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.54 2.262c-1.03 0-1.86.83-1.86 1.86v4.64c0 1.03.83 1.86 1.86 1.86 1.03 0 1.86-.83 1.86-1.86v-4.64c0-1.03-.83-1.86-1.86-1.86Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.62 10.62h1.57c.87 0 1.57-.7 1.57-1.57 0-.87-.7-1.57-1.57-1.57-.87 0-1.57.7-1.57 1.57v1.57Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 9.231c0 1.03.83 1.86 1.86 1.86H8.5c1.03 0 1.86-.83 1.86-1.86 0-1.03-.83-1.86-1.86-1.86H3.86c-1.03 0-1.86.83-1.86 1.86Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M10.36 5.128v-1.57c0-.87-.7-1.57-1.57-1.57-.87 0-1.57.7-1.57 1.57 0 .87.7 1.57 1.57 1.57h1.57Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.43 21.77c1.03 0 1.86-.83 1.86-1.86v-4.64c0-1.03-.83-1.86-1.86-1.86-1.03 0-1.86.83-1.86 1.86v4.64c0 1.02.83 1.86 1.86 1.86Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M5.36 13.41H3.79c-.87 0-1.57.7-1.57 1.57 0 .87.7 1.57 1.57 1.57.87 0 1.57-.7 1.57-1.57v-1.57Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.97 14.801c0-1.03-.83-1.86-1.86-1.86h-4.64c-1.03 0-1.86.83-1.86 1.86 0 1.03.83 1.86 1.86 1.86h4.64c1.03 0 1.86-.83 1.86-1.86Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M13.61 18.84v1.57c0 .87.7 1.57 1.57 1.57.87 0 1.57-.7 1.57-1.57 0-.87-.7-1.57-1.57-1.57h-1.57Z",
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

var Slack = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Slack.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Slack.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Slack.displayName = 'Slack';

module.exports = Slack;
