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
    d: "M20.99 9.71c-.34-.14-.79-.21-1.35-.21h-5.28c-1.74 0-2.36.62-2.36 2.38v7.74c0 .58.07 1.03.22 1.38.31.72.97 1 2.14 1h5.28c1.74 0 2.36-.63 2.36-2.38v-7.74c0-1.19-.28-1.86-1.01-2.17ZM18 19.75h-2c-.02 0-.05 0-.07-.01a.62.62 0 0 1-.39-.16.706.706 0 0 1-.29-.58c0-.41.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.99 6.19V7c0 .55-.45 1-1 1h-5.63c-2.56 0-3.86 1.31-3.86 3.88V21c0 .55-.45 1-1 1H7.55c-.4 0-.72-.32-.72-.71 0-.4.32-.71.72-.71H9.5v-3.83H6a4.197 4.197 0 0 1-3.99-4.19V6.19C2.01 3.88 3.89 2 6.21 2H16.8c2.31 0 4.19 1.88 4.19 4.19Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 6.741c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 16.952H6.21c-3.37 0-4.21-.84-4.21-4.21v-1.89M10 21.47v-4.52M2 12.95h8M6.74 21.469H10M22 12.8c0-2.37-.59-2.96-2.96-2.96h-3.55c-2.37 0-2.96.59-2.96 2.96v5.71c0 2.37.59 2.96 2.96 2.96h3.55c2.37 0 2.96-.59 2.96-2.96v-1.57",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.244 18.25h.01",
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
    d: "M16.8 2H6.21c-2.32 0-4.2 1.88-4.2 4.19v6.37c0 2.32 1.88 4.19 4.19 4.19h3.6c.55 0 1 .45 1 1v.82c0 .55-.45 1-1 1H7.55c-.39 0-.71.32-.71.71 0 .39.32.71.71.71h7.93c.39 0 .71-.32.71-.71 0-.39-.32-.71-.71-.71h-2.25c-.55 0-1-.45-1-1v-.82c0-.55.45-1 1-1h3.57c2.32 0 4.19-1.88 4.19-4.19V6.19C20.99 3.88 19.11 2 16.8 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.64 9.5h-5.29c-1.73 0-2.36.63-2.36 2.38v7.73c0 1.76.62 2.38 2.36 2.38h5.29c1.73 0 2.36-.63 2.36-2.38v-7.73c0-1.76-.62-2.38-2.36-2.38ZM17 20.32c-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1.61 0 1.1.49 1.1 1.1 0 .61-.49 1.1-1.1 1.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.1 19.221c0 .61-.49 1.1-1.1 1.1-.61 0-1.1-.49-1.1-1.1 0-.61.49-1.1 1.1-1.1.61 0 1.1.5 1.1 1.1Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.244 18.25h.01",
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
    d: "M10 17.701H6.21c-3.8 0-4.96-1.16-4.96-4.96v-6c0-3.8 1.16-4.96 4.96-4.96h10.53c3.8 0 4.96 1.16 4.96 4.96 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-2.94-.52-3.46-3.46-3.46H6.21c-2.94 0-3.46.52-3.46 3.46v6c0 2.94.52 3.46 3.46 3.46H10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 22.221c-.41 0-.75-.34-.75-.75v-4.53c0-.41.34-.75.75-.75s.75.34.75.75v4.53c0 .42-.34.75-.75.75ZM10 13.7H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 22.219H6.74c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H10c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.04 22.22h-3.55c-2.77 0-3.71-.94-3.71-3.71V12.8c0-2.77.94-3.71 3.71-3.71h3.55c2.77 0 3.71.94 3.71 3.71v5.71c0 2.78-.94 3.71-3.71 3.71Zm-3.55-11.63c-1.96 0-2.21.25-2.21 2.21v5.71c0 1.96.25 2.21 2.21 2.21h3.55c1.96 0 2.21-.25 2.21-2.21V12.8c0-1.96-.25-2.21-2.21-2.21h-3.55Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.3 18.969c-.26 0-.52-.1-.71-.29a.988.988 0 0 1-.21-.32c-.05-.13-.08-.26-.08-.39 0-.26.11-.52.29-.7.23-.23.58-.34.91-.28l.18.06c.06.03.12.06.17.09a1.009 1.009 0 0 1 .45.83c0 .13-.03.26-.08.39-.05.12-.12.23-.21.32a.61.61 0 0 1-.16.12.95.95 0 0 1-.17.1c-.06.02-.12.04-.18.05-.07.02-.13.02-.2.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 16.951H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M2 12.95h8",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.74 21.469H10M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M17.244 18.25h.01",
    stroke: color,
    strokeWidth: strokeWidth,
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

var MonitorMobbile = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MonitorMobbile.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MonitorMobbile.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MonitorMobbile.displayName = 'MonitorMobbile';

module.exports = MonitorMobbile;