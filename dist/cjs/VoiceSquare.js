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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM6.75 14.14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3 1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14Zm3-1.43c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.86c0-.41.34-.75.75-.75s.75.34.75.75v4.28Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6 9.86v4.29M9 8.43v7.14M12 14.988v2.01M12 7v4.95M15 8.43v7.14M18 9.86v4.29M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M6 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75ZM9 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75ZM15 16.32c-.41 0-.75-.34-.75-.75V8.43c0-.41.34-.75.75-.75s.75.34.75.75v7.14c0 .42-.34.75-.75.75ZM18 14.892c-.41 0-.75-.34-.75-.75v-4.29c0-.41.34-.75.75-.75s.75.34.75.75v4.29c0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M6 9.86v4.29M9 8.43v7.14M12 7v10M15 8.43v7.14M18 9.86v4.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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

var VoiceSquare = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
VoiceSquare.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
VoiceSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
VoiceSquare.displayName = 'VoiceSquare';

module.exports = VoiceSquare;
