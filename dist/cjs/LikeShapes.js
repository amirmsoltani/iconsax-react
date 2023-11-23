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
    d: "m21.56 10.739-1.36-1.58c-.26-.3-.47-.86-.47-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.39 0-.96-.21-1.26-.47l-1.58-1.36c-.69-.59-1.82-.59-2.52 0l-1.57 1.37c-.3.25-.87.46-1.26.46H6.18c-1.06 0-1.93.87-1.93 1.93v1.71c0 .39-.21.95-.46 1.25l-1.35 1.59c-.58.69-.58 1.81 0 2.5l1.35 1.59c.25.3.46.86.46 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.73c.39 0 .96.21 1.26.47l1.58 1.36c.69.59 1.82.59 2.52 0l1.58-1.36c.3-.26.86-.47 1.26-.47h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.39.21-.96.47-1.26l1.36-1.58c.58-.69.58-1.83-.01-2.52Zm-4.88 1.26-1.17 3.56c-.15.59-.78 1.07-1.42 1.07h-1.85c-.32 0-.77-.11-.97-.31l-1.47-1.15c-.03.64-.32.91-1.03.91h-.48c-.74 0-1.04-.29-1.04-.99v-4.78c0-.7.3-.99 1.04-.99h.49c.74 0 1.04.29 1.04.99v.36l1.94-2.88c.2-.31.71-.53 1.14-.36.47.16.77.68.67 1.14l-.24 1.56c-.02.14.01.27.1.37.08.09.2.15.33.15h1.95c.38 0 .7.15.89.42.17.26.2.59.08.93Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.89 14.818 1.45 1.12c.19.19.61.28.89.28H14c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5c.09-.42-.19-.89-.61-1.03-.37-.14-.84.05-1.03.33l-1.92 2.85",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.5 14.818v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m14.66 20.01-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6M9.34 3.989l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6",
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
    d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.21c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.36Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.58 11.069c-.19-.27-.51-.42-.89-.42h-1.95c-.13 0-.25-.05-.33-.15a.478.478 0 0 1-.1-.37l.24-1.56c.1-.46-.21-.99-.67-1.14-.43-.16-.94.06-1.14.36l-1.94 2.88v-.36c0-.7-.3-.99-1.04-.99h-.49c-.74 0-1.04.29-1.04.99v4.78c0 .7.3.99 1.04.99h.49c.7 0 1-.27 1.03-.91l1.47 1.13c.2.2.65.31.97.31h1.85c.64 0 1.28-.48 1.42-1.07l1.17-3.56c.13-.32.1-.65-.09-.91Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.21c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.36Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.89 14.82 1.45 1.12c.19.19.61.28.89.28H14c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5c.09-.42-.19-.89-.61-1.03-.37-.14-.84.05-1.03.33l-1.92 2.85",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.5 14.82v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89Z",
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
    d: "M12.009 22.752c-.63 0-1.26-.21-1.75-.63l-1.58-1.36c-.16-.14-.56-.28-.77-.28h-1.73a2.68 2.68 0 0 1-2.68-2.68v-1.71c0-.21-.14-.6-.28-.76l-1.35-1.59c-.82-.97-.82-2.5 0-3.47l1.35-1.59c.14-.16.28-.55.28-.76v-1.71c0-1.48 1.2-2.68 2.68-2.68h1.73c.21 0 .61-.15.77-.28l1.58-1.36c.98-.84 2.51-.84 3.49 0l1.58 1.36c.16.14.56.28.77.28h1.7c1.48 0 2.68 1.2 2.68 2.68v1.7c0 .21.15.61.29.77l1.35 1.58c.84.98.84 2.51 0 3.49l-1.35 1.58c-.14.16-.28.56-.28.77v1.7c0 1.48-1.2 2.68-2.68 2.68h-1.7c-.21 0-.61.15-.77.28l-1.58 1.36c-.5.42-1.13.63-1.75.63Zm-5.83-17.73c-.65 0-1.18.53-1.18 1.18v1.71c0 .57-.27 1.3-.63 1.73l-1.35 1.59c-.35.41-.35 1.12 0 1.53l1.35 1.59c.37.44.64 1.17.64 1.73v1.71c0 .65.53 1.18 1.18 1.18h1.73c.58 0 1.31.27 1.75.65l1.58 1.36c.41.35 1.13.35 1.54 0l1.58-1.36c.44-.37 1.17-.65 1.75-.65h1.7c.65 0 1.18-.53 1.18-1.18v-1.7c0-.58.27-1.31.65-1.75l1.35-1.58c.35-.41.35-1.13 0-1.54l-1.35-1.58c-.37-.44-.65-1.17-.65-1.75v-1.7c0-.65-.53-1.18-1.18-1.18h-1.7c-.57 0-1.31-.27-1.75-.65l-1.58-1.36c-.41-.35-1.13-.35-1.54 0l-1.58 1.36c-.44.37-1.17.65-1.75.65h-1.74v.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 16.97h-1.78c-.42 0-1.05-.13-1.42-.5l-1.38-1.06.92-1.19 1.45 1.12c.1.07.28.12.43.12H14c.24 0 .53-.21.58-.42l1.14-3.47c.03-.09.03-.15.02-.17-.02-.03-.09-.06-.19-.06h-1.87c-.36 0-.69-.15-.93-.42-.23-.27-.34-.63-.29-1l.24-1.51c.02-.08-.04-.18-.1-.2-.06-.01-.15.01-.18.04l-1.91 2.84-1.25-.84 1.92-2.85c.4-.6 1.24-.86 1.92-.61.76.25 1.25 1.11 1.08 1.89L14 9.82h1.55c.59 0 1.11.25 1.42.69.3.43.37.99.18 1.52l-1.12 3.4c-.21.86-1.1 1.54-2.03 1.54Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.9 16.462h-.47c-1.47 0-1.69-1.03-1.69-1.64v-4.58c0-.61.22-1.64 1.69-1.64h.47c1.47 0 1.69 1.03 1.69 1.64v4.58c0 .61-.22 1.64-1.69 1.64Zm-.64-1.51c.04.01.1.01.18.01h.47c.08 0 .14 0 .18-.01 0-.03.01-.07.01-.13v-4.58c0-.06 0-.1-.01-.13-.04-.01-.1-.01-.18-.01h-.47c-.08 0-.14 0-.18.01 0 .03-.01.07-.01.13v4.58c0 .06 0 .1.01.13Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.75 2.45c.69-.59 1.82-.59 2.52 0l1.58 1.36c.3.26.86.47 1.26.47h1.7c1.06 0 1.93.87 1.93 1.93v1.7c0 .39.21.96.47 1.26l1.36 1.58c.59.69.59 1.82 0 2.52l-1.36 1.58c-.26.3-.47.86-.47 1.26v1.7c0 1.06-.87 1.93-1.93 1.93h-1.7c-.39 0-.96.21-1.26.47l-1.58 1.36c-.69.59-1.82.59-2.52 0l-1.58-1.36c-.3-.26-.86-.47-1.26-.47H6.18c-1.06 0-1.93-.87-1.93-1.93V16.1c0-.39-.21-.95-.46-1.25l-1.35-1.59c-.58-.69-.58-1.81 0-2.5l1.35-1.59c.25-.3.46-.86.46-1.25V6.21c0-1.06.87-1.93 1.93-1.93h1.73c.39 0 .96-.21 1.26-.47l1.58-1.36Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m9.891 14.818 1.45 1.12c.19.19.61.28.89.28h1.77c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5c.09-.42-.19-.89-.61-1.03-.37-.14-.84.05-1.03.33l-1.92 2.85",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.5 14.818v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
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

var LikeShapes = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
LikeShapes.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
LikeShapes.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
LikeShapes.displayName = 'LikeShapes';

module.exports = LikeShapes;
