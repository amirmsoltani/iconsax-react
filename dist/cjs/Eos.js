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
    d: "M9.28 20.311c.17.48-.35.92-.79.66l-3.15-1.79c-.57-.33-.92-1.12-.8-1.76l.94-4.67c.11-.55.87-.6 1.06-.08l2.74 7.64zM18.66 19.179l-3.16 1.8c-.44.25-.96-.18-.79-.66l2.75-7.71c.19-.52.95-.47 1.06.08l.95 4.73c.11.64-.24 1.43-.81 1.76zM17.08 7.32c.24.3.31.7.18 1.06l-4.74 13.25c-.17.49-.86.49-1.03 0L6.75 8.39c-.13-.36-.06-.76.18-1.06l3.82-4.7c.69-.83 1.83-.83 2.53 0l3.8 4.69z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m5.48 15.619-.26 1.32c-.12.58.21 1.3.73 1.6l5.32 3.04c.41.23 1.08.23 1.49 0l5.32-3.04c.52-.3.84-1.01.73-1.6l-1.71-8.57c-.04-.21-.18-.51-.32-.67l-3.6-4.32c-.63-.76-1.67-.76-2.3 0l-3.6 4.32c-.13.16-.28.46-.32.67l-.52 2.61",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.81 8.52-4.34 12.16a.5.5 0 0 1-.94 0L7.18 8.5",
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
    d: "m16.98 8.089-.17.43-4.72 13.23h-.18L7.18 8.499l-.16-.4c.06-.15.14-.29.22-.39l3.61-4.33c.63-.76 1.67-.76 2.3 0l3.61 4.33c.08.09.16.24.22.38Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M11.91 21.752c-.24-.01-.47-.07-.65-.18l-5.32-3.03c-.52-.3-.84-1.02-.73-1.6l1.72-8.57c.02-.08.05-.17.09-.27l.16.4 4.73 13.25ZM18.06 18.54l-5.32 3.03c-.18.11-.41.17-.65.18l4.72-13.23.17-.43c.04.1.07.2.09.28l1.72 8.57c.11.58-.21 1.3-.73 1.6Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.8 3.4 7.2 7.7c-.1.2-.2.5-.3.7L5.2 17c-.1.6.2 1.3.7 1.6l5.3 3c.4.2 1.1.2 1.5 0l5.3-3c.5-.3.8-1 .7-1.6L17 8.4c0-.2-.2-.5-.3-.7l-3.6-4.3c-.6-.8-1.6-.8-2.3 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m16.8 8.5-4.3 12.2c-.2.4-.8.4-.9 0L7.2 8.5",
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
    d: "M12 22.5c-.4 0-.8-.09-1.12-.27l-5.32-3.04c-.8-.46-1.27-1.49-1.09-2.4l1.71-8.57c.07-.33.26-.74.48-1l3.6-4.32c.89-1.07 2.57-1.07 3.46 0l3.6 4.32c.22.26.41.67.48 1l1.71 8.57c.18.91-.29 1.94-1.09 2.39l-5.32 3.04c-.3.19-.7.28-1.1.28Zm0-18.94c-.21 0-.41.11-.58.3l-3.6 4.32c-.05.06-.14.25-.16.33l-1.71 8.57c-.05.27.13.66.36.8l5.32 3.04c.18.1.57.1.74 0l5.32-3.04c.24-.14.42-.53.36-.8l-1.71-8.57c-.02-.08-.11-.27-.16-.33l-3.6-4.32c-.17-.19-.37-.3-.58-.3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 21.76c-.54 0-1-.33-1.18-.83L6.47 8.75a.75.75 0 1 1 1.41-.51L12 19.77l4.11-11.5a.75.75 0 1 1 1.41.51l-4.34 12.16c-.18.5-.64.82-1.18.82Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m10.85 3.379-3.6 4.32c-.13.16-.28.46-.32.67l-1.71 8.57c-.12.58.21 1.3.73 1.6l5.32 3.04c.41.23 1.08.23 1.49 0l5.32-3.04c.52-.3.84-1.01.73-1.6l-1.71-8.57c-.04-.21-.18-.51-.32-.67l-3.6-4.32c-.66-.76-1.7-.76-2.33 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m16.81 8.52-4.34 12.16a.5.5 0 0 1-.94 0L7.18 8.5",
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

var Eos = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Eos.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Eos.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Eos.displayName = 'Eos';

module.exports = Eos;