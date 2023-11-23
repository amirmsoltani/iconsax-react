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
    d: "M16 9.75H8c-.69 0-1.25.56-1.25 1.25v1.05c.03-.01.05-.02.08-.03.12-.06.25-.1.38-.14.06-.02.12-.04.19-.06.2-.04.4-.07.61-.07h8c.21 0 .41.03.61.07.06.01.12.04.19.06.13.04.26.08.38.14.03.01.06.02.08.03V11A1.28 1.28 0 0 0 16 9.75ZM16 13.25H8c-.69 0-1.25.56-1.25 1.25v.5H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25ZM16 6.5H8c-.69 0-1.25.56-1.25 1.25v.81c.38-.19.8-.31 1.25-.31h8c.45 0 .87.12 1.25.31v-.81c0-.69-.56-1.25-1.25-1.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM19 16.5h-3.84A3.258 3.258 0 0 1 12 19c-1.53 0-2.82-1.07-3.16-2.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h.25V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75V15H19c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 13v2c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 15h-.25V7.75C18.75 6.23 17.52 5 16 5H8C6.48 5 5.25 6.23 5.25 7.75V15H5c-.41 0-.75.34-.75.75s.34.75.75.75h3.84C9.18 17.93 10.47 19 12 19c1.53 0 2.82-1.07 3.16-2.5H19c.41 0 .75-.34.75-.75S19.41 15 19 15Zm-2.21-3.12a4.39 4.39 0 0 0-.19-.06c-.2-.04-.4-.07-.61-.07h-8c-.21 0-.41.03-.61.07-.06.01-.12.04-.19.06-.13.04-.26.08-.38.14-.03.01-.06.02-.08.03V11c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v1.05c-.03-.01-.05-.02-.08-.03-.1-.06-.23-.1-.36-.14ZM8 6.5h8c.69 0 1.25.56 1.25 1.25v.81c-.38-.19-.8-.31-1.25-.31H8c-.45 0-.87.12-1.25.31v-.81c0-.69.56-1.25 1.25-1.25Zm6.5 8.5c-.41 0-.75.34-.75.75 0 .96-.79 1.75-1.75 1.75s-1.75-.79-1.75-1.75c0-.41-.34-.75-.75-.75H6.75v-.5c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v.5H14.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z",
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
    d: "M18 15.25c-.41 0-.75-.34-.75-.75 0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25 0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.75C5.25 6.23 6.48 5 8 5h8c1.52 0 2.75 1.23 2.75 2.75v6.75c0 .41-.34.75-.75.75Zm-10-3.5h8c.45 0 .88.11 1.25.3v-4.3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v4.3c.37-.19.8-.3 1.25-.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 16.5h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM6 16.5H5c-.41 0-.75-.34-.75-.75S4.59 15 5 15h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM18 14.75c-.41 0-.75-.34-.75-.75v-3c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 19c-1.53 0-2.82-1.07-3.16-2.5H6c-.41 0-.75-.34-.75-.75V14.5c0-1.52 1.23-2.75 2.75-2.75h8c1.52 0 2.75 1.23 2.75 2.75v1.25c0 .41-.34.75-.75.75h-2.84A3.258 3.258 0 0 1 12 19Zm-5.25-4H9.5c.41 0 .75.34.75.75 0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75c0-.41.34-.75.75-.75h2.75v-.5c0-.69-.56-1.25-1.25-1.25H8c-.69 0-1.25.56-1.25 1.25v.5Z",
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
    d: "M18 7.75v6.75c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2V7.75c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2ZM19 15.75h-1M6 15.75H5"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14v-3c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 14.5v1.25h-3.5a2.5 2.5 0 0 1-5 0H6V14.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2Z"
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

var MoneyArchive = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MoneyArchive.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MoneyArchive.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MoneyArchive.displayName = 'MoneyArchive';

module.exports = MoneyArchive;