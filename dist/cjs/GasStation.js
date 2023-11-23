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
    d: "m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67ZM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89Zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14V9M2 22h17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.39 9.998h4.23c1.04 0 1.89-.5 1.89-1.89v-1.23c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23c0 1.39.85 1.89 1.89 1.89ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1",
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
    d: "M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.89 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89v1.23C6 9.5 6.85 10 7.89 10ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM22.75 9.998v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79a.745.745 0 0 1-.33-1.01c.18-.37.64-.51 1.01-.33l2 1c.25.13.41.39.41.67Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17h-14ZM2 22h17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.39 10h4.23c1.04 0 1.89-.5 1.89-1.89V6.88c0-1.39-.85-1.89-1.89-1.89H8.39c-1.04 0-1.89.5-1.89 1.89v1.23C6.5 9.5 7.35 10 8.39 10ZM6.5 13h3M17.5 16.01 22 16v-6l-2-1",
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
    d: "M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
      _ref6.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.5 22.75h-14c-.41 0-.75-.34-.75-.75V5c0-2.24 1.51-3.75 3.75-3.75h8c2.24 0 3.75 1.51 3.75 3.75v17c0 .41-.34.75-.75.75Zm-13.25-1.5h12.5V5c0-1.41-.84-2.25-2.25-2.25h-8c-1.41 0-2.25.84-2.25 2.25v16.25Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.612 10.748h-4.23c-1.63 0-2.64-1.01-2.64-2.64v-1.23c0-1.63 1.01-2.64 2.64-2.64h4.23c1.63 0 2.64 1.01 2.64 2.64v1.23c0 1.63-1.01 2.64-2.64 2.64Zm-4.22-5c-.81 0-1.14.33-1.14 1.14v1.23c0 .81.33 1.14 1.14 1.14h4.23c.81 0 1.14-.33 1.14-1.14v-1.23c0-.81-.33-1.14-1.14-1.14h-4.23ZM9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.5 16.758a.749.749 0 1 1 0-1.5l3.75-.01v-4.79l-1.59-.79a.763.763 0 0 1-.34-1.01c.19-.37.64-.52 1.01-.34l2 1c.25.13.41.39.41.67v6c0 .41-.33.75-.75.75l-4.49.02Z",
    fill: color
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

var GasStation = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
GasStation.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
GasStation.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
GasStation.displayName = 'GasStation';

module.exports = GasStation;