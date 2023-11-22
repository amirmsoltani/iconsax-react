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
    d: "M10.42 13.418h2.84l.32-2.84h-2.84l-.32 2.84Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm2.63 8.58h-3.77l-.32 2.85h3.37c.4 0 .73.33.73.73 0 .4-.33.73-.73.73h-3.53l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 0 1-.65-.81l.39-3.5h-2.84l-.41 3.66c-.04.37-.36.65-.73.65h-.08a.739.739 0 0 1-.65-.81l.39-3.5H5.18c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.77l.32-2.85H5.9c-.4 0-.73-.33-.73-.73 0-.4.33-.73.73-.73h3.53l.41-3.66c.04-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h2.84l.41-3.66c.05-.4.41-.69.81-.65.4.04.69.41.65.81l-.39 3.5h3.61c.4 0 .73.33.73.73 0 .4-.35.73-.75.73Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 3 8 21M16 3l-2 18M20.05 9h1.45M3.5 9h13.49M3.95 15H2.5M20.5 15H7.01",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.82 10.579c.4 0 .73-.33.73-.73 0-.4-.33-.73-.73-.73h-3.61l.39-3.5c.04-.4-.24-.76-.65-.81-.4-.04-.76.24-.81.65l-.41 3.66H10.9l.39-3.5c.04-.4-.24-.76-.65-.81-.4-.04-.76.24-.81.65l-.4 3.66H5.9c-.4 0-.73.33-.73.73 0 .4.33.73.73.73h3.37l-.32 2.85H5.18c-.4 0-.73.33-.73.73 0 .4.33.73.73.73h3.61l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h2.84l-.39 3.5c-.04.4.24.76.65.81h.08c.37 0 .68-.28.73-.65l.41-3.66h3.53c.4 0 .73-.33.73-.73 0-.4-.33-.73-.73-.73h-3.37l.32-2.85h3.75Zm-5.56 2.84h-2.84l.32-2.85h2.84l-.32 2.85Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 3 8 21M16 3l-2 18M3.5 9h18M2.5 15h18",
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
    d: "M8 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.42-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66ZM14 21.752h-.08a.751.751 0 0 1-.66-.83l2-18c.05-.41.41-.7.83-.66.41.05.71.42.66.83l-2 18c-.05.38-.37.66-.75.66Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.5 9.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM20.5 15.75h-18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 3 8 21M16 3l-2 18",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M3.5 9h18M2.5 15h18",
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

var Hashtag = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Hashtag.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Hashtag.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Hashtag.displayName = 'Hashtag';

module.exports = Hashtag;
