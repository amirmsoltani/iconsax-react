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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.67 5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.5Zm1.853 10.931a.566.566 0 0 0-.353.505V18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.564a.567.567 0 0 0-.353-.505A2.713 2.713 0 0 1 5.7 13.95c0-1.5 1.22-2.73 2.72-2.73 1.5 0 2.73 1.22 2.73 2.73 0 1.108-.67 2.057-1.627 2.481ZM16.33 18.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9Zm-.75-5.73c-1.5 0-2.73-1.22-2.73-2.73 0-1.108.67-2.057 1.627-2.481a.566.566 0 0 0 .353-.505V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.564c0 .223.15.414.353.505A2.713 2.713 0 0 1 18.3 10.05c0 1.5-1.22 2.72-2.72 2.72Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.57 18.502v-3.9M15.57 7.45V5.5M12.98 10.05c0-1.44 1.16-2.6 2.6-2.6 1.44 0 2.6 1.16 2.6 2.6 0 1.44-1.16 2.6-2.6 2.6M8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.552a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.58 19.252c-.41 0-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75ZM15.58 8.2c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75ZM8.42 19.25c-.41 0-.75-.34-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75ZM8.42 10.15c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.58 7.328c-1.5 0-2.73 1.22-2.73 2.72 0 1.5 1.22 2.73 2.73 2.73 1.5 0 2.72-1.22 2.72-2.73s-1.22-2.72-2.72-2.72ZM8.42 11.23c-1.5 0-2.72 1.22-2.72 2.73s1.22 2.72 2.72 2.72c1.5 0 2.73-1.22 2.73-2.72 0-1.5-1.22-2.73-2.73-2.73Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.57 18.5v-3.9M15.57 7.45V5.5M15.57 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.55a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.58 19.252c-.41 0-.75-.34-.75-.75v-3.9c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.34.75-.75.75ZM15.58 8.2c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.58 13.4a3.35 3.35 0 1 1 3.35-3.35c0 1.85-1.51 3.35-3.35 3.35Zm0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.84-1.85-1.85-1.85ZM8.42 19.25c-.41 0-.75-.34-.75-.75v-1.95c0-.41.34-.75.75-.75s.75.34.75.75v1.95c0 .41-.33.75-.75.75ZM8.42 10.15c-.41 0-.75-.34-.75-.75V5.5c0-.41.34-.75.75-.75s.75.34.75.75v3.9c0 .41-.33.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.42 17.302a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm0-5.2c-1.02 0-1.85.83-1.85 1.85s.83 1.85 1.85 1.85 1.85-.83 1.85-1.85-.82-1.85-1.85-1.85Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
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
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.57 18.502v-3.9M15.57 7.45V5.5M15.569 12.65a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2ZM8.43 18.5v-1.95M8.43 9.4V5.5M8.43 16.552a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
  })));
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

var Setting3 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Setting3.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Setting3.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Setting3.displayName = 'Setting3';

module.exports = Setting3;
