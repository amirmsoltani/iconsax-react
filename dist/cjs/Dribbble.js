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
    d: "M15.88 20.92c.03.16-.06.33-.21.39-1.13.45-2.37.69-3.65.69-2.21 0-4.25-.71-5.9-1.93-.14-.1-.18-.3-.09-.45.55-.98 2.7-4.13 7.45-5.89.18-.07.38.02.44.2 1.19 3.19 1.75 5.89 1.96 6.99zM21.82 13.888a9.89 9.89 0 01-3.77 6.06c-.21.16-.51.04-.56-.21-.21-1.08-.72-3.41-1.7-6.18-.07-.21.07-.44.29-.47 2.49-.3 4.67.18 5.49.4.17.06.28.23.25.4zM21.59 11.819c-1.02-.18-3.62-.56-6.28-.27-.16.02-.3-.07-.37-.22-.04-.09-.07-.18-.11-.27-.16-.37-.33-.75-.5-1.12-.09-.18 0-.4.18-.48 2.8-1.21 4.36-2.77 4.97-3.47.15-.17.41-.16.55.02a9.896 9.896 0 011.97 5.42c.01.25-.19.43-.41.39zM18.44 4.792c-.52.63-1.98 2.13-4.75 3.23a.35.35 0 01-.44-.16 53.586 53.586 0 00-3.27-5.15c-.15-.21-.03-.51.22-.55.58-.1 1.19-.15 1.81-.15 2.42 0 4.65.86 6.38 2.3.15.11.17.33.05.48zM11.02 8.84c-3.79.95-7.14 1.08-8.36 1.1-.23 0-.4-.22-.34-.44.72-2.8 2.64-5.14 5.17-6.43.15-.08.34-.03.44.11.52.72 1.93 2.75 3.31 5.14.11.2.01.46-.22.52zM12.92 11.599c.09.19-.02.42-.22.49-4.43 1.43-7.08 4.98-7.88 6.2-.13.2-.41.21-.56.03-1.4-1.72-2.25-3.69-2.25-6.08v-.18c0-.2.16-.36.36-.35 1.26.05 5.37-.12 9.64-1.35.16-.05.34.03.41.18.17.35.34.7.5 1.06z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 4.79c-2.6 4.55-7.61 7.16-12.83 6.69l-3.17-.29M5.5 19.37c2.6-4.55 7.61-7.16 12.83-6.69l3.17.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m7.63 3 3.18 3.95c2.13 2.64 3.64 5.71 4.44 9l1.21 4.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.88 20.92c.03.16-.06.33-.21.39-1.14.45-2.37.69-3.66.69a9.9 9.9 0 0 1-5.9-1.93c-.14-.1-.18-.3-.09-.45.55-.98 2.7-4.13 7.45-5.89.18-.07.38.02.44.2 1.2 3.19 1.76 5.89 1.97 6.99ZM21.82 13.888a9.89 9.89 0 0 1-3.77 6.06c-.21.16-.51.04-.56-.21-.21-1.08-.72-3.41-1.7-6.18-.07-.21.07-.44.29-.47 2.49-.3 4.67.18 5.49.4.17.06.28.23.25.4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.59 11.819c-1.02-.18-3.62-.56-6.28-.27-.16.02-.3-.07-.37-.22-.04-.09-.07-.18-.11-.27-.16-.37-.33-.75-.5-1.12-.09-.18 0-.4.18-.48 2.8-1.21 4.36-2.77 4.97-3.47.15-.17.41-.16.55.02a9.896 9.896 0 0 1 1.97 5.42c.01.25-.19.43-.41.39Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.44 4.79c-.52.63-1.98 2.13-4.75 3.23a.35.35 0 0 1-.44-.16 53.574 53.574 0 0 0-3.27-5.15.358.358 0 0 1 .23-.56c.58-.1 1.18-.15 1.8-.15 2.42 0 4.65.86 6.38 2.3.15.12.17.34.05.49ZM11.02 8.84c-3.79.95-7.14 1.08-8.36 1.1-.23 0-.4-.22-.34-.44.72-2.8 2.64-5.14 5.17-6.43.15-.08.34-.03.44.11.52.72 1.93 2.75 3.31 5.14.11.2.01.46-.22.52Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.92 11.6c.09.19-.02.42-.22.49-4.43 1.43-7.08 4.98-7.88 6.2-.13.2-.41.21-.56.03C2.85 16.6 2 14.63 2 12.23v-.18c0-.2.16-.36.36-.35 1.26.05 5.37-.12 9.64-1.35.16-.05.34.03.41.18.18.36.35.71.51 1.07Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 4.79c-2.6 4.55-7.61 7.16-12.83 6.69l-3.17-.29M5.5 19.37c2.6-4.55 7.61-7.16 12.83-6.69l3.17.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m7.63 3 3.18 3.95c2.13 2.64 3.64 5.71 4.44 9l1.21 4.99",
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
    d: "M6.87 12.281c-.42 0-.85-.02-1.27-.06l-3.17-.29a.753.753 0 0 1-.68-.82c.04-.41.39-.72.82-.68l3.17.29c4.9.45 9.66-2.03 12.11-6.31.21-.36.66-.48 1.02-.28.36.21.48.66.28 1.02-2.52 4.43-7.25 7.13-12.28 7.13ZM5.5 20.119a.752.752 0 0 1-.65-1.12c2.74-4.79 8.06-7.57 13.55-7.06l3.17.29a.753.753 0 1 1-.14 1.5l-3.17-.29c-4.9-.45-9.66 2.03-12.11 6.31-.14.24-.39.37-.65.37Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.47 21.698c-.34 0-.64-.23-.73-.57l-1.21-4.99c-.77-3.16-2.25-6.17-4.3-8.71l-3.18-3.95a.747.747 0 1 1 1.16-.94l3.18 3.95a23.96 23.96 0 0 1 4.59 9.29l1.21 4.99c.1.4-.15.81-.55.91-.05.01-.11.02-.17.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.5 4.79c-2.6 4.55-7.61 7.16-12.83 6.69l-3.17-.29M5.5 19.37c2.6-4.55 7.61-7.16 12.83-6.69l3.17.29"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m7.63 3 3.18 3.95c2.13 2.64 3.64 5.71 4.44 9l1.21 4.99"
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

var Dribbble = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Dribbble.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Dribbble.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Dribbble.displayName = 'Dribbble';

module.exports = Dribbble;