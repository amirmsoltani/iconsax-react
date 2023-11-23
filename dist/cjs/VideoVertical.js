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
    d: "M6.36 7.781H2v3.47h4.36v-3.47ZM6.358 6.289v-4.16c-2.28.42-3.77 1.89-4.21 4.15h4.18c.01 0 .02.01.03.01ZM6.36 16.31v-3.56H2v3.53h4.24c.04 0 .08.02.12.03ZM21.85 6.28c-.43-2.19-1.83-3.63-3.99-4.1v4.1h3.99ZM16.36 11.25V2.01C16.31 2 16.25 2 16.19 2H7.86v9.25h8.5ZM22 12.75h-4.14v3.53H22v-3.53ZM17.86 21.821c2.14-.47 3.54-1.89 3.98-4.04h-3.98v4.04ZM6.24 17.782H2.16c.46 2.22 1.94 3.67 4.2 4.09v-4.11c-.04.01-.08.02-.12.02ZM22 7.781h-4.14v3.47H22v-3.47ZM7.86 12.75V22h8.33c.06 0 .12 0 .17-.01v-9.24h-8.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 2C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-2.02M6.89 2.52v18.96M16.89 2.52v18.96M6.89 6.969H2.54M6.891 12h-4.86M6.89 16.969H2.48M21.89 6.969h-4.35M21.891 12h-4.86M16.969 12h-11M21.89 16.969h-4.41",
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
    d: "M7.81 2h8.38c.06 0 .12 0 .17.01.54 0 1.04.06 1.5.17 2.16.47 3.56 1.91 3.99 4.1.1.47.15.97.15 1.5v8.5c-.01.53-.06 1.03-.16 1.5-.44 2.15-1.84 3.57-3.98 4.04-.46.11-.96.17-1.5.17-.05.01-.11.01-.17.01H7.81c-.51 0-1-.04-1.45-.13-2.26-.42-3.74-1.87-4.2-4.09-.11-.47-.16-.97-.16-1.5V7.77c0-.53.05-1.03.15-1.49.44-2.26 1.93-3.73 4.21-4.15.45-.09.94-.13 1.45-.13Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.86 11.25h8.5V2.01c.54 0 1.04.06 1.5.17v4.1h3.99c.1.47.15.97.15 1.5h-4.14v3.47H22v1.5h-4.14v3.53H22c-.01.53-.06 1.03-.16 1.5h-3.98v4.04c-.46.11-.96.17-1.5.17v-9.24h-8.5V22h-.05c-.51 0-1-.04-1.45-.13v-4.11c-.04.01-.08.02-.12.02H2.16c-.11-.47-.16-.97-.16-1.5h4.24c.04 0 .08.02.12.03v-3.56H2v-1.5h4.36V7.78H2v-.01c0-.53.05-1.03.15-1.49h4.18c.01 0 .02.01.03.01V2.13C6.81 2.04 7.3 2 7.81 2h.05v9.25Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM6.89 2.52v18.96M16.89 2.52v18.96M6.89 6.97H2.54M6.89 12H2.03M6.89 16.97H2.48M21.89 6.97h-4.35M21.89 12h-4.86M16.97 12h-11M21.89 16.97h-4.41",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.89 22.23c-.41 0-.75-.34-.75-.75V2.52a.749.749 0 1 1 1.5 0v18.96c0 .42-.34.75-.75.75ZM16.89 22.23c-.41 0-.75-.34-.75-.75V2.52c0-.41.34-.75.75-.75s.75.34.75.75v18.96c0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.89 7.719H2.54c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.35c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.891 12.75h-4.86c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.86c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.89 17.719H2.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.41c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.89 7.719h-4.35c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.35c.41 0 .75.34.75.75s-.34.75-.75.75ZM21.891 12.75h-4.86c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.86c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.969 12.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11a.749.749 0 1 1 0 1.5ZM21.89 17.719h-4.41c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.41c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M6.89 2.52v18.96M16.89 2.52v18.96M6.89 6.969H2.54M6.891 12h-4.86M6.894 16.969h-4.41M21.89 6.969h-4.35M21.891 12h-4.86M16.973 12h-11M21.894 16.969h-4.41"
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

var VideoVertical = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
VideoVertical.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
VideoVertical.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
VideoVertical.displayName = 'VideoVertical';

module.exports = VideoVertical;
