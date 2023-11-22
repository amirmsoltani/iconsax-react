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
    fill: color,
    d: "M12.031 2.031c-1.95 0-3.77.56-5.3 1.52l6.86 6.87.01-2.74a.749.749 0 111.5 0l-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 01-.53-.22l-8.19-8.2a1.06 1.06 0 01-.1-.12 9.984 9.984 0 00-3.49 7.59c0 5.52 4.48 10 10 10 1.95 0 3.77-.56 5.3-1.52l-6.86-6.87-.01 2.74a.749.749 0 11-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12a9.984 9.984 0 003.49-7.59c0-5.52-4.48-10-10-10z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M6.12 4l8.19 8.2.01-4.55M17.88 20l-8.19-8.2-.01 4.55"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M20 6c1.25 1.67 2 3.75 2 6 0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.43 0 2.8.3 4.03.85"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M22.03 12.03a9.984 9.984 0 01-4.7 8.48 9.948 9.948 0 01-5.3 1.52c-5.52 0-10-4.48-10-10a9.984 9.984 0 014.7-8.48 9.948 9.948 0 015.3-1.52c5.52 0 10 4.48 10 10z",
    opacity: ".4"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M15.1 7.68l-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 01-.53-.22l-8.19-8.2a1.06 1.06 0 01-.1-.12c.38-.32.78-.62 1.21-.89l6.86 6.87.01-2.74a.749.749 0 111.5 0zM18.54 19.62c-.38.32-.78.62-1.21.89l-6.86-6.87-.01 2.74a.749.749 0 11-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12.005 21.984c5.511 0 9.98-4.468 9.98-9.979 0-5.511-4.468-9.98-9.98-9.98-5.511 0-9.98 4.469-9.98 9.98s4.469 9.98 9.98 9.98z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M6.137 4.022l8.163 8.183.02-4.54M17.863 19.978L9.7 11.805l-.02 4.531"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M12.005 22.733c-5.918 0-10.728-4.81-10.728-10.728S6.087 1.277 12.005 1.277s10.728 4.81 10.728 10.728-4.82 10.728-10.728 10.728zm0-19.959c-5.09 0-9.23 4.142-9.23 9.231 0 5.09 4.14 9.23 9.23 9.23 5.09 0 9.23-4.14 9.23-9.23 0-5.09-4.14-9.23-9.23-9.23z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M14.3 12.953c-.2 0-.39-.08-.53-.22L5.609 4.552a.753.753 0 010-1.058.753.753 0 011.057 0l6.896 6.906.01-2.735c0-.409.34-.748.748-.748.41-.03.749.34.749.748l-.01 4.54c0 .3-.18.58-.46.69-.099.04-.199.06-.298.06zM17.863 20.727a.74.74 0 01-.529-.22l-6.896-6.906-.01 2.735c0 .409-.339.748-.748.748a.754.754 0 01-.748-.748l.01-4.54c0-.3.18-.58.459-.69.28-.119.598-.05.818.16l8.163 8.183c.29.29.29.769 0 1.058-.13.15-.33.22-.519.22z"
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
    d: "M12.005 21.984c5.511 0 9.979-4.468 9.979-9.979 0-5.511-4.468-9.98-9.98-9.98-5.51 0-9.979 4.469-9.979 9.98s4.468 9.98 9.98 9.98z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M6.137 4.021l8.163 8.183.02-4.54M17.863 19.979L9.7 11.806l-.02 4.53",
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

var Convert = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Convert.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Convert.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Convert.displayName = 'Convert';

module.exports = Convert;
