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
    d: "M11.4 2.35L6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 00-.71 0zM15.3 6.26l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0zM19.21 10.162l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0zM4.091 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.4 2.35 6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 0 0-.71 0ZM12.95 8.61l-6.7 6.7c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.51-.2-.71 0M19.21 10.162l-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0ZM4.091 13.84l-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0Z",
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
    d: "M11.4 2.35 6.26 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.526.526 0 0 0-.72 0Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.3 6.26 6.26 15.3c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73a.516.516 0 0 0-.72.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.21 10.162-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m4.09 13.84-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71L4.8 13.84c-.2.2-.52.2-.71 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.4 2.4 6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM15.3 6.3l-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0ZM19.2 10.2l-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0Z",
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
    d: "M8.34 10.829c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l5.15-5.15a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-5.15 5.15c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 4.79-4.79-1.38-1.38-4.79 4.79ZM8.34 18.64c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.38-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM12.24 22.541c-.32 0-.64-.12-.88-.37l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l9.05-9.05a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-9.05 9.05c-.25.25-.57.37-.89.37Zm-1.37-2.98 1.38 1.38 8.7-8.7-1.38-1.38-8.7 8.7ZM4.44 14.739c-.32 0-.64-.12-.88-.36l-1.73-1.73a1.25 1.25 0 0 1 0-1.77l1.73-1.73a1.25 1.25 0 0 1 1.77 0l1.73 1.73c.49.49.49 1.28 0 1.77l-1.73 1.73c-.25.24-.57.36-.89.36Zm-1.38-2.98 1.38 1.38 1.38-1.38-1.38-1.38-1.38 1.38Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.4 2.35 6.25 7.5c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l5.15-5.15c.2-.2.2-.51 0-.71l-1.73-1.73a.513.513 0 0 0-.71 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m15.3 6.26-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.19-.2-.51-.2-.71 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m19.21 10.162-9.05 9.05c-.2.2-.2.51 0 .71l1.73 1.73c.2.2.51.2.71 0l9.05-9.05c.2-.2.2-.51 0-.71l-1.73-1.73c-.2-.2-.52-.2-.71 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m4.091 13.84-1.73-1.73c-.2-.2-.2-.51 0-.71l1.73-1.73c.2-.2.51-.2.71 0l1.73 1.73c.2.2.2.51 0 .71l-1.73 1.73c-.2.2-.52.2-.71 0Z",
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

var BinanceUsd = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BinanceUsd.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
BinanceUsd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BinanceUsd.displayName = 'BinanceUsd';

module.exports = BinanceUsd;
