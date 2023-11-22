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
    d: "M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13a.74.74 0 0 1 .13-1.05c6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29ZM14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.31 10.21c.97.4 1.9.94 2.78 1.62M4.91 11.839c2.44-1.89 5.3-2.7 8.1-2.44M8.36 5.28c4.63-1.1 9.55-.08 13.64 3.08M2 8.36c.94-.72 1.92-1.34 2.93-1.84M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0",
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
    d: "M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0",
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
    d: "M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29ZM14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M4.91 11.842c4.3-3.32 9.89-3.32 14.19 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 8.362c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
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

var Wifi = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Wifi.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Wifi.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Wifi.displayName = 'Wifi';

module.exports = Wifi;
