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
    d: "M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0ZM17.19 2h-3.94c-.28 0-.5.22-.5.5V4c0 .41-.34.75-.75.75-.09 0-.17-.02-.25-.05-.29-.1-.5-.38-.5-.7V2.5c0-.28-.22-.5-.5-.5H9.24c-.28 0-.5.22-.5.5V7c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2.5c0-.27-.2-.48-.47-.5h-.03a2.992 2.992 0 0 0-2.91 3.3l.37 6.75c.03.53.47.95 1 .95h13.6c.53 0 .97-.42 1-.95l.37-6.75c.18-1.77-1.21-3.3-2.98-3.3Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.8 12-.11 2.01c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 0 1 6.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3l-.15 2.71M7.99 2v5M12 2v2",
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
    d: "M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m20.17 5.3-.48 8.71c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 0 1 6.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.74 2v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2h1.5ZM12.75 2v2c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2h1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 01-5 0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M20.17 5.3l-.48 8.71c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 016.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3zM7.99 2v5M12 2v2"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.75c-1.79 0-3.25-1.46-3.25-3.25v-.75H4.5c-.74 0-1.43-.29-1.95-.82-.51-.5-.8-1.19-.8-1.93 0-1.4 1.09-2.6 2.49-2.74.05-.01.15-.01.26-.01h15c.11 0 .21 0 .31.02.59.05 1.18.33 1.64.8.57.55.86 1.35.79 2.17-.12 1.41-1.37 2.51-2.85 2.51h-4.14v.75c0 1.79-1.46 3.25-3.25 3.25Zm-7.5-8c-.02 0-.1 0-.12.01-.63.06-1.13.61-1.13 1.24 0 .33.13.64.36.87.24.25.55.38.89.38h5c.41 0 .75.34.75.75v1.5c0 .96.79 1.75 1.75 1.75s1.75-.79 1.75-1.75V18c0-.41.34-.75.75-.75h4.89c.69 0 1.3-.51 1.36-1.14.03-.38-.1-.73-.36-.99-.22-.22-.48-.35-.76-.37l-.13-.01h-15v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.69 14.76c-.04 0-.08 0-.12-.01H4.5a.767.767 0 0 1-.62-.16c-.17-.13-.3-.33-.31-.54l-.49-8.71c-.1-1.02.24-2.07.95-2.86.71-.78 1.72-1.23 2.78-1.23h10.38c1.06 0 2.07.45 2.78 1.24.7.78 1.05 1.83.95 2.87l-.48 8.69c-.01.21-.11.41-.28.54-.13.11-.3.17-.47.17ZM5.02 13.25h13.96l.44-7.99v-.04a2.23 2.23 0 0 0-.57-1.73c-.43-.47-1.03-.74-1.67-.74H6.81c-.63 0-1.24.27-1.67.74-.43.48-.63 1.09-.56 1.73l.44 8.03Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.99 7.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.5 19.5V18h-5c-.55 0-1.05-.22-1.41-.59-.37-.36-.59-.86-.59-1.41 0-1.03.8-1.89 1.81-1.99.06-.01.12-.01.19-.01h15c.07 0 .13 0 .19.01.48.04.9.25 1.22.58.41.4.63.97.58 1.59-.09 1.05-1.04 1.82-2.1 1.82H14.5v1.5a2.5 2.5 0 0 1-5 0Z",
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
    d: "m20.17 5.3-.48 8.71c-.06-.01-.12-.01-.19-.01h-15c-.07 0-.13 0-.19.01L3.83 5.3A2.996 2.996 0 0 1 6.81 2h10.38c1.77 0 3.16 1.53 2.98 3.3ZM7.99 2v5M12 2v2"
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

var BrushBig = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BrushBig.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
BrushBig.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BrushBig.displayName = 'BrushBig';

module.exports = BrushBig;